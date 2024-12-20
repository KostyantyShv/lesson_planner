import {FC, useState} from "react";

const GradeLevelComponent:FC = () => {
    const [selectedGrade, setSelectedGrade] = useState<string>("1st Grade");

    const grades = [
        "1st",
        "2nd",
        "3rd",
        "4th",
    ];

    const handleGradeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedGrade(event.target.value);
    };

    return (
        <div className="w-full">
            <label
                htmlFor="grade-select"
                className="block text-sm font-medium text-[#202020] mb-2"
                style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "21.6px",
                    letterSpacing: "0.01em",
                    textAlign: "left",
                }}
            >
                Grade level:
            </label>
            <div className="relative">
                <select
                    id="grade-select"
                    value={selectedGrade}
                    onChange={handleGradeChange}
                    className="w-full h-[64px] px-6 py-4 text-[16px] font-normal text-[#202020] bg-gray-50 border border-[#F3F3F3] rounded-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                    style={{
                        //fontFamily: "Inter",
                    }}
                >
                    {grades.map((grade) => (
                        <option key={grade} value={grade}>
                            {grade}
                        </option>
                    ))}
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 10L12 15L17 10H7Z"
                            fill="#202020"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default GradeLevelComponent;