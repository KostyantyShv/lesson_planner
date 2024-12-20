import {FC} from 'react';

const ReturnToLessonPlannerMainComponent:FC = () => {
    return (
        <div
            className="flex items-center w-full max-w-[662px] h-auto bg-white border border-[#E3E4E8] rounded-[24px] px-6 py-4 mb-6"
            style={{
                marginTop: "20px",
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-4 text-[#1E1E1E]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                />
            </svg>

            <button
                className="bg-[#1E1E1E] text-white text-[14px] font-normal leading-[21.7px] tracking-[0.03em] rounded-[12px] px-5 py-2"
            >
                Lesson Planner
            </button>
        </div>
    );
};

export default ReturnToLessonPlannerMainComponent;