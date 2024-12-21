import {FC} from "react";
import {useDownloadPdf} from "../../hooks/useDownloadPdf.ts";


interface DownloadPDFButtonProps {
    markdownText: string;
}

const DownloadPdfComponent:FC<DownloadPDFButtonProps> = ({markdownText}) => {
    const { isDownloading, downloadPdf } = useDownloadPdf();

    const handleDownload = async () => {
        try {
            await downloadPdf(markdownText);
        } catch (error) {
            console.error("Error downloading PDF:", error);
        }
    };


    return (
        <button
            onClick={handleDownload}
            disabled={isDownloading}
            className={`w-full h-[64px] px-10 py-3 ${
                isDownloading ? "bg-gray-400" : "bg-[#202020]"
            } text-white text-[16px] font-normal leading-[21.6px] tracking-[0.01em] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 mt-6 text-center`}

        >
            {isDownloading ? "Downloading..." : "Download PDF"}
        </button>
    );
};

export default DownloadPdfComponent;