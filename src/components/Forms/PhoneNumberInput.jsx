import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Define the country options
const countryOptions = [
    { label: 'Ghana', value: '+233', flag: '🇬🇭' },
    { label: 'United States', value: '+1', flag: '🇺🇸' },
    { label: 'United Kingdom', value: '+44', flag: '🇬🇧' },
    { label: 'Nigeria', value: '+234', flag: '🇳🇬' },
    // Add more countries as needed
];

const PhoneNumberInput = ({ handleChange, radius, name,error, type }) => {
    const [selectedCountryCode, setSelectedCountryCode] = useState(countryOptions[0].value);
    const [isOpen, setIsOpen] = useState(false)





    return (
        <div className="w-full">
            {/* Country code dropdown */}
            <div className={`flex relative items-center h-[55px] border border-gray-400 pl-[1rem] ${radius ? `rounded-[${radius}]` : 'rounded-none'}`}>
                <div className="relative">
                    <div className="relative ">
                        <button
                            type='button'
                            onClick={() => setIsOpen(prev => !prev)}
                            className={`flex items-center justify-between relative w-full h-[55px] border-y border-gray-400 bg-transparent ${radius ? `rounded-[${radius}]` : 'rounded-none'} cursor-pointer`}
                        >
                            <span className="text-3xl"> {countryOptions.find(country => country.value === selectedCountryCode).flag}</span>
                            <ChevronDown className='mx-1' size={14} />
                            <span className='pl-3 text-[1.6rem] text-lack'> {countryOptions.find(country => country.value === selectedCountryCode).value}</span>
                        </button>
                    </div>
                </div>
                {/* Phone number input */}
                <input
                    type={type}
                    name={name}
                    onChange={(e) => handleChange(e, selectedCountryCode)}
                    className={`w-full h-full outline-none appearance-none bg-transparent px-[1rem] text-[1.6rem] text-black ${radius ? `rounded-[${radius}]` : 'rounded-none'}`}
                />


                {/* dropdown */}
                {isOpen && (
                    <div className="absolute z-50 w-auto top-[6rem] left-0 bg-white border border-gray-200 rounded-[.8rem] shadow-lg">
                        {countryOptions.map((country) => (
                            <div key={country.value} onClick={() => {
                                setSelectedCountryCode(country.value);
                                setIsOpen(false);
                            }} className="flex items-center p-2 cursor-pointer hover:bg-gray-200">
                                <span className='text-[1.4rem]'>{country.flag} {country.label}</span>
                            </div>
                        ))}
                    </div>
                )}

            </div>
            {error && <p className="text-red-600 text-[1rem] mt-1">{error}</p>}

        </div>
    );
};

export default PhoneNumberInput;