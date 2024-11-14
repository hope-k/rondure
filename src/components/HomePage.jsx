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
import FlightsForm from './Forms/FlightsForm';
import HotelsForm from './Forms/HotelsForm';
import CarsForm from './Forms/CarsForm';
import { motion } from 'framer-motion';



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
      tripType: category === 'hotels' ? null : prev.tripType, // Reset tripType if 'hotels' is selected
    }));
  };

  const onSelectTripType = (type) => {
    setBookingOptions((prev) => ({
      ...prev,
      tripType: type,
    }));
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

    <Swiper
      modules={[Autoplay, EffectFade]}
      slidesPerView={1}
      effect='fade'
      autoplay={true}


      className='w-full'
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
                <p className='mt-4 w-[50ch]  text-[14px] sm:text-[2.4rem] text-white' >
                  Affordable flights and hotels worldwide for your <br/>trip.
                </p>
              </div>
            </div>




          </SwiperSlide>


        ))

      }


      <div className='w-full  relative container z-50 top-[-15rem] lg:top-[-10rem]'>
        {/* form container   */}

        <div className='bg-white px-10 lg:pt-4 lg:max-w-[109.7rem] mx-auto pb-8 shadow-md rounded-[1.2rem]  w-full h-full'>

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

          {/* Trip Type Selection - Show only if 'flights' or 'cars' is selected */}
          {(bookingOptions.selectedCategory === 'flights' || bookingOptions.selectedCategory === 'cars') && (
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
                  <span className={`text-[#1D1D1D]  ${bookingOptions.tripType === 'roundtrip' ? 'font-bold text-[#283372] ' : ''}`}>
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

          <div className=''>
            {/* Render the FlightsForm component when the selected category is 'flights' */}
            {bookingOptions.selectedCategory === 'flights' && (
              <div className='animate-in fade-in duration-300'>
                <FlightsForm />
              </div>
            )}

            {/* Render the HotelsForm component when the selected category is 'hotels' */}
            {bookingOptions.selectedCategory === 'hotels' && (
              <div className='animate-in fade-in duration-300'>
                <HotelsForm />
              </div>
            )}

            {/* Render the CarsForm component when the selected category is 'cars' */}
            {bookingOptions.selectedCategory === 'cars' && (
              <div className='animate-in fade-in duration-300'>
                <CarsForm />
              </div>
            )}

         
          </div>
        </div>
      </div>






    </Swiper>
  )
}

export default HomePage