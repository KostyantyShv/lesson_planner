import {ChangeEvent, FC, useState} from "react";
import SvgComponent from "./SvgComponent/SvgComponent.tsx";
import {grades} from "../constants/constants.ts";

const GradeLevelComponent:FC = () => {
    const [selectedGrade, setSelectedGrade] = useState<string>("1st Grade");

    const handleGradeChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedGrade(event.target.value);
    };

    return (
        <div className="w-full">
            <label
                htmlFor="grade-select"
                className="block text-[16px] font-semibold leading-[21.6px] tracking-[0.01em] text-[#202020] text-left mb-2"

            >
                Grade level:
            </label>
            <div className="relative">
                <select
                    id="grade-select"
                    value={selectedGrade}
                    onChange={handleGradeChange}
                    className="w-full h-[64px] px-6 py-4 text-[16px] font-normal text-[#202020] bg-gray-50 border border-[#F3F3F3] rounded-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                >
                    {grades.map((grade) => (
                        <option key={grade} value={grade}>
                            {grade}
                        </option>
                    ))}
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <SvgComponent
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#202020"
                        strokeWidth="2"
                        pathData="M19 9L12 16L5 9"
                    />
                </div>
            </div>
        </div>
    );
};

export default GradeLevelComponent;