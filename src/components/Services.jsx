import React, { useState } from 'react'
import { AlarmCheck } from 'lucide-react'
import Link from 'next/link'
import Clipboard from '/public/rondure-assets/services/clipboard.svg'
import Driving from '/public/rondure-assets/services/driving.svg'
import Protocol from '/public/rondure-assets/services/user-octagon.svg'
import Truck from '/public/rondure-assets/services/truck-fast.svg'
import ServiceCardBackground from '/public/rondure-assets/services/services-background.svg'


const ServiceCard = ({ name, description, icon, link }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className='rounded-[1.6rem] py-10 px-4 relative bg-white w-full h-[21.4rem] flex items-start' 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='px-4'>
                {icon}
            </div>
            <div className='flex flex-col'>
                <h2 className='mb-2'><span className='text-[2.4rem] font-[600] text-[#283372]'>{name}</span></h2>
                <p className='text-[1.6rem] font-[400] mb-10 max-w-[20ch]'>{description}</p>
                <div className='absolute bottom-8'>
                    <Link href={link} className='underline '>
                        <span className='text-[2rem] font-[500]'>Read More</span>
                    </Link>
                </div>
            </div>

            <div className='absolute bottom-0 right-0 '>
                <ServiceCardBackground className='transition-opacity duration-500' opacity={isHovered ? '0.7' : '0.29'} />
            </div>
        </div>
    )
}


const Services = () => {
    const services = [
        {
            name: 'Visa Assistance',
            description: 'All-inclusive visa assistance in a timely, and secure manner.',
            icon: <Clipboard />,
            link: '/'
        },
        {
            name: 'Protocol Service',
            description: 'We take pride in providing one of the best protocol services.',
            icon: <Protocol />,
            link: '/'
        },
        {
            name: 'Car Rental',
            description: 'Rondure makes it simple to hire an automobile.',
            icon: <Driving />,
            link: '/'
        },
        {
            name: 'Logistics',
            description: 'Optimise your end-to-end e-commerce logistics, with cross-border delivery.',
            icon: <Truck />,
            link: '/'
        },
    ]
    return (
        <div className='flex w-full justify-center space-x-6 overflow-x-auto snap-x snap-mandatory max-w-[90%] mx-auto'>
            {services?.map((service, i) => (
                <div key={i} className="lg:w-[34.2rem] w-full px-2 flex-shrink-0 snap-start">
                    <ServiceCard
                        key={i}
                        link={service.link}
                        icon={service.icon}
                        description={service.description}
                        name={service.name}
                    />
                </div>
            ))}
        </div>
    )
}

export default Services