import React from 'react'
import Image from 'next/image'
import Like from '/public/about/like.svg'
import Global from '/public/about/global.svg'
import Security from '/public/about/security.svg'


const About = () => {
    return (
        <section>
            <div className='w-full h-[60svh] lg:h-[60.3rem] relative'>
                <div className='w-full h-full'>
                    <Image
                        alt={`Image Background`}
                        fill={true}
                        src={'/about/aboutbg.jpeg'}
                        priority
                        className='object-cover bg-center brightness-75'
                    />
                </div>

                <div className='absolute w-full flex flex-col items-center top-[50%] lg:top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center whitespace-nowrap'>
                    <div className='mb-6 lg:mb-[1rem] text-[clamp(1rem,3vw+1rem,6.5rem)] font-bold tracking-wide leading-[2.4rem] lg:leading-none whitespace-nowrap'>
                        <h1>About<a className='text-ron_orange'> Us</a></h1>
                    </div>
                    <p className='mt-4 w-full max-w-[70ch] px-4 lg:px-0  text-[1.4rem] sm:text-[2.4rem] text-white text-center whitespace-normal' >
                        Travel management can be a time-consuming and costly endeavour. A good travel management solution must herefore offer end-to-end service to the client, while combining exceptional service which saves time, with real value for money. An all-round travel solution is exactly what the Rondure Connect experience offers.
                    </p>
                </div>
            </div>
            <div className=' flex-col my-20 space-y-10 lg:max-w-[80%] lg:flex lg:flex-row lg:space-x-[10rem] lg:mt-[10rem] mx-auto '>
                <div className='flex flex-col items-center'>
                    <Like />
                    <span className='text-[1.6rem] text-center'>We ensure that our clients enjoy a seamless experience while managing their travels.</span>
                </div>
                <div className='flex flex-col items-center'>
                    <Global />
                    <span className='text-[1.6rem] text-center'>We connect corporate bodies and individuals alike to any destination around the globe.</span>
                </div>
                <div className='flex flex-col items-center'>
                    <Security />
                    <span className='text-[1.6rem] text-center'>We offer reliable assistance in planning both business and leisure trips.</span>
                </div>

            </div>
        </section>
    )
}

export default About