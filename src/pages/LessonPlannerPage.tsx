import {useState} from "react";
import {generateLessonPlan} from "../services/apiService.ts";
import LessonPlannerForm from "../components/LessonPlannerForm.tsx";
import ResponseComponent from "../components/ResponceComponent.tsx";
import DownloadPdfComponent from "../components/DownloadPdfComponent/DownloadPdfComponent.tsx";
import CopyToClipboardComponent from "../components/CopyToClipboardComponent/CopyToClipboardComponent.tsx";
import GradeLevelComponent from "../components/GradeLevelComponent.tsx";


const LessonPlannerPage = () => {
    const [response, setResponse] = useState<string | null>(null);

    const handleFormSubmit = async (data: { topic: string; duration: string }) => {
        try {
            const result = await generateLessonPlan(data);

            setResponse(result);
        } catch (error) {
            console.error("Error fetching lesson plan:", error);
        }
    };

    const handleMarkdownChange = (updatedContent: string) => {
        setResponse(updatedContent);
    };

    const handleCancel = () => {
        setResponse(null);
    };

    return (
        <div className="w-full max-w-[662px] p-6 bg-white rounded-[24px] border border-[#E3E4E8] flex flex-col gap-6 mb-8">
            <div className="flex items-center justify-center w-[70px] h-[70px] bg-[#B3E02B40] rounded-[16px]">
                <img
                    src="https://s3-alpha-sig.figma.com/img/e118/68fc/9219bc7afc9393b3d2480c4762e85d1f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XvGPoIn7EW7Mb7bgn23YvAIlrPmdn6TeclwCphWZLd7oa1wtzonDrcFgUWeryi6eMy0thLO~aVA9TWZYuXNf3npkQbfO3kwuEXov5YLkM81c4c31kvXtvBVLnuEwGei6F6bQtBUfj~lKEjB9ODi~8WK0kTPzOIwz~m8lz1nfwUUOJVx2M-gP-soWkbop3xE0McOsBSHfCIJLk7NfExeIYFEAGm1v7snUdatUzUTl9s7cm2vaD~d-VJEwXAeGDlEFvQTw8SjYRKD1VT4C8EYkMwlXMbAkMQV5eCsDX4-TMPslDSPLENW7-Fz2ZK2kJzJDbnNM2njgFSmtRC~hy2dBDw__"
                    alt="Lesson Planner Logo"
                    className="w-[40px] h-[40px]"
                />
            </div>
            <div className="space-y-1">
                <h1 className="font-manrope text-[24px] font-bold leading-[32.78px] tracking-[-0.005em] text-left">
                    Lesson Planner
                </h1>
                <h2 className="font-inter text-[16px] font-normal leading-[23.2px] text-left text-[#747678]">
                    This AI tool helps you with creating lesson plans for your class!
                </h2>
            </div>

            <GradeLevelComponent/>

            <LessonPlannerForm onSubmit={handleFormSubmit} onCancel={handleCancel}/>
            {response && (
                <>
                    <ResponseComponent
                        initialContent={response}
                        onChange={handleMarkdownChange}
                    />
                    <DownloadPdfComponent markdownText={response}/>
                    <CopyToClipboardComponent text={response}/>
                </>
            )}
        </div>
    );
};

export default LessonPlannerPage;