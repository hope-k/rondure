"use client"

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade'
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import FloatingLabelInput from './Forms/FloatingLabelInput';
import PhoneNumberInput from './Forms/PhoneNumberInput';
import CountrySelect from './Forms/CountrySelect';
import OptionsBackground from '/public/business-travel/business-section.svg'
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Check from '/public/business-travel/Vector.svg'

const BusinessServiceCard = ({ title, description }) => {
    return (
        <div className="group bg-white p-[5rem] h-full w-[34rem] rounded-[0.8rem] space-y-5 hover:bg-[#283372] transition-colors duration-300">
            <h1 className="text-[2.4rem] font-[400] leading-[2.4rem] text-[#283372] group-hover:text-white">
                {title}
            </h1>
            <p className="text-[1.4rem] font-[400] leading-[1.95rem] text-[#283372] group-hover:text-white">
                {description}
            </p>
        </div>
    );
};

const BusinessTravel = () => {
    const handlePhoneNumberChange = (phoneNumber) => {
        console.log('Phone Number:', phoneNumber);
    };
    const businessImages = [
        '/business-travel/1.png',
        '/business-travel/2.png',
        '/business-travel/3.png'
    ];

    const businessServices = [
        {
            title: 'Time is money',
            description: 'Limit Distractions During Work Hours: During your trip, we will source with the best flights, transportation choices, and lodging for you. You should not be required to do all this on your own in addition to your workload.'
        },
        {
            title: 'Saving you from mistakes',
            description: 'How well do you understand travel insurance? How current is your understanding of visa requirements, immunization restrictions, and customs procedures? Having a travel expert on your side may save you a lot of trouble.'
        },
        {
            title: 'Knowledge is power',
            description: 'The world is a huge place, and there will always be things we don\'t know or understand. Travel agents usually specialize in particular forms of travel, TRAVEL RESTRICTIONS, or destinations. Without consulting a travel agent, you may know that there are cheaper and easier routes that will save you a lot of money.'
        },
    ];

    const businessOptions = [
        {
            title: 'Business travelers',
            description: 'We provide a broader selection of flights that are tailored to your specific itinerary.'
        },
        {
            title: 'Planning',
            description: 'Create itineraries in seconds and keep everything you need in one spot.'
        },
        {
            title: 'Compliance',
            description: 'We make enforcement of travel budget policies while on business trips easy.'
        },
        {
            title: 'Structure',
            description: 'We help keep track of your team’s travel and providing up-to-date reports periodically and upon request.'
        },
        {
            title: 'Manage',
            description: 'We take charge of all elements of your business travel. We assist in the formulation of a company\'s travel policy, the management of travel arrangements, the organization and monitoring of travel costs, and the protection of business travelers.'
        }
    ];

    const [expandedOption, setExpandedOption] = useState(null);

    const toggleOptionDetail = (index) => {
        setExpandedOption(expandedOption === index ? null : index);
    };

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
                    businessImages?.map((img, idx) => (
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
                                        <h1> Business <a className='text-ron_orange'>Travel</a></h1>
                                    </div>
                                    <p className='mt-4 text-[14px] sm:text-[2.4rem] text-white whitespace-nowrap'>
                                        We make your business trips easier and more <br />productive
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <section className='w-full lg:max-w-[90%] lg:mx-auto grid grid-cols-1 lg:grid-cols-2 '>
                <div className=' flex snap-x lg:mt-[5rem] snap-mandatory container overflow-x-scroll lg:justify-center  lg:flex-wrap lg:flex-row '>
                    {
                        businessServices?.map((service, i) => (
                            <div key={i} className='  my-20 lg:my-4 snap-center mx-4  '>
                                <BusinessServiceCard title={service.title} description={service.description} />
                            </div>
                        ))
                    }
                </div>

                {/* form fields */}
                <div className='bg-white py-16 lg:rounded-[0.8rem] lg:h-fit relative lg:top-[-20rem] lg:ml-[10rem] lg:z-10'>
                    <div className='max-w-[85%] space-y-10 mx-auto'>
                        <span className='text-[1.4rem] text-[#1D1D1D9C] font-[400]'>Passenger details must be entered as it appears on the passport ID</span>
                        <div className='space-y-4'>
                            <FloatingLabelInput rounded={false} label='Company Name' />
                            <FloatingLabelInput rounded={false} label='Company Contact Person' />
                            <FloatingLabelInput rounded={false} label='Email Address' type={'email'} />
                            <PhoneNumberInput onChange={handlePhoneNumberChange} />
                            <FloatingLabelInput rounded={false} label='Request' />

                            <div className="flex items-start pb-1 py-8">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="w-12 h-12 pl-2 text-blue-600 border-gray-300 focus:ring-blue-500"
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
            </section>

            <section className='lg:max-w-[80%] max-w-[85%] mx-auto lg:flex lg:justify-between lg:space-x-[10rem] lg:my-[10rem]'>
                <div className='space-y-5 pt-20 lg:flex-1'>
                    <h1 className='text-[#283372] text-[2.4rem] lg:text-[3.2rem] leading-[2.4rem] lg:whitespace-nowrap lg:mb-10'>Save the hassle, time is everything</h1>
                    <p className='text-[1.4rem] lg:text-[2rem]'>
                        Make all your bookings with one agency, and easily track travel spending, and check where and when your team is traveling.
                    </p>
                    <p className='text-[1.4rem] lg:text-[2rem]'>
                        Rondure travel managers are trained to spot the best travel destinations. However, the managers can also help you put together the best itinerary to meet your every wish including cost, time of travel, preferred route and more.
                    </p>
                </div>
                {/* image */}
                <div className="hidden relative lg:flex max-w-[59.4rem] h-[37.7rem] lg:flex-1">
                    {/* Blur Effect */}
                    <div className="absolute inset-0 z-0 pointer-events-none before:absolute before:bg-[#2833727A]  before:blur-lg before:opacity-50 before:top-[-30px] before:left-[-30px] before:w-full before:h-full"></div>

                    {/* Image */}
                    <Image
                        alt="bg"
                        fill
                        objectFit="cover"
                        src="/business-travel/bus1.jpeg"
                        className="relative z-10 rounded-lg"
                    />
                </div>
            </section>

            {/* business options */}
            <section className='bg-[#283372] pt-[5rem] mt-[5rem] lg:pb-[10rem] relative'>
                <div className='max-w-[85%] mx-auto space-y-[5rem] lg:grid lg:grid-cols-2 lg:space-y-0 lg:pt-[7rem] lg:pb-[15rem]'>
                    {
                        businessOptions?.map((op, i) => (
                            <React.Fragment key={i}>

                                <div className='space-y-5 text-white relative lg:h-fit  lg:w-[40rem] lg:pb-10 z-50'>
                                    <div className='flex items-center justify-between cursor-pointer' onClick={() => toggleOptionDetail(i)}>
                                        <h1 className='text-[2rem] leading-[2rem] font-[400] whitespace-nowrap'>
                                            {op.title}
                                        </h1>
                                        <ChevronDown
                                            strokeWidth={1.2}
                                            width={30}
                                            height={30}
                                            className={`transition-transform duration-300 ${expandedOption === i ? 'rotate-180' : ''}`}
                                        />
                                    </div>
                                    <AnimatePresence>
                                        <motion.div
                                            initial={false}
                                            animate={{
                                                maxHeight: expandedOption === i ? '200px' : '0px',
                                                opacity: expandedOption === i ? 1 : 0,
                                                padding: expandedOption === i ? '1rem' : '0rem', // Optional
                                            }}
                                            exit={{ maxHeight: '0px', opacity: 0, padding: '0rem' }}
                                            transition={{
                                                duration: 0.6,
                                                ease: [0.25, 0.8, 0.5, 1],
                                            }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <motion.p
                                                layout='position'
                                                className='text-[1.4rem] leading-[2rem] font-[400]'
                                            >
                                                {op.description}
                                            </motion.p>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </React.Fragment>
                        ))
                    }
                </div>
                {/* svg background */}
                <div className='w-full lg:absolute lg:right-[-10rem] lg:bottom-0 lg:h-[600px] lg:w-[780px]'>
                    <OptionsBackground />
                </div>
            </section>

            <section className='max-w-[85%] lg:max-w-[80%] mx-auto py-[8rem] lg:flex lg:justify-between lg:space-x-[10rem] lg:my-[10rem]'>
                <div className='lg:flex-1'>
                    <div className='space-y-10 mb-10 '>
                        <h1 className='text-[2.4rem] leading-[2.4rem] text-[#283372]'>Stress-free immigration procedure</h1>
                        <p className='text-[1.4rem] lg:text-[2rem]'>We take pride in providing one of the best protocol services, with protocol officers that have strong working connections with the Ghana Immigration Service. We liaise with Ghana Immigration services to assist with</p>
                    </div>
                    <ul className=' justify-start space-y-5'>
                        <li className="flex items-start space-x-4 ">
                            <Check width={23} />
                            <span className="text-[1.6rem] font-[400]">Airport meet and assist protocol services</span>
                        </li>
                        <li className="flex items-start space-x-4 ">
                            <Check width={20} height={20} />
                            <span className="text-[1.6rem] font-[400]">Visa on arrival services</span>
                        </li>
                        <li className="flex items-start space-x-4 ">
                            <Check width={20} height={20} />
                            <span className="text-[1.6rem] font-[400]">Visa extension</span>
                        </li>
                        <li className="flex items-start space-x-4 ">
                            <Check width={20} height={20} />
                            <span className="text-[1.6rem] font-[400]">Resident permit and renewal</span>
                        </li>
                    </ul>
                </div>
                {/* image */}
                <div className="hidden relative lg:flex max-w-[59.4rem] h-[37.7rem] lg:flex-1">
                    {/* Blur Effect */}
                    <div className="absolute inset-0 z-0 pointer-events-none before:absolute before:bg-[#2833727A]  before:blur-lg before:opacity-50 before:top-[-30px] before:left-[-30px] before:w-full before:h-full"></div>

                    {/* Image */}
                    <Image
                        alt="bg"
                        fill
                        objectFit="cover"
                        src="/business-travel/bus2.jpeg"
                        className="relative z-10 rounded-lg"
                    />
                </div>
            </section>
        </div>
    )
}

export default BusinessTravel
