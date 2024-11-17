"use client"
import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade'
import Image from 'next/image';
import { Autoplay, EffectFade } from 'swiper/modules';
import Building from '/public/rondure-assets/building.svg'
import Car from '/public/rondure-assets/car.svg'
import Airplane from '/public/rondure-assets/airplane.svg'
import FlightRoundTrip from './Forms/Flights/FlightRoundTrip';
import FlightMulticity from './Forms/Flights/FlightMulticity';
import FlightOneWay from './Forms/Flights/FlightOneWay';

import HotelsForm from './Forms/Hotels/HotelsForm';
import CarsForm from './Forms/Cars/CarsForm';
import { motion } from 'framer-motion';
import ScrollingPartners from './ScrollingPartners';
import VacationDestinations from './VacationDestination';


const HomePage = () => {
  const mainCategory = [
    { name: 'flights', icon: Airplane },
    { name: 'hotels', icon: Building },
    { name: 'cars', icon: Car }
  ];
  // Nested state to manage category and trip type
  const [bookingOptions, setBookingOptions] = useState({
    selectedCategory: 'flights', // 'flights', 'hotels', or 'cars'
    tripType: 'roundtrip',         // 'roundtrip', 'oneway', or 'multicity'
  });

  // Handlers for updating state
  const onSelectCategory = (category) => {
    setBookingOptions((prev) => ({
      ...prev,
      selectedCategory: category,
      tripType: (category === 'hotels' || category === 'cars') ? null : 'roundtrip', // Reset tripType if 'hotels' or 'cars' is selected
    }));
  };

  const onSelectTripType = (type) => {
    if (bookingOptions.selectedCategory === 'flights') {
      setBookingOptions((prev) => ({
        ...prev,
        tripType: type,
      }));
    }
  };

  const images = {
    flights: ['/home/7.png', '/home/3.jpg', '/home/4.jpg'],
    hotels: ['/home/9.jpg', '/home/11.jpg', '/home/14.jpg', '/home/5.png', '/home/1.jpg', '/home/2.jpg'],
    cars: ['/home/10.jpg', '/home/12.jpg', '/home/13.jpg', '/home/8.png']
  };
  const [homeImages, setHomeImages] = useState(images[bookingOptions.selectedCategory] || []);

  useEffect(() => {
    setHomeImages(images[bookingOptions.selectedCategory] || []);
  }, [bookingOptions.selectedCategory]);




  return (
    <>
      <Swiper
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        effect='fade'
        autoplay={true}


        className='w-full relative'
      >
        {
          homeImages?.map((img, idx) => (
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
                  <h1 className='text-[clamp(1rem,3vw+1rem,6.5rem)] max-w-full font-bold tracking-wide leading-[2.4rem] lg:leading-none whitespace-nowrap'>
                    let’s connect you to<br /> your <span className='text-ron_orange'>destination.</span>
                  </h1>
                  <p className='mt-4   text-[14px] sm:text-[2.4rem] text-white' >
                    Affordable flights and hotels worldwide for your trip.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>

      {/* Forms */}
      <div className='w-full container top-[-15rem] lg:top-[-12rem] z-50  relative'>
        {/* form container   */}
        <div className='bg-white  relative  px-10 lg:pt-4 lg:max-w-[109.7rem] mx-auto pb-8 rounded-[1.2rem]  w-full h-full'>

          {/* Category Selection */}
          <div className='flex  pt-8 pb-4 justify-center lg:justify-start space-x-8 items-center border-b-2 border-gray-200'>
            {
              mainCategory?.map((cat, idx) => {
                const IconComponent = cat.icon;
                return (
                  <div key={cat.name} className='relative'>
                    <button
                      className={`relative transition-colors duration-700 ease-in-out space-x-2 flex justify-center rounded-[8px] items-center px-4 py-2 ${bookingOptions.selectedCategory === cat.name ? 'bg-ron_orange text-white ' : ''}`}
                      onClick={() => onSelectCategory(cat.name)}
                    >
                      <IconComponent
                        className='relative z-[2]'
                        width='18'
                        fill={bookingOptions.selectedCategory === cat.name ? 'white' : 'none'}
                        stroke={bookingOptions.selectedCategory === cat.name ? '#E4572B' : '#000000FF'}
                        strokeWidth={bookingOptions.selectedCategory === cat.name ? '0.3' : '1.5'}
                      />
                      <p className='capitalize tracking-wide font-[500] text-[14px] relative z-[2]'>{cat.name}</p>
                      {
                        bookingOptions.selectedCategory === cat.name && (
                          <motion.div
                            initial={false}
                            layout='position'
                            layoutId="cat"
                            className='h-full absolute w-full rounded-[8px] z-[1] px-4 py-2 bg-ron_orange'
                          />
                        )
                      }
                    </button>
                  </div>
                );
              })
            }

          </div>

          {/* Trip Type Selection - Show only if 'flights' is selected */}
          {bookingOptions.selectedCategory === 'flights' && (
            <div className=' mb-6 '>
              <div className="flex   font-[500] justify-center lg:justify-start items-center space-x-3 lg:space-x-8 pt-4 text-[13px] leading-[16px]">
                <label className="flex  items-center cursor-pointer">
                  <input
                    type="radio"
                    name="tripType"
                    value="roundtrip"
                    checked={bookingOptions.tripType === 'roundtrip'}
                    onChange={() => onSelectTripType('roundtrip')}
                    className="mr-2 appearance-none"
                  />
                  <span className={`text-[#1D1D1D]  ${bookingOptions.tripType === 'roundtrip' ? 'font-[700] text-[#283372] ' : ''}`}>
                    Roundtrip
                  </span>
                </label>

                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="tripType"
                    value="oneway"
                    checked={bookingOptions.tripType === 'oneway'}
                    onChange={() => onSelectTripType('oneway')}
                    className="mr-2 appearance-none"
                  />
                  <span className={`text-[#1D1D1D]  ${bookingOptions.tripType === 'oneway' ? 'font-bold text-[#283372]' : ''}`}>
                    One Way
                  </span>
                </label>

                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="tripType"
                    value="multicity"
                    checked={bookingOptions.tripType === 'multicity'}
                    onChange={() => onSelectTripType('multicity')}
                    className="mr-2 appearance-none"
                  />
                  <span className={`text-[#1D1D1D]  ${bookingOptions.tripType === 'multicity' ? 'font-bold text-[#283372]' : ''}`}>
                    Multi City
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* Forms */}

          <>
            {/* Render the appropriate form based on the selected category (flights, hotels, cars) */}

            {/* Flight Roundtrip Form */}
            {bookingOptions.selectedCategory === 'flights' && bookingOptions.tripType === 'roundtrip' && (
              <div className='animate-in fade-in duration-300'>
                <FlightRoundTrip />
              </div>
            )}

            {/* Flight One Way Form */}
            {bookingOptions.selectedCategory === 'flights' && bookingOptions.tripType === 'oneway' && (
              <div className='animate-in fade-in duration-300'>
                <FlightOneWay />
              </div>
            )}

            {/* Flight Multicity Form */}
            {bookingOptions.selectedCategory === 'flights' && bookingOptions.tripType === 'multicity' && (
              <div className='animate-in fade-in duration-300'>
                <FlightMulticity />
              </div>
            )}

            {/* Hotels Form */}
            {bookingOptions.selectedCategory === 'hotels' && (
              <div className='animate-in fade-in duration-300'>
                <HotelsForm />
              </div>
            )}

            {/* Cars Form */}
            {bookingOptions.selectedCategory === 'cars' && (
              <div className='animate-in fade-in duration-300'>
                <CarsForm />
              </div>
            )}


          </>
        </div>

      </div>

      {/* PARTNERS */}
      <section className='relative -mt-[10rem] lg:mt-0 mb-[10rem]'>
        <ScrollingPartners />
      </section>


      {/* Vacation Destination */}
      <section>
        <VacationDestinations />
      </section>
    </>
  )
}

export default HomePage