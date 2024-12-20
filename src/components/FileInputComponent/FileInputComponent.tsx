
const FileInputComponent = () => {
    return (
        <div
            className="flex flex-col items-center justify-center w-full border border-dashed border-gray-300 rounded-lg p-4"
        >
            <button
                type="button"
                className="flex items-center bg-[#1E1E1E] text-white text-[14px] font-normal leading-[21.7px] tracking-[0.03em] rounded-[12px] px-5 py-2"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                    />
                </svg>
                Upload a file
            </button>
            <p
                className="mt-4 text-sm text-gray-500 text-center"
                style={{
                    // fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "18.9px",
                    textAlign: "center",
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                }}
            >
                Max. file size 50 MB <br/>
                (PDF, DOCX, PPTX, TXT, HTML)
            </p>
        </div>
    );
};

export default FileInputComponent;