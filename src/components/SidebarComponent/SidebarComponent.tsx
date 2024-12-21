import {FC} from "react";
import SvgComponent from "../SvgComponent/SvgComponent.tsx";

const SidebarComponent:FC = () => {
    return (
        <div
            className="flex flex-col items-center w-[95px] min-h-screen bg-white border border-[#E3E4E8] rounded-[24px] px-2.5 py-8 mt-[20px] ml-[20px] mb-8"
        >

            <div className="flex items-center justify-center w-[30px] h-[31px] mb-6">
                <img
                    src="https://s3-alpha-sig.figma.com/img/a9db/e27e/8b916a5fd8f49c1a767e497a568029e2?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iDn13JCx3DZtbrlSX7jD5vnTGkFZzeKkJlFSS9NiobCEyNLuLfsqnV5pVzDj2jgn-rr4HiTbMePKaTCAmr6zhikldMFO5SBdS4SDICEAsqAbAxsEbdAIZN6by4J9OWeKr6LyvGRRPOSw90Zr3SAcygiOeH4jx2TKwwc8lH733WFKy7tnUemZdTGf7TIkYKSbl3UHv1VYkkdFCPtRJO9MpTfmxsgYn2nO6gGqkxjE1VZ7mx9bIaU44akGMjo0Pv8Ue4o6hHNn--hVEVn8l6207doX0QQGi02Oq-KQrr7FzvCJCOcvhbKTzH71Ip2kDlqVzrqPYJatYWJC~ItPBUcvTw__"
                    alt="Logo"
                    className="w-[30px] h-[31px]"
                />
            </div>


            <div className="flex flex-col items-center mt-6 gap-5">
                <div className="flex flex-col items-center w-[75px] h-[69px] px-0 py-2 gap-2">
                    <SvgComponent
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        stroke="#747678"
                        strokeWidth="2"
                        pathData="M8.5 13V12M12.5 13V10M16.5 13V8M8.5 21L12.5 17L16.5 21M3.5 4H21.5M4.5 4H20.5V16C20.5 16.2652 20.3946 16.5196 20.2071 16.7071C20.0196 16.8946 19.7652 17 19.5 17H5.5C5.23478 17 4.98043 16.8946 4.79289 16.7071C4.60536 16.5196 4.5 16.2652 4.5 16V4Z"

                    />

                    <span
                        className="text-[12px] font-normal text-[#747678] leading-[14.52px] tracking-[0.2px] text-center">
                        Overview
                    </span>
                </div>


                <div
                    className="flex flex-col items-center w-[75px] h-[69px] px-1 py-2 gap-2 bg-[#202020] rounded-[12px]">
                    <SvgComponent
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        pathData="M3 3h7v7H3V3zM14 3h7v7h-7V3zM3 14h7v7H3v-7zM14 14h7v7h-7v-7z"
                    />
                    <span
                        className="text-[12px] font-normal text-[#FFFFFF] leading-[14.52px] tracking-[0.2px] text-center">
                        AI Tools
                    </span>
                </div>
            </div>

            <div className="flex flex-col items-center mt-auto mb-4">
                <div className="flex items-center justify-center w-[50px] h-[50px] bg-[#CE9DFF] rounded-full">
                    <span className="text-[16px] font-bold text-[#7F00FF] leading-[20.16px] tracking-[0.2px]">
                        JD
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SidebarComponent;