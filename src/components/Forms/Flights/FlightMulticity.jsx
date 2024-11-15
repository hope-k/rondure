import React, { useContext, useRef, useState } from 'react'
import FloatingLabelInput from '../FloatingLabelInput'
import Location from '/public/rondure-assets/flightFormIcons/location.svg'
import DateIcon from '/public/rondure-assets/flightFormIcons/vuesax/linear/vuesax/linear/calendar.svg'
import Plane from '/public/rondure-assets/flightFormIcons/vuesax/linear/airplane.svg'
import RonSearch from '/public/rondure-assets/search-normal.svg'
import { PassengerClassSelector } from './PassengerClass'
import { FlightContext } from '@/context/FlightContext';
import { Plus } from 'lucide-react'


const FlightMulticity = () => {
    const { adults, setAdults, numChildren, setNumChildren, selectedClass, setSelectedClass } = useContext(FlightContext);
    const ref = useRef();
    const [flights, setFlights] = useState([{ id: Date.now() }]);

    const addFlight = () => {
        setFlights([...flights, { id: Date.now() }]);
    };

    return (
        <div className="container p-0" ref={ref}>
            <div className="relative bottom-[2rem] md:col-span-2 lg:col-span-3 hidden lg:flex lg:justify-end">
                <button onClick={addFlight} className="flex space-x-2 items-center bg-transparent text-[#283372] text-[1.3rem] font-[700] rounded w-fit">
                    <Plus className='w-4 h-4 stroke-[5]' /><span>Add Flight</span>
                </button>
            </div>


            {/* Flights grid */}
            <div className="">
                {flights.map((flight, index) => (
                    <div key={flight.id} className="mb-[3.5rem] border-b border-gray-200 pb-10 col-span-3 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in duration-300">
                        <FloatingLabelInput icon={<Location />} label="From" />
                        <FloatingLabelInput icon={<Plane />} label="To" />
                        <FloatingLabelInput type="date" icon={<DateIcon />} label="Departure date" />
                        <FloatingLabelInput type="date" icon={<DateIcon />} label="Return date" />
                        <div className="flex flex-col animate-in fade-in duration-300">
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

                        {/* This section renders a "Search" button at the end of the flight input fields,
                            allowing users to submit their flight search after adding all necessary flight details. */}
                        {index === flights.length - 1 && (
                            <div className="pt-8 sm:pt-0 lg:col-span-1">
                                <div className="bg-[#283372] text-white text-[16px] font-[600] leading-[19.5px] flex items-center justify-center rounded-[8px] text-center h-[55px]">
                                    <button className="flex items-center justify-center space-x-1 w-full">
                                        <span>Search</span>
                                        <span><RonSearch /></span>
                                    </button>
                                </div>

                            </div>
                        )}
                        {index === flights.length - 1 && (
                            <div className="relative md:col-span-2 lg:col-span-3 flex lg:hidden">
                                <button onClick={addFlight} className="flex space-x-2 items-center bg-transparent text-[#283372] text-[1.3rem] font-[700] rounded w-fit">
                                    <Plus className='w-4 h-4 stroke-[5]' /><span>Add Flight</span>
                                </button>
                            </div>
                        )}


                    </div>
                ))}




            </div>
        </div>
    )
}

export default FlightMulticity