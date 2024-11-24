"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import VacationDestinations from './VacationDestination';
import FloatingLabelInput from './Forms/FloatingLabelInput';
import PhoneNumberInput from './Forms/PhoneNumberInput';


const vacationImages = [
    '/vacations/1.png',
    '/vacations/2.png',
    '/vacations/3.png',
]

const Vacations = () => {
    const handlePhoneNumberChange = () => {
        console.log('done')
    }
    return (
        <>
            <div>
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    slidesPerView={1}
                    effect='fade'
                    autoplay={true}


                    className='w-full relative'
                >
                    {
                        vacationImages?.map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <div className='w-full h-[60svh] lg:h-[60.3rem] relative'>
                                    <div className='w-full h-full'>
                                        <Image
                                            alt={`Image Background  ${idx}`}
                                            fill={true}
                                            src={img}
                                            priority
                                            className='object-cover  bg-center brightness-75'
                                        />
                                    </div>

                                    <div className='absolute w-full flex flex-col items-center top-[50%] lg:top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center whitespace-nowrap'>
                                        <div className='mb-6 lg:mb-[1rem] text-[clamp(1rem,3vw+1rem,6.5rem)] font-bold tracking-wide leading-[2.4rem] lg:leading-none whitespace-nowrap'>
                                            <h1>let’s connect you to your <br /> <a className='text-ron_orange'>destination.</a></h1>
                                        </div>
                                        <p className='mt-4  w-full max-w-[70ch] px-4 lg:px-0  text-[1.4rem] sm:text-[2.4rem] text-white text-center whitespace-normal' >
                                            There is no request too small or too large. We are here to satisfy you and make sure your travel experience is as delightful and memorable as possible. In order for us to give you exactly what you require, we need a little information to complete your quote. Our vacation specialist will contact you within the next 48 hours.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            <section className='my-10'>
                <VacationDestinations />
            </section>

            {/* title and line */}
            <div className=" lg:mt-[20rem] lg:flex lg:flex-row w-full lg:space-x-16 lg:justify-between lg:items-center mb-12 lg:max-w-[90%] lg:mx-auto">
                <h1 className="text-[2rem] text-center lg:text-[3.2rem] text-[#283372] font-[400] whitespace-nowrap">Book a vacation</h1>
                <span className="h-[0.3rem] hidden lg:flex w-full bg-[#283372]"></span>
            </div>

            <section className='lg:max-w-[60%] lg:ml-[3%] relative'>
                {/* form fields */}
                <div className=' mt-[4rem] py-16 lg:rounded-[0.8rem] relative  lg:flex-1 lg:z-10'>
                    <div className='max-w-[85%] space-y-10 mx-auto'>

                        <span className='text-[1.4rem] text-[#1D1D1D9C] font-[400]'>Passenger details must be entered as it appears on the passport ID</span>
                        <div className='space-y-4 '>

                            <div className='lg:grid lg:grid-cols-2 lg:gap-8 space-y-4 lg:space-y-0'>
                                <FloatingLabelInput bgTrans  textSmall={true} rounded={false} label='First Name' />
                                <FloatingLabelInput bgTrans  textSmall={true} rounded={false} label='Last Name' />
                                <FloatingLabelInput bgTrans  textSmall={true} rounded={false} label='Email' type={'email'} />
                                <PhoneNumberInput onChange={handlePhoneNumberChange} />

                                {/* checkboxes */}
                                <div className='py-10 space-y-6 lg:flex lg:justify-between lg:col-span-2  w-full'>
                                    <div className='space-y-6 lg:space-y-8'>
                                        <span className='text-[1.4rem] font-[400]'>What type of vacation trip are you thinking of?</span>
                                        <div className='space-y-6'>
                                            <label className='flex items-center'>
                                                <input type="checkbox" className="w-7 h-7 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                                <span className='ml-2 text-[1.4rem]'>Cruise</span>
                                            </label>
                                            <label className='flex items-center'>
                                                <input type="checkbox" className="w-7 h-7 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                                <span className='ml-2 text-[1.4rem]'>All-inclusive resort</span>
                                            </label>
                                            <label className='flex items-center'>
                                                <input type="checkbox" className="w-7 h-7 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                                <span className='ml-2 text-[1.4rem]'>Hotel</span>
                                            </label>
                                            <label className='flex items-center'>
                                                <input type="checkbox" className="w-7 h-7 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                                <span className='ml-2 text-[1.4rem]'>Airfare needed</span>
                                            </label>
                                            <label className='flex items-center'>
                                                <input type="checkbox" className="w-7 h-7 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                                <span className='ml-2 text-[1.4rem]'>Rental car needed</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className='w-full max-w-[42.5rem]'>
                                        <FloatingLabelInput bgTrans textSmall={true} rounded={false} label='Other ideas in mind' />
                                    </div>

                                </div>
                            </div>

                            <div className='space-y-3'>
                                <div className='grid grid-cols-2 lg:grid-cols-3 text-xs gap-3 relative'>
                                    <FloatingLabelInput bgTrans  textSmall={true} rounded={false} label='No. of adults' />
                                    <FloatingLabelInput  bgTrans textSmall={true} rounded={false} label='No. of children' />
                                    <FloatingLabelInput bgTrans  textSmall={true} rounded={false} label='No. of travelers' />
                                    <FloatingLabelInput bgTrans  textSmall={true} rounded={false} label='No. of rooms' />
                                    <FloatingLabelInput bgTrans  textSmall={true} rounded={false} label='Type of accommodation' />
                                    <FloatingLabelInput bgTrans  textSmall={true} rounded={false} label='Destination choice' />
                                    <FloatingLabelInput bgTrans  textSmall={true} rounded={false} type={'date'} label='Departing from' />
                                    <FloatingLabelInput  bgTrans textSmall={true} rounded={false} type={'date'} label='Departure date' />
                                    <FloatingLabelInput bgTrans  textSmall={true} rounded={false} type={'date'} label='Return date' />
                                    <FloatingLabelInput bgTrans  textSmall={true} rounded={false} label='Budget per person($)' />
                                    <div className='flex flex-col lg:flex-row lg:justify-between col-span-2'>
                                        <div className='py-4 space-y-6'>
                                            <span className='text-[1.4rem] font-[400] leading-normal'>Would you like to add travel insurance?</span>
                                            <div className='flex space-x-[4rem]'>
                                                <label className='flex items-center'>
                                                    <input type="radio" name="travelInsurance" value="yes" className="w-10 h-10 accent-ron_orange border-gray-300 rounded focus:ring-ron_orange" />
                                                    <span className='ml-2 text-[1.4rem]'>Yes</span>
                                                </label>
                                                <label className='flex items-center'>
                                                    <input type="radio" name="travelInsurance" value="no" className="w-10 h-10 accent-ron_orange border-gray-300 rounded focus:ring-ron_orange" />
                                                    <span className='ml-2 text-[1.4rem]'>No</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className='py-4 space-y-6'>
                                            <span className='text-[1.4rem] font-[400] leading-normal'>Are you interested in payment arrangements if available?</span>
                                            <div className='flex space-x-[4rem]'>
                                                <label className='flex items-center'>
                                                    <input type="radio" name="paymentArrangement" value="yes" className="w-10 h-10 accent-ron_orange border-gray-300 rounded focus:ring-ron_orange" />
                                                    <span className='ml-2 text-[1.4rem]'>Yes</span>
                                                </label>
                                                <label className='flex items-center'>
                                                    <input type="radio" name="paymentArrangement" value="no" className="w-10 h-10 accent-ron_orange border-gray-300 rounded focus:ring-ron_orange" />
                                                    <span className='ml-2 text-[1.4rem]'>No</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>





                            <div className="flex items-start  py-8">

                                <label htmlFor="extra-information" className="ml-2 text-[1.3rem] text-[#1D1D1D9C]">
                                    <span>Please include anything special or extra that we need to know including any type of restrictions or desired resort choices or cruise preferences. The more you tell us, the more likely we’ll be able to meet your very need. (Example: FOOD ALLERGIES, restrictions)</span>
                                </label>
                            </div>
                            {/* submit button */}
                            <button
                                type="submit"
                                className="w-full h-[50px] bg-[#283372] text-white font-[600] text-[1.6rem] rounded-[0.8rem] hover:bg-[#283372c0] transition duration-200"
                            >
                                <span>Submit</span>
                            </button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Vacations