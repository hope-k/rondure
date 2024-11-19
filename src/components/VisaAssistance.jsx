"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade'
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';

export const VisaAssistance = () => {
    const visaimages = [
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
                    visaimages?.map((img, idx) => (
                        <SwiperSlide key={idx}>
                            <div className='w-full h-[60svh] lg:h-[55vh] relative'>
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
        </div>
    )
}
