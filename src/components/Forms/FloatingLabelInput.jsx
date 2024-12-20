const FloatingLabelInput = ({ label, value, error, name, icon, type, rounded = true, textSmall, bgTrans, borderless, handleChange }) => {

    return (
        <>
            <div className="relative w-full h-fit">
                <input
                    type={type}
                    onChange={handleChange} // Implementing the handleChange function
                    className={`h-[55px] font-[400] z-20 relative flex items-center px-[1rem] pt-10 w-full text-[1.6rem] leading-[19.5px] text-gray-900 bg-transparent ${rounded ? 'rounded-[0.8rem]' : 'rounded-none'} ${borderless ? 'border-b border-gray-400' : ` border ${error ? 'border-red-600' : 'border-gray-400'}`} appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer`}
                    placeholder=" "
                    name={name}

                />

                <label
                    htmlFor="floating_outlined"
                    className={`absolute pointer-events-none left-2 ${textSmall ? 'text-[1.4rem]' : 'text-[1.6rem]'} text-[#1d1d1d] duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] ${bgTrans ? 'bg-transparent' : 'bg-white'} px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-4`}
                >
                    <span>{label}</span>
                </label>
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    {icon}
                </span>
            </div>
            {error && <p className="text-red-600 text-[1rem] mt-1">{error}</p>}

        </>
    );
};

export default FloatingLabelInput