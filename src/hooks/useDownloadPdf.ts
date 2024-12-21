import { useState } from "react";

export const useDownloadPdf = () => {
    const [isDownloading, setIsDownloading] = useState(false);

    const downloadPdf = async (markdownText: string) => {
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
        } finally {
            setIsDownloading(false);
        }
    };

    return { isDownloading, downloadPdf };
};
