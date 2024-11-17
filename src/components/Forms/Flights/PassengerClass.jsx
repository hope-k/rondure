import React, { useState, useEffect } from 'react';
import { MinusIcon, PlusIcon } from 'lucide-react';
import RonDown from '/public/rondure-assets/arrow-down.svg';

export const PassengerClassSelector = ({ adults, setAdults, numChildren, setNumChildren, selectedClass, setSelectedClass, ref }) => {
    const toggle = () => setIsOpen(prev => !prev);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref?.current && !ref?.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
    const getPassengerPlaceholder = (selectedClass) => {
        const classText = selectedClass.charAt(0).toUpperCase() + selectedClass.slice(1); // Capitalize class
        if (adults > 0) {
            return `${numChildren + adults} Passenger, ${classText}`;
        }
        return 'Passenger, Class';
    };

    return (
        <div className="relative ">
            {/* trigger */}
            <button onClick={toggle} className="flex h-[55px] p-4 justify-between items-center w-full border border-gray-400 rounded-[0.8rem] ">
                <span className="text-[#1D1D1D73] text-[1.6rem]">{getPassengerPlaceholder(selectedClass)}</span>
                <span className={`pr-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <RonDown />
                </span>
            </button>
            {isOpen && (
                <div className="absolute w-full bg-white rounded-b-[1rem] shadow-lg mt-1 animate-in fade-in ease-in-out duration-300">
                    <div className='p-4'>
                        {/* Passenger Category */}
                        <div className='mb-2'>
                            <span className='text-[1.2rem] text-[#1D1D1D73] font-[400]'>Passenger</span>
                        </div>

                        {/* Adult Quantity Selector */}
                        <div className='mb-6 w-full'>
                            <div className="flex justify-between w-full h-full">
                                <span className="text-[#1D1D1D] text-[1.6rem] font-[400]">Adults</span>
                                <div className="flex items-center space-x-4">
                                    <button
                                        onClick={() => setAdults(adults > 0 ? adults - 1 : 0)}
                                        className="flex items-center justify-center w-10 h-10 border rounded-full bg-white shadow-md"
                                    >
                                        <MinusIcon size={16} />
                                    </button>
                                    <span className='text-[1.6rem]'>{adults}</span>
                                    <button
                                        onClick={() => setAdults(adults + 1)}
                                        className="flex items-center justify-center w-10 h-10 border rounded-full bg-white "
                                    >
                                        <PlusIcon size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Children Quantity Selector */}
                        <div>
                            <div className="flex justify-between items-start">
                                <div className='flex flex-col -space-y-2'>
                                    <span className='text-[#1D1D1D] text-[1.6rem] font-[400]'>Children</span>
                                    <span className='text-[1.2rem] text-[#1D1D1D73] font-[400]'>under 17 years</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <button
                                        onClick={() => setNumChildren(numChildren > 0 ? numChildren - 1 : 0)}
                                        className="flex items-center justify-center w-10 h-10 border rounded-full bg-white "
                                    >
                                        <MinusIcon size={16} />
                                    </button>
                                    <span className='text-[1.6rem]'>{numChildren}</span>
                                    <button
                                        onClick={() => setNumChildren(numChildren + 1)}
                                        className="flex items-center justify-center w-10 h-10 border rounded-full bg-white "
                                    >
                                        <PlusIcon size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t "></div>

                    {/* Class Category */}
                    <div className='p-4'>
                        <div className='mb-2'>
                            <span className='text-[1.2rem] text-[#1D1D1D73] font-[400]'>Class</span>
                        </div>
                        <div className="flex justify-between mb-6">
                            <span className='text-[#1D1D1D] text-[1.6rem] font-[400]'>Economy</span>
                            <input
                                type="radio"
                                name="class"
                                value="economy"
                                checked={selectedClass === 'economy'}
                                onChange={() => setSelectedClass('economy')}
                                className="w-[2.4rem] h-[2.4rem] accent-ron_orange"
                            />
                        </div>
                        <div className="flex justify-between ">
                            <span className='text-[#1D1D1D] text-[1.6rem] font-[400]'>Business</span>
                            <input
                                type="radio"
                                name="class"
                                value="business"
                                checked={selectedClass === 'business'}
                                onChange={() => setSelectedClass('business')}
                                className="w-[2.4rem] h-[2.4rem] accent-ron_orange"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}