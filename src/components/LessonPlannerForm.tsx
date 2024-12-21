import {FC, FormEvent, useState} from "react";
import FileInputComponent from "./FileInputComponent/FileInputComponent.tsx";
import CancelGenerateButtonComponent from "./CancelGenerateButtonComponent/CancelGenerateButtonComponent.tsx";
import SvgComponent from "./SvgComponent/SvgComponent.tsx";
import {predefinedDurations} from "../constants/constants.ts";

interface FormProps {
    onSubmit: (data: { topic: string; duration: string }) => void;
    onCancel: () => void;
}


const LessonPlannerForm:FC<FormProps> = ({onSubmit, onCancel}) => {

    const [topic, setTopic] = useState<string>("")
    const [duration, setDuration] = useState<string>("15")


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const durationNum = parseInt(duration);
        if (durationNum < 15 || durationNum > 120) {
            alert("Duration must be between 15 and 120 minutes.");
            return;
        }
        onSubmit({ topic, duration });
    };

    const handleCancel = () => {
        setTopic("");
        setDuration("15");
        onCancel();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        htmlFor="duration"
                        className="block text-[16px] font-semibold text-[#202020] leading-[21.6px] tracking-[0.01em] text-left mb-2"
                    >
                        Lecture duration (in minutes):
                    </label>
                    <div className="relative">
                        <select
                            id="duration"
                            className="w-full h-[64px] px-6 py-4 text-[16px] font-normal text-[#202020] bg-gray-50 border border-[#F3F3F3] rounded-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"

                            onChange={(e) => setDuration(e.target.value)}
                            value={duration}
                        >
                            {predefinedDurations.map((dur) => (
                                <option key={dur} value={dur}>
                                    {dur}
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
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="topic"
                        className="block text-[16px] font-semibold text-[#202020] leading-[21.6px] tracking-[0.01em] text-left mb-1"

                    >
                        Topic, Standard, or Objective:
                    </label>
                    <p
                        className="text-[14px] font-normal text-[#747678] leading-[20.3px] text-left mb-2"

                    >Provide how the assignment should open the conversation.</p>
                    <textarea
                        id="topic"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="Student last lesson was on the geography of the United States, have the lesson include group work, etc. The lesson plan should include standards (CCSS, TEKS)"
                        className={`w-full h-[147px] px-6 py-3 text-[14px] font-normal leading-[18.9px] text-left bg-gray-50 border border-[#E3E4E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none ${
                            topic ? 'text-black' : 'text-[#747678]'
                        }`}
                        required
                    />
                </div>

                <div>
                    <h2
                        className="text-[14px] font-normal leading-[18.9px] text-[#202020] tracking-[0.01em] text-left mt-4 mb-2"
                    >
                        Upload additional documents
                    </h2>
                    <FileInputComponent/>
                </div>

                <button
                    type="submit"
                    className="w-full h-[64px] px-10 py-3 bg-[#202020] text-white text-[16px] font-normal leading-[21.6px] tracking-[0.01em] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 mt-6 text-center"
                >
                    Create lesson plan
                </button>
                <CancelGenerateButtonComponent onCancel={handleCancel}/>

            </form>
        </div>
    );
};

export default LessonPlannerForm;