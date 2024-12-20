import {FC, FormEvent, useState} from "react";
import FileInputComponent from "./FileInputComponent/FileInputComponent.tsx";
import CancelGenerateButtonComponent from "./CancelGenerateButtonComponent/CancelGenerateButtonComponent.tsx";

interface FormProps {
    onSubmit: (data: { topic: string; duration: string }) => void;
    onCancel: () => void;
}


const LessonPlannerForm:FC<FormProps> = ({onSubmit, onCancel}) => {

    const [topic, setTopic] = useState<string>("")
    const [duration, setDuration] = useState<string>("15")
    const predefinedDurations = ["15", "30", "45", "60", "90", "120"];

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
                        className="block text-sm font-medium text-[#202020] mb-2"
                        style={{
                            fontSize: "16px",
                            fontWeight: 600,
                            lineHeight: "21.6px",
                            letterSpacing: "0.01em",
                            textAlign: "left",
                        }}
                    >
                        Lecture duration (in minutes):
                    </label>
                    <div className="relative">
                        <select
                            id="duration"
                            className="w-full h-[64px] px-6 py-4 text-[16px] font-normal text-[#202020] bg-gray-50 border border-[#F3F3F3] rounded-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                            style={{
                                //fontFamily: "Inter",
                            }}
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
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 9L12 16L5 9" stroke="#202020" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                            </svg>

                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="topic"
                        className="block text-sm font-medium text-[#202020] mb-1"
                        style={{
                            //fontFamily: "Inter",
                            fontSize: "16px",
                            fontWeight: 600,
                            lineHeight: "21.6px",
                            letterSpacing: "0.01em",
                            textAlign: "left",
                            textUnderlinePosition: "from-font",
                            textDecorationSkipInk: "none",
                        }}
                    >
                        Topic, Standard, or Objective:
                    </label>
                    <p
                        className="text-sm text-[#747678] mb-2"
                        style={{
                            //fontFamily: "Inter",
                            fontSize: "14px",
                            fontWeight: 400,
                            lineHeight: "20.3px",
                            textAlign: "left",
                            textUnderlinePosition: "from-font",
                            textDecorationSkipInk: "none",
                        }}
                    >Provide how the assignment should open the conversation.</p>
                    <textarea
                        id="topic"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="Student last lesson was on the geography of the United States, have the lesson include group work, etc. The lesson plan should include standards (CCSS, TEKS)"
                        className={`w-full h-[147px] px-6 py-3 text-sm font-normal bg-gray-50 border border-[#E3E4E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none ${
                            topic ? 'text-black' : 'text-[#747678]'
                        }`}
                        style={{
                            //fontFamily: "Inter",
                            fontSize: "14px",
                            fontWeight: 400,
                            lineHeight: "18.9px",
                            textAlign: "left",
                        }}
                        required
                    />
                </div>

                <div>
                    <h2
                        className="font-inter text-[14px] font-normal leading-[18.9px] text-left text-[#202020] mt-4 mb-2"
                        style={{
                            //fontFamily: "Inter",
                            fontSize: "14px",
                            fontWeight: 400,
                            lineHeight: "18.9px",
                            letterSpacing: "0.01em",
                            textAlign: "left",
                            textUnderlinePosition: "from-font",
                            textDecorationSkipInk: "none",
                        }}
                    >
                        Upload additional documents
                    </h2>
                    <FileInputComponent/>
                </div>

                <button
                    type="submit"
                    className="w-full h-[64px] px-10 py-3 bg-[#202020] text-white text-[16px] font-normal leading-[21.6px] tracking-[0.01em] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 mt-6"
                    style={{
                        //fontFamily: "Inter",
                        textAlign: "center",
                        textUnderlinePosition: "from-font",
                        textDecorationSkipInk: "none",
                    }}
                >Create lesson plan
                </button>
                <CancelGenerateButtonComponent onCancel={handleCancel} />

            </form>
        </div>
    );
};

export default LessonPlannerForm;