import {FC} from "react";

interface CancelButtonProps {
    onCancel: () => void;
}

const CancelGenerateButtonComponent:FC<CancelButtonProps> = ({onCancel}) => {
    return (
        <div className="flex justify-center mt-2">
            <button
                type="button"
                className="text-[#D73636] text-[14px] font-normal leading-[18.9px] focus:outline-none mt-2"
                style={{
                    fontFamily: "Inter",
                    textAlign: "center",
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                }}
                onClick={onCancel}
            >
                Cancel
            </button>
        </div>
    );
};

export default CancelGenerateButtonComponent;