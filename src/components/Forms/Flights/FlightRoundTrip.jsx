import React, { useContext, useRef } from 'react'
import FloatingLabelInput from '../FloatingLabelInput'
import Location from '/public/rondure-assets/flightFormIcons/location.svg'
import DateIcon from '/public/rondure-assets/flightFormIcons/vuesax/linear/vuesax/linear/calendar.svg'
import Plane from '/public/rondure-assets/flightFormIcons/vuesax/linear/airplane.svg'
import RonSearch from '/public/rondure-assets/search-normal.svg'
import { PassengerClassSelector } from './PassengerClass'
import { FlightContext } from '@/context/FlightContext'; // Adjust the path as necessary




const FlightRoundTrip = () => {
  const { adults, setAdults, numChildren, setNumChildren, selectedClass, setSelectedClass } = useContext(FlightContext);
  const ref = useRef();




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
        <div className='relative z-[100]'>
          <PassengerClassSelector
            adults={adults}
            setAdults={setAdults}
            numChildren={numChildren}
            setNumChildren={setNumChildren}
            selectedClass={selectedClass}
            setSelectedClass={setSelectedClass}
            ref={ref}
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