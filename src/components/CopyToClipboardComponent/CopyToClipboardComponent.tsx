import {FC, useState} from "react";


interface CopyToClipboardButtonProps {
    text: string;
}

const CopyToClipboardComponent:FC<CopyToClipboardButtonProps> = ({text}) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (error) {
            console.error("Failed to copy text:", error);
        }
    };


    return (
        <button
            onClick={handleCopy}
            className={`w-full h-[64px] px-10 py-3 ${
                isCopied ? "bg-[#28a745]" : "bg-[#202020]"
            } text-white text-[16px] font-normal leading-[21.6px] tracking-[0.01em] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 mt-6`}
            style={{
                textAlign: "center",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
            }}
        >
            {isCopied ? "Copied!" : "Copy"}
        </button>
    );
};

export default CopyToClipboardComponent;