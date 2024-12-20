import {FC} from "react";

const SidebarComponent:FC = () => {
    return (
        <div
            className="flex flex-col items-center w-[95px] min-h-screen bg-white border border-[#E3E4E8] rounded-[24px] px-2.5 py-8 mb-8"
            style={{
                marginTop: "20px",
                marginLeft: "20px"
            }}
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
                    <div
                        className="flex items-center justify-center w-[18px] h-[17px] border-2 border-[#747678] rounded-full">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-[#747678]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </div>
                    <span
                        className="text-[12px] font-normal text-[#747678] leading-[14.52px] tracking-[0.2px] text-center">
                        Overview
                    </span>
                </div>


                <div
                    className="flex flex-col items-center w-[75px] h-[69px] px-1 py-2 gap-2 bg-[#202020] rounded-[12px]">
                    <div
                        className="flex items-center justify-center w-[16px] h-[16px] border-2 border-[#FFFFFF] rounded-full">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-[#FFFFFF]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </div>
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