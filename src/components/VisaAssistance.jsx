"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade'
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import FloatingLabelInput from './Forms/FloatingLabelInput';
import PhoneNumberInput from './Forms/PhoneNumberInput';
import CountrySelect from './Forms/CountrySelect';

export const VisaAssistance = () => {
    const handlePhoneNumberChange = (phoneNumber) => {
        console.log('Phone Number:', phoneNumber);
    };
    const visaImages = [
        '/visa-assistance/1.png',
        '/visa-assistance/2.png',
        '/visa-assistance/3.png'
    ]
    return (
        <div>
            <Swiper
                modules={[Autoplay, EffectFade]}
                slidesPerView={1}
                effect='fade'
                autoplay={true}


                className='w-full relative'
            >
                {
                    visaImages?.map((img, idx) => (
                        <SwiperSlide key={idx}>
                            <div className='w-full h-[60svh] lg:h-[73.3rem] relative'>
                                <div className='w-full h-full'>
                                    <Image
                                        alt={`Image Background  ${idx}`}
                                        fill={true}
                                        src={img}
                                        priority
                                        className='object-cover  bg-center brightness-75'
                                    />
                                </div>

                                <div className='absolute top-[38%] lg:top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
                                    <div className='text-[clamp(1rem,3vw+1rem,6.5rem)] max-w-full font-bold tracking-wide leading-[2.4rem] lg:leading-none whitespace-nowrap'>
                                        <h1> Get Visa Assistance<br /> <a className='text-ron_orange'>Now!.</a></h1>
                                    </div>
                                    <p className='mt-4   text-[14px] sm:text-[2.4rem] text-white' >
                                        We bring you a new level of comfort.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <div className='lg:flex lg:flex-row lg:max-w-[85%] lg:mx-auto lg:justify-between lg:space-x-[8rem]'>
                <div className='space-y-8 lg:space-y-10 max-w-[85%] mx-auto mt-[4rem] lg:flex-[1.5]'>
                    <div className='text-[2rem] lg:text-[3.2rem] font-[400] text-[#283372] relative'>
                        <h1>Travel Visa Assistance Program</h1>
                        <span className='h-[0.3rem] hidden lg:flex w-[30rem] bg-[#283372] absolute right-[-40rem] top-1/2 transform -translate-x-1/2 -translate-y-1/2'></span>
                    </div>
                    <p className="text-[#1D1D1D] font-[400] text-[1.4rem] lg:text-[1.6rem]">We have done a lot to maintain a 90% visa approval. Due to the fact we’ve done these many times, we’re familiar with every step of the process. We stand behind our experience with an money back guarantee.</p>

                    <p className="text-[#1D1D1D] font-[400] text-[1.4rem] lg:text-[1.6rem]">The Rondure Connect visa team is made up of specialized and experienced visa processing professionals.</p>

                    <p className="text-[#1D1D1D] font-[400] text-[1.4rem] lg:text-[1.6rem]">Our process includes profiling, assisting you in completing your visa application forms, screening documents, securing appointments, and conducting pre-interview sessions where applicable, all with the goal of enhancing your prospects of visa success.</p>

                    <p className="text-[#1D1D1D] font-[400] text-[1.4rem] lg:text-[1.6rem]">We do not encourage immigration defaults, and please keep in mind that the issue of visas is at the discretion of embassies. We have worked hard to keep our visa acceptance rate at 90%. We’ve done this so many times that we’re familiar with every stage of the process. We provide a money-back guarantee to customers because we know we have the requisite experience to ensure success.</p>

                    <p className="text-[#1D1D1D] font-[400] text-[1.4rem] lg:text-[1.6rem]">Contact our visa consultants for all your Travel visa related questions.</p>

                    <a className='font-[600] my-10 block text-[1.4rem]  lg:text-[1.6rem]' href="mailto:info@rondureconnect.com">
                        <span>Email: info@rondureconnect.com</span>
                    </a>
                </div>

                {/* form fields */}
                <div className='bg-white mt-[4rem] py-16 lg:rounded-[0.8rem] relative lg:top-[-25rem] lg:flex-1 lg:z-10'>
                    <div className='max-w-[85%] space-y-10 mx-auto'>
                        <span className='text-[1.4rem] text-[#1D1D1D9C] font-[400]'>Passenger details must be entered as it appears on the passport ID</span>
                        <div className='space-y-4'>
                            <FloatingLabelInput rounded={false} label='First Name' />
                            <FloatingLabelInput rounded={false} label='Last Name' />
                            <FloatingLabelInput rounded={false} label='Email' type={'email'} />
                            <PhoneNumberInput onChange={handlePhoneNumberChange} />
                            <div className='flex flex-row space-x-3 lg:pt-[4rem]'>
                                <FloatingLabelInput type='date' label='Departure Date' rounded={false} />
                                <FloatingLabelInput type='date' label='Arrival Date' rounded={false} />
                            </div>
                            <div className='flex flex-row space-x-3'>
                                <CountrySelect label='Passport Country' rounded={false} />
                                <CountrySelect label='Destination Country' rounded={false} />
                            </div>
                            <FloatingLabelInput rounded={false} label='Passport Number' />
                            <div className="flex flex-col items-center pb-[2rem]"
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={(e) => {
                                    e.preventDefault();
                                    const files = e.dataTransfer.files;
                                    // Handle the files here (e.g., set them to state)
                                }}>
                                <label className="flex flex-col items-center justify-center w-full h-48 border border-dashed border-gray-400  cursor-pointer hover:border-gray-400">
                                    <span className="text-gray-500 text-[1rem] font-[400]">Drag and drop your file here or click to upload</span>
                                    <input type="file" className="hidden" />
                                </label>
                                <span className="mt-2 text-sm text-gray-500">Supported formats: .pdf, .doc, .docx</span>


                            </div>

                            <div className="flex items-start pb-1">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="w-12 h-12 pl-2 text-blue-600 border-gray-300  focus:ring-blue-500"
                                />
                                <label htmlFor="terms" className="ml-2 text-[1.3rem] text-[#1D1D1D9C]">
                                    <span>By proceeding, I acknowledge that I have read and agree to Rondure’s terms & conditions</span>
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
            </div>

        </div>
    )
}
