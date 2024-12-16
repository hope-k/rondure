import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import BgSvg from '/public/contact-us/bgsvg.svg'
import FloatingLabelInput from './Forms/FloatingLabelInput';

const vacationImages = [
    '/contact-us/1.png',
    '/contact-us/2.png',
    '/contact-us/3.png',
];

const ContactUs = () => {
    const [selectedSubjects, setSelectedSubjects] = useState([]);

    const handleSubjectChange = (subject) => {
        setSelectedSubjects((prev) => {
            if (prev.includes(subject)) {
                return prev.filter((s) => s !== subject);
            } else {
                return [...prev, subject];
            }
        });
    };

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
                                            <h1>Contact <a className='text-ron_orange'>Us</a></h1>
                                        </div>
                                        <p className='mt-4  w-full px-10 max-w-[70ch] text-[14px] sm:text-[2.4rem] text-white whitespace-normal' >
                                            We look forward to the opportunity to assist you with all your travel needs!                                      </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            {/* title and line */}
            <div className=" lg:mt-[8rem] lg:flex lg:flex-row w-full lg:space-x-16 lg:justify-between lg:items-center my-12 lg:max-w-[90%] lg:mx-auto">
                <h1 className="text-[2rem] text-center lg:text-[3.2rem] text-[#283372] font-[400] whitespace-nowrap">Book a vacation</h1>
                <span className="h-[0.3rem] hidden lg:flex w-full bg-[#283372]"></span>
            </div>

            <div className='bg-transparent flex-col lg:max-w-[80%] mx-auto flex lg:flex-row container lg:px-0'>
                <div className='lg:space-y-[10rem] space-y-[5rem] flex-shrink-0 overflow-hidden  relative bg-[#283372] lg:h-[64.7rem] h-[48.8rem] lg:w-[49.1rem]  text-white p-[3rem] rounded-[1rem]'>
                    <div>
                        <h2 className='text-[2.4rem] font-[600]'><span>Contact us today</span></h2>
                        <span className='text-[1.6rem]'>
                            Our customer reps are ready to assist you
                        </span>
                    </div>
                    <div className='flex flex-col space-y-[3rem]'>
                        <div className='flex space-x-5 flex-row items-center'>
                            <span>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0003 5.00024C12.1033 5.00024 13.0003 5.89724 13.0003 8.00024H15.0003C15.0003 4.77524 13.2253 3.00024 10.0003 3.00024V5.00024ZM13.4223 10.4432C13.2301 10.2686 12.9776 10.1754 12.7181 10.1835C12.4585 10.1915 12.2123 10.3001 12.0313 10.4862L9.63828 12.9472C9.06228 12.8372 7.90428 12.4762 6.71228 11.2872C5.52028 10.0942 5.15928 8.93324 5.05228 8.36124L7.51128 5.96724C7.69769 5.78637 7.80642 5.54006 7.81444 5.28045C7.82247 5.02083 7.72917 4.76828 7.55428 4.57624L3.85928 0.513239C3.68432 0.320596 3.44116 0.203743 3.18143 0.187499C2.92171 0.171254 2.66588 0.256897 2.46828 0.426239L0.298282 2.28724C0.125393 2.46075 0.0222015 2.69169 0.00828196 2.93624C-0.00671804 3.18624 -0.292718 9.10824 4.29928 13.7022C8.30528 17.7072 13.3233 18.0002 14.7053 18.0002C14.9073 18.0002 15.0313 17.9942 15.0643 17.9922C15.3088 17.9786 15.5396 17.8749 15.7123 17.7012L17.5723 15.5302C17.7417 15.3328 17.8276 15.077 17.8115 14.8173C17.7954 14.5576 17.6788 14.3143 17.4863 14.1392L13.4223 10.4432Z" fill="white" />
                                </svg>
                            </span>
                            <span className='text-[1.6rem]'>+233 50 910 0990</span>
                        </div>
                        <div className='flex space-x-5 flex-row items-center'>
                            <span><svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 0H0V16H20V0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="white" />
                            </svg>
                            </span>
                            <span className='text-[1.6rem]'>info@rondureconnect.com</span>
                        </div>
                        <div className='flex space-x-5 flex-row items-center'>
                            <span><svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.00001 0.5C6.81276 0.50258 4.71584 1.3726 3.16923 2.91922C1.62261 4.46584 0.752589 6.56276 0.750009 8.75C0.747389 10.5374 1.33124 12.2763 2.41201 13.7C2.41201 13.7 2.63701 13.9963 2.67376 14.039L9.00001 21.5L15.3293 14.0353C15.3623 13.9955 15.588 13.7 15.588 13.7L15.5888 13.6978C16.669 12.2747 17.2526 10.5366 17.25 8.75C17.2474 6.56276 16.3774 4.46584 14.8308 2.91922C13.2842 1.3726 11.1873 0.50258 9.00001 0.5ZM9.00001 11.75C8.40666 11.75 7.82665 11.5741 7.3333 11.2444C6.83995 10.9148 6.45543 10.4462 6.22837 9.89805C6.00131 9.34987 5.9419 8.74667 6.05765 8.16473C6.17341 7.58279 6.45913 7.04824 6.87869 6.62868C7.29825 6.20912 7.83279 5.9234 8.41474 5.80764C8.99668 5.69189 9.59988 5.7513 10.1481 5.97836C10.6962 6.20542 11.1648 6.58994 11.4944 7.08329C11.8241 7.57664 12 8.15666 12 8.75C11.999 9.54535 11.6826 10.3078 11.1202 10.8702C10.5578 11.4326 9.79535 11.749 9.00001 11.75Z" fill="white" />
                            </svg>
                            </span>
                            <span className='text-[1.6rem]'>20 Nii Nortei Nyanchi Street, Dzorwulu</span>
                        </div>
                    </div>

                    {/* svg bg */}
                    <div className='absolute bottom-0 right-0'>
                        <div className='lg:w-[500px] lg:h-[490px] w-[360px] h-[350px]'>
                            <BgSvg />
                        </div>

                    </div>
                </div>

                <div className='py-[3rem] w-full lg:px-[5rem] '>
                    <div className='grid grid-cols-1 lg:grid-cols-2 w-full lg:gap-[4rem] gap-[2rem]'>
                        <FloatingLabelInput rounded={false} borderless bgTrans label={'First Name'} />
                        <FloatingLabelInput rounded={false} borderless bgTrans label={'Last Name'} />
                        <FloatingLabelInput rounded={false} borderless bgTrans label='Email' type={'email'} />
                        <FloatingLabelInput rounded={false} borderless bgTrans label={'Phone Number'} />
                    </div>

                    <div className='my-[5rem] space-y-8'>
                        <span className='text-[1.4rem] font-[600]'>Select Subject?</span>
                        <div className="lg:flex lg:space-x-10 grid grid-cols-2 gap-4">
                            {['General Inquiry', 'Booking', 'Car rental', 'Hotels'].map((subject, index) => (
                                <label key={index} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        checked={selectedSubjects.includes(subject)}
                                        onChange={() => handleSubjectChange(subject)}
                                    />
                                    <div className="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer">
                                        {selectedSubjects.includes(subject) ? (
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M0 7.32447C0 5.56864 0.720549 3.88472 2.00313 2.64316C3.28572 1.4016 5.02528 0.704102 6.83913 0.704102C8.65298 0.704102 10.3925 1.4016 11.6751 2.64316C12.9577 3.88472 13.6783 5.56864 13.6783 7.32447C13.6783 9.0803 12.9577 10.7642 11.6751 12.0058C10.3925 13.2473 8.65298 13.9448 6.83913 13.9448C5.02528 13.9448 3.28572 13.2473 2.00313 12.0058C0.720549 10.7642 0 9.0803 0 7.32447H0ZM6.44884 10.158L10.3864 5.39309L9.67509 4.84227L6.31753 8.90365L3.93934 6.98551L3.35573 7.66343L6.44884 10.1589V10.158Z" fill="#1E2B29" />
                                            </svg>
                                        ) : (
                                            <div className={`w-[1.4rem] h-[1.4rem] rounded-full bg-[#E0E0E0]`}></div>
                                        )}
                                    </div>
                                    <span className="ml-2 text-[#1E2B29] text-[1.2rem] font-[400]">{subject}</span>
                                </label>
                            ))}
                        </div>
                        <div className='pt-[4rem]'>

                            <div>
                                <span className='text-[1.2rem]'>Message</span>
                                <FloatingLabelInput rounded={false} borderless bgTrans label={'Write your message'} />
                            </div>

                        </div>

                        {/* submit btn */}
                        <div>
                            <button className="w-full h-[55px] bg-[#283372] text-white text-[1.6rem] font-bold rounded-[0.8rem] hover:bg-[#1e2a3a] transition duration-200">
                                Send Message
                            </button>
                        </div>
                    </div>

                </div>


            </div>
        </section>
    )
}

export default ContactUs