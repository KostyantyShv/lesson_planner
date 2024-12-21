import {FC} from "react";

interface SvgProps{
    width?: string | number;
    height?: string | number;
    viewBox?: string;
    fill?: string;
    className?: string;
    stroke?: string;
    strokeWidth?: string | number;
    pathData: string;
}

const SvgComponent:FC<SvgProps> = ({
                                       width,
                                       height,
                                       viewBox,
                                       fill,
                                       stroke,
                                       strokeWidth,
                                       pathData,
                                       className,
                                   }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox={viewBox}
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d={pathData}
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default SvgComponent;