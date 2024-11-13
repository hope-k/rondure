import React from 'react'
import FloatingLabelInput from './FloatingLabelInput'
import Location from '/public/rondure-assets/flightFormIcons/location.svg'
import DateIcon from '/public/rondure-assets/flightFormIcons/vuesax/linear/vuesax/linear/calendar.svg'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import RonSearch from '/public/rondure-assets/search-normal.svg'

const HotelsForm = () => {
    return (
        <div className=''>
            <div className="container p-0 mt-16">
                <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-2 lg:gap-x-10 ">
                    <div className="">
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
                            <Select>
                                <SelectTrigger className="border-gray-400 rounded-[0.8rem]">
                                    <SelectValue placeholder="Number of guests" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel><span>Choose number of guests</span></SelectLabel>
                                        <SelectItem value="1"><span>1 Guest</span></SelectItem>
                                        <SelectItem value="2"><span>2 Guests</span></SelectItem>
                                        <SelectItem value="3"><span>3 Guests</span></SelectItem>
                                        <SelectItem value="4"><span>4 Guests</span></SelectItem>
                                        <SelectItem value="5"><span>5 Guests</span></SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
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