import {FC} from 'react';
import SvgComponent from "../SvgComponent/SvgComponent.tsx";

const ReturnToLessonPlannerMainComponent:FC = () => {
    return (
        <div
            className="flex items-center w-full max-w-[662px] h-auto bg-white border border-[#E3E4E8] rounded-[24px] px-6 py-4 mt-[20px] mb-6"
        >
            <SvgComponent
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#232325"
                strokeWidth="2"
                pathData="M10 19L3 12M3 12L10 5M3 12H21"
            />
            <button
                className="ml-3 bg-[#1E1E1E] text-white text-[14px] font-normal leading-[21.7px] tracking-[0.03em] rounded-[12px] px-5 py-2"
            >
                Lesson Planner
            </button>
        </div>
    );
};

export default ReturnToLessonPlannerMainComponent;