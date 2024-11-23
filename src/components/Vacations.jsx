"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import VacationDestinations from './VacationDestination';


const Vacations = () => {
    const vacationImages = [
        '/vacations/1.png',
        '/vacations/2.png',
        '/vacations/3.png',
    ]
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

                                    <div className='absolute top-[50%] lg:top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center whitespace-nowrap'>
                                        <div className='mb-6 lg:mb-[4rem] text-[clamp(1rem,3vw+1rem,6.5rem)] font-bold tracking-wide leading-[2.4rem] lg:leading-none whitespace-nowrap'>
                                            <h1>let’s connect you to<br /> your <a className='text-ron_orange'>destination.</a></h1>
                                        </div>
                                        <p className='mt-4  lg:min-w-[75ch]  text-[1.4rem] sm:text-[2.4rem] text-white text-center whitespace-normal' >
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
        </>
    )
}

export default Vacations