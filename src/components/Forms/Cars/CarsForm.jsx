import React from 'react'
import FloatingLabelInput from '../FloatingLabelInput'
import Location from '/public/rondure-assets/flightFormIcons/location.svg'
import DateIcon from '/public/rondure-assets/flightFormIcons/vuesax/linear/vuesax/linear/calendar.svg'
import Plane from '/public/rondure-assets/flightFormIcons/vuesax/linear/airplane.svg'
import Clock from '/public/rondure-assets/clock.svg'
import RonSearch from '/public/rondure-assets/search-normal.svg'

const CarsForm = () => {
    return (
        <div className="container p-0 mt-16">
            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-2 lg:gap-x-10">
                <div className="">
                    <FloatingLabelInput icon={<Location />} label="Pick up" />
                </div>

                <div className="">
                    <FloatingLabelInput icon={<Plane />} label="Drop-off" />
                </div>

                <div className="flex space-x-2 ">
                    <div className="w-1/2">
                        <FloatingLabelInput type={'time'} icon={<Clock />} label="Pick up time" />
                    </div>
                    <div className="w-1/2">
                        <FloatingLabelInput type={'time'} icon={<Clock />} label="Drop off time" />
                    </div>
                </div>

                <div className="">
                    <FloatingLabelInput type={'date'} icon={<DateIcon />} label="Pick up date" />
                </div>

                <div className="">
                    <FloatingLabelInput type={'date'} icon={<DateIcon />} label="Drop off date" />
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

export default CarsForm