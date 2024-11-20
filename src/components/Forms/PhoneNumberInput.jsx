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

const PhoneNumberInput = ({ onChange }) => {
    const [selectedCountry, setSelectedCountry] = useState(countryOptions[0].value);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isOpen, setIsOpen] = useState(false)

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        const number = e.target.value;
        setPhoneNumber(number);
        if (onChange) {
            onChange(`${selectedCountry}${number}`);
        }
    };

    return (
        <div className="w-full">
            {/* Country code dropdown */}


            <div className="flex relative items-center h-[55px] border border-gray-400 pl-[1rem]">
                <div className="relative">
                    <div className="relative ">
                        <button
                            onClick={() => setIsOpen(prev => !prev)}
                            className="flex items-center justify-between relative w-full h-[55px] border-y  border-gray-400  bg-white rounded-none cursor-pointer"
                        >
                            <span className="text-3xl"> {countryOptions.find(country => country.value === selectedCountry).flag}</span>
                            <ChevronDown className='mx-1' size={14}/>
                            <span className='pl-3 text-[1.6rem] text-[#1D1D1D73]'> {countryOptions.find(country => country.value === selectedCountry).value}</span>


                        </button>
  
                    </div>

                </div>
                {/* Phone number input */}
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    className="w-full rounded-none h-full outline-none appearance-none px-[1rem] text-[1.6rem] text-[#1D1D1D73]"
                />

                {/* dropdown */}
                {isOpen && (
                    <div className="absolute z-10 w-auto top-[6rem] left-0 bg-white border border-gray-200 rounded-[.8rem] shadow-lg">
                        {countryOptions.map((country) => (
                            <div key={country.value} onClick={() => {
                                setSelectedCountry(country.value);
                                setIsOpen(false);
                            }} className="flex items-center p-2 cursor-pointer hover:bg-gray-200">
                                <span className='text-[1.4rem]'>{country.flag} {country.label}</span>
                            </div>
                        ))}
                    </div>
                )}

    
            </div>

        </div>
    );
};

export default PhoneNumberInput;