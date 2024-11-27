"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import Link from 'next/link'
import Image from 'next/image'


const Logistics = () => {
    const logisticsImages = [
        '/logistics/1.png',
        '/logistics/2.png',
        '/logistics/3.png',
    ]
    return (
        <section>
            <div>
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    slidesPerView={1}
                    effect='fade'
                    autoplay={true}


                    className='w-full relative'
                >
                    {
                        logisticsImages?.map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <div className='w-full h-[60svh] lg:h-[60.3rem] relative'>
                                    <div className='w-full h-full'>
                                        <Image
                                            alt={`Image Background ${idx}`}
                                            fill={true}
                                            src={img}
                                            priority
                                            className='object-cover  bg-center brightness-75'
                                        />
                                    </div>

                                    <div className='space-y-10 absolute w-full flex flex-col items-center  top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center whitespace-nowrap'>
                                        <div className='text-[clamp(1rem,3vw+1rem,6.5rem)] font-bold tracking-wide leading-[2.4rem] lg:leading-none whitespace-nowrap'>
                                            <h1>Rondure E-Commerce<br /> your <a className='text-ron_orange'>Logistics.</a></h1>
                                        </div>
                                        <p className=' w-full px-10 max-w-[70ch] text-[14px] sm:text-[2.4rem] text-white whitespace-normal' >
                                            Optimise your end-to-end e-commerce logistics, with order fulfilment, last-mile and cross-border delivery.
                                        </p>
                                        <div className=''>
                                            <Link href={'/contact-us'} className='bg-[#E4572B] py-6 px-10 text-white font-[600] text-[1.6rem] rounded-[0.8rem] '>
                                                <span>Contact us</span>
                                            </Link>
                                        </div>
                                    </div>
                        
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            <div className='flex flex-col lg:flex-row lg:max-w-[80%] mx-auto justify-between mt-[5rem] lg:mt-[10rem] container lg:px-0'>
                <div className='lg:pr-[15rem]'>
                    <div className='mb-20'>
                        <h1 className='lg:text-[3.2rem] text-[2rem] text-[#283372] mb-4'>Going the extra mile with you</h1>
                        <p className='text-[1.6rem]'>Thanks to our digital capabilities, we easily integrate with your sales channels, so you can start shipping in no time.  While you focus on growing your business online, we take care of your E-Commerce logistics supply chain.</p>
                    </div>
                    <div>
                        <h1 className='lg:text-[3.2rem] text-[2rem] text-[#283372] mb-4'>Rondure E-Delivery</h1>
                        <p className='text-[1.6rem]'>Rondure’s geography agnostic delivery product ensures that all your parcel delivery needs are met. We give you access to all major last-mile carriers to make cross-border shipping easier and cheaper. Additionally, we provide services for returns management, customs handling and more. You also stand to benefit from:</p>
                    </div>
                    {/* list */}
                    <ul className='text-[1.6rem] mt-[2rem] space-y-4'>
                        <li className='flex items-center space-x-4 font-[500]'>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                                <circle cx="5" cy="5" r="4.5" stroke="#283372" />
                            </svg>
                            <span>Reliable international transit times</span>
                        </li>
                        <li className='flex items-center space-x-4 font-[500]'>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                                <circle cx="5" cy="5" r="4.5" stroke="#283372" />
                            </svg>
                            <span>Reduced shipping costs through volume bundling</span>
                        </li>
                        <li className='flex items-center space-x-4 font-[500]'>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                                <circle cx="5" cy="5" r="4.5" stroke="#283372" />
                            </svg>
                            <span>Improved customer experience</span>
                        </li>
                        <li className='flex items-center space-x-4 font-[500]'>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                                <circle cx="5" cy="5" r="4.5" stroke="#283372" />
                            </svg>
                            <span>Full visibility through standardized tracking</span>
                        </li>
                        <li className='flex items-center space-x-4 font-[500]'>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2 flex-shrink-0'>
                                <circle cx="5" cy="5" r="4.5" stroke="#283372" />
                            </svg>
                            <span>Central platform to manage home delivery, out of home delivery, and returns</span>
                        </li>
                    </ul>

                    <div className='my-20'>
                        <Link href={'/'} className='bg-[#E4572B] py-6 px-10 text-white font-[600] text-[1.6rem] rounded-[0.8rem] '>
                            <span>Explore our services</span>
                        </Link>
                    </div>
                </div>
                <div className=' hidden lg:block'>
                    <div className='relative w-[46.4rem] h-[27.6rem]'>
                        <Image
                            src='/logistics/3.png'
                            alt='truck'
                            fill
                            className=' rounded-[0.8rem] object-cover'
                        />
                    </div>
                    <div className='flex flex-row space-x-[2.5rem] mt-[2.5rem]'>
                        <div className='relative w-[21.9rem] h-[20.3rem]'>
                            <Image
                                src='/logistics/1.png'
                                alt='truck'
                                fill
                                className=' rounded-[0.8rem] object-cover'
                            />
                        </div>
                        <div className='relative w-[21.9rem] h-[20.3rem]'>
                            <Image
                                src='/logistics/2.png'
                                alt='truck'
                                fill
                                className=' rounded-[0.8rem] object-cover'
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Logistics