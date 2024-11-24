import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';

const vacationImages = [
    '/vacations/1.png',
    '/vacations/2.png',
    '/vacations/3.png',
];


const ContactUs = () => {
  return (
    <div>
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

                                  <div className='absolute w-full flex flex-col items-center  top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center whitespace-nowrap'>
                                      <div className='text-[clamp(1rem,3vw+1rem,6.5rem)] font-bold tracking-wide leading-[2.4rem] lg:leading-none whitespace-nowrap'>
                                          <h1>let’s connect you to<br /> your <a className='text-ron_orange'>destination.</a></h1>
                                      </div>
                                      <p className='mt-4  w-full px-10 max-w-[70ch] text-[14px] sm:text-[2.4rem] text-white whitespace-normal' >
                                          There is no request too small or too large. We are here to satisfy you and make sure your travel experience is as delightful and memorable as possible. In order for us to give you exactly what you require, we need a little information to complete your quote. Our vacation specialist will contact you within the next 48 hours.
                                      </p>
                                  </div>
                              </div>
                          </SwiperSlide>
                      ))
                  }
              </Swiper>
          </div>
    </div>
  )
}

export default ContactUs