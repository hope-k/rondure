import React, { useState, useRef, useEffect } from 'react'
import FloatingLabelInput from '../FloatingLabelInput'
import Location from '/public/rondure-assets/flightFormIcons/location.svg'
import DateIcon from '/public/rondure-assets/flightFormIcons/vuesax/linear/vuesax/linear/calendar.svg'
import Plane from '/public/rondure-assets/flightFormIcons/vuesax/linear/airplane.svg'
import RonSearch from '/public/rondure-assets/search-normal.svg'
import RonDown from '/public/rondure-assets/arrow-down.svg'
import { MinusIcon, PlusIcon } from 'lucide-react';

const PassengerClassSelector = ({ getPassengerPlaceholder, adults, setAdults, children, setChildren, isOpen, toggle }) => {
  return (
    <div className="relative ">
      {/* trigger */}
      <button onClick={toggle} className="flex h-[55px] p-4 justify-between items-center w-full border border-gray-400 rounded-[0.8rem] ">
        <span className="text-[#1D1D1D73] text-[1.6rem]">{getPassengerPlaceholder()}</span>
        <span className="pr-1">
          <RonDown />
        </span>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full bg-white rounded-b-[1rem] shadow-lg mt-1 animate-in fade-in ease-in-out duration-300">
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
                    onClick={() => setChildren(children > 0 ? children - 1 : 0)}
                    className="flex items-center justify-center w-10 h-10 border rounded-full bg-white "
                  >
                    <MinusIcon size={16} />
                  </button>
                  <span className='text-[1.6rem]'>{children}</span>
                  <button
                    onClick={() => setChildren(children + 1)}
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
              <input type="radio" name="class" value="economy" className="w-[2.4rem] h-[2.4rem] accent-ron_orange" />
            </div>
            <div className="flex justify-between ">
              <span className='text-[#1D1D1D] text-[1.6rem] font-[400]'>Business</span>
              <input type="radio" name="class" value="business" className="w-[2.4rem] h-[2.4rem] accent-ron_orange" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const FlightRoundTrip = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const getPassengerPlaceholder = () => {
    if (adults > 0) {
      return `${adults} Adult${adults > 1 ? 's' : ''}`;
    }
    return 'Passenger, Class';
  };

  const toggle = () => setIsOpen(prev => !prev);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="container p-0" ref={ref}>
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-2 lg:gap-x-10">
        <div className="">
          <FloatingLabelInput icon={<Location />} label="From" />
        </div>
        <div className="">
          <FloatingLabelInput icon={<Plane />} label="To" />
        </div>
        <div className="">
          <FloatingLabelInput type={'date'} icon={<DateIcon />} label="Departure date" />
        </div>
        <div className="">
          <FloatingLabelInput type={'date'} icon={<DateIcon />} label="Return date" />
        </div>
        <div className=''>
          <PassengerClassSelector
            adults={adults}
            setAdults={setAdults}
            children={children}
            setChildren={setChildren}
            getPassengerPlaceholder={getPassengerPlaceholder}
            isOpen={isOpen}
            toggle={toggle}
          />
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
      </div>
    </div>
  )
}

export default FlightRoundTrip