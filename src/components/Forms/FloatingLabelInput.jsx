import React from "react";
const FloatingLabelInput = ({ label, icon, type }) => {
    const [inputType, setInputType] = React.useState("text");

    const handleFocus = () => {
        if (type === "date" || type === "time") {
            setInputType(type);
        }
    };

    const handleBlur = () => {
        setInputType("text");
    };

    return (
        <div className="relative w-full">
            <input
                type={inputType}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="h-[55px] flex items-center px-[1rem] pt-3 w-full text-[1.6rem] leading-[19.5px] text-gray-900 bg-transparent rounded-[0.8rem] border border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
                placeholder=" "
            />
            <label
                htmlFor="floating_outlined"
                className="absolute pointer-events-none left-2 text-[1.6rem] text-[#1D1D1D73] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
                <span>{label}</span>
            </label>
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                {icon}
            </span>
        </div>
    );
};

export default FloatingLabelInput