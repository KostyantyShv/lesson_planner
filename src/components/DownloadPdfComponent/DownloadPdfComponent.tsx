import {FC, useState} from "react";


interface DownloadPDFButtonProps {
    markdownText: string;
}

const DownloadPdfComponent:FC<DownloadPDFButtonProps> = ({markdownText}) => {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = async () => {
        setIsDownloading(true);
        try {
            const response = await fetch("https://md-to-pdf.fly.dev", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({ markdown: markdownText, engine: "pdflatex" }),
            });

            if (!response.ok) {
                throw new Error("Failed to generate PDF");
            }

            const pdfBlob = await response.blob();

            const url = window.URL.createObjectURL(pdfBlob);
            const link = document.createElement("a");
            link.href = url;
            link.download = "lesson_plan.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error("Error downloading PDF:", error);
        } finally {
            setIsDownloading(false);
        }
    };


    return (
        <button
            onClick={handleDownload}
            disabled={isDownloading}
            className={`w-full h-[64px] px-10 py-3 ${
                isDownloading ? "bg-gray-400" : "bg-[#202020]"
            } text-white text-[16px] font-normal leading-[21.6px] tracking-[0.01em] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 mt-6`}
            style={{
                textAlign: "center",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
            }}
        >
            {isDownloading ? "Downloading..." : "Download PDF"}
        </button>
    );
};

export default DownloadPdfComponent;