import {ChangeEvent, FC, useEffect, useState} from "react";

interface ResponseProps {
    initialContent: string;
    onChange?: (updatedContent: string) => void;
}

const ResponseComponent:FC<ResponseProps> = ({ initialContent , onChange}) => {
    const [content, setContent] = useState(initialContent);

    useEffect(() => {
        setContent(initialContent);
    }, [initialContent]);

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const updatedContent = event.target.value;
        setContent(updatedContent);
        if (onChange) {
            onChange(updatedContent);
        }
    };
    return (
        <textarea
            value={content}
            onChange={handleChange}
            className="w-full h-[200px] p-3 text-[14px] font-mono border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

        />
    );
};

export default ResponseComponent;