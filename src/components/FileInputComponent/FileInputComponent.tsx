
const FileInputComponent = () => {
    return (
        <div
            className="flex flex-col items-center justify-center w-full border border-dashed border-gray-300 rounded-lg p-4"
        >
            <button
                type="button"
                className="flex items-center bg-[#1E1E1E] text-white text-[14px] font-normal leading-[21.7px] tracking-[0.03em] rounded-[12px] px-5 py-2"
            >
                <svg width="21" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 4V16V4Z" fill="white"/>
                    <path
                        d="M4.5 16V17C4.5 17.7956 4.81607 18.5587 5.37868 19.1213C5.94129 19.6839 6.70435 20 7.5 20H17.5C18.2956 20 19.0587 19.6839 19.6213 19.1213C20.1839 18.5587 20.5 17.7956 20.5 17V16M16.5 8L12.5 4M12.5 4L8.5 8M12.5 4V16"
                        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                Upload a file            </button>
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