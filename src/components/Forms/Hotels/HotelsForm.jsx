import React, { useState } from 'react'
import FloatingLabelInput from '../FloatingLabelInput'
import Location from '/public/rondure-assets/flightFormIcons/location.svg'
import DateIcon from '/public/rondure-assets/flightFormIcons/vuesax/linear/vuesax/linear/calendar.svg'
import RonSearch from '/public/rondure-assets/search-normal.svg'
import RonDown from '/public/rondure-assets/arrow-down.svg';

const HotelsForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedGuest, setSelectedGuest] = useState(null);

    const handleGuestSelect = (value) => {
        setSelectedGuest(value);
        setIsOpen(false);
    };

    return (
        <div className=''>
            <div className="container p-0 mt-16">
                <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-2 lg:gap-x-10 ">
                    <div className="lg:col-span-2">
                        <FloatingLabelInput icon={<Location />} label="Location" />
                    </div>

                    <div className="">
                        <FloatingLabelInput type={'date'} icon={<DateIcon />} label="Departure date" placeholder="Select date" />
                    </div>

                    <div className="">
                        <FloatingLabelInput type={'date'} icon={<DateIcon />} label="Return date" placeholder="Select date" />
                    </div>

                    <div className="">
                        <div className="relative w-full">
                            <button 
                                onClick={() => setIsOpen(!isOpen)} 
                                className="flex justify-between text-[1.6rem] items-center w-full border border-gray-400 rounded-[0.8rem] h-[55px] px-[1rem] text-[#1D1D1D]"
                            >
                                <span>{selectedGuest + " Guest(s)" || "Number of guests"}</span>
                                <RonDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isOpen && (
                                <div className="absolute animate-in duration-300 fade-in z-10 w-full bg-white shadow-md rounded-b-[0.8rem] mt-1">
                                    <div className="p-4">
                                        <span className="block text-[1.3rem] mb-2">Choose number of guests</span>
                                        {[1, 2, 3, 4, 5].map((value) => (
                                            <button 
                                                key={value} 
                                                onClick={() => handleGuestSelect(value)} 
                                                className="block text-[1.6rem] text-[#1D1D1D] w-full text-left p-2 hover:bg-gray-100"
                                            >
                                                {value} Guest{value > 1 ? 's' : ''}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Search Button */}
                    <div className="pt-8 sm:pt-0 lg:col-span-1 ">
                        <div className="bg-[#283372] text-white text-[16px] font-[600] leading-[19.5px] flex items-center justify-center rounded-[8px] text-center h-[55px]">
                            <button className="flex items-center justify-center space-x-1 w-full">
                                <span>Search</span>
                                <span><RonSearch /></span>
                            </button>
                        </div>
                    </div>

                    {/* Invisible Div for Spacing (if needed) */}
                    <div className="pt-8 sm:pt-0 invisible lg:col-span-1">
                        <div className="bg-[#283372] text-white text-[16px] font-[600] leading-[19.5px] flex items-center justify-center rounded-[8px] text-center h-[55px]">
                            <button className="flex items-center justify-center space-x-1 w-full">
                                <span>Search</span>
                                <span><RonSearch /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelsForm