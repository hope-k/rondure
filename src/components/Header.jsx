import React from 'react'
import Menu from '/public/rondure-assets/rondure-mobile-menu.svg'
import RondureLogo from '/public/rondure-assets/rondure-logo.svg'
import Link from 'next/link';
import Flight from '/public/rondure-assets/flight.svg'

const navItems = [
  { name: 'Visa Assistance', href: '/visa-assistance' },
  { name: 'Business Travel', href: '/business-travel' },
  { name: 'Vacations', href: '/vacations' },
  { name: 'Car Rental', href: '/car-rental' },
  { name: 'About', href: '/about' },
  { name: 'Contact Us', href: '/contact-us' },
  { name: 'Logistics', href: '/logistics' },
];

const Header = () => {

  return (
    <div className=' h-[10.9rem] w-full bg-white drop-shadow-md'>
      <div className='flex justify-between items-center max-w-[90%] lg:max-w-[85%] mx-auto h-full'>
        <div className='flex items-center'>
          <RondureLogo className='lg:w-[17.8rem] w-[9.6rem]' />
        </div>

        {/* desktop nav */}
        <div className='hidden lg:inline'>
          <nav className="flex space-x-8 text-gray-900 font-medium">
            {navItems.map((item, index) => (
              <Link className="hover:text-gray-700 text-[1.6rem] text-[#1D1D1D]" key={index} href={item.href}>
                <span >{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className='hidden lg:flex items-center justify-center space-x-16'>
          <div><Flight width='50' height='50' /></div>
          <div className='text-[1.6rem] font-[600]'><span>Sign Up</span></div>
        </div>

        {/* mobile nav */}
        <div className='lg:hidden flex h-full  justify-center items-center'>
          <Menu className='' />
        </div>
      </div>
    </div>
  )
}

export default Header