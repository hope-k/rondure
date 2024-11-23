"use client"

import React, { useState, useEffect } from 'react'
import Menu from '/public/rondure-assets/rondure-mobile-menu.svg'
import RondureLogo from '/public/rondure-assets/rondure-logo.svg'
import Link from 'next/link';
import Flight from '/public/rondure-assets/flight.svg'
import RonClose from '/public/rondure-assets/ron-close.svg'
import FlightButton from '/public/rondure-assets/flightbutton.svg'
import { motion, AnimatePresence } from 'framer-motion'






const navItems = [
  { name: 'Visa Assistance', href: '/visa-assistance' },
  { name: 'Business Travel', href: '/business-travel' },
  { name: 'Vacations', href: '/vacations' },
  { name: 'Car Rental', href: '/car-rental' },
  { name: 'About', href: '/about' },
  { name: 'Contact Us', href: '/contact-us' },
  { name: 'Logistics', href: '/logistics' },
  {name: <FlightButton className='lg:hidden'/>, href:'/fights'},
  { name: <span className='font-[600] lg:hidden'>Sign Up</span>, href:'/signup'}
];

const MobileDropdownMenu = ({ isOpen, closeMenu }) => {
  // Variants for parent and children
  const parentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.06, // Stagger each child by 0.2 seconds
      },
    },
    exit: { opacity: 0, y: 20 },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="p-0">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-black h-[100svh] z-[99]"
            onClick={closeMenu}
          ></motion.div>

          {/* Dropdown Container */}
          <motion.div
            className="absolute top-0 left-0 w-full pb-[10rem] bg-white z-[100]"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.8, 0.25, 1], // Custom cubic bezier for smooth transition
            }}
          >
            {/* Header */}
            <div className="h-[10.9rem] shadow-md">
              <div className="max-w-[90%] h-full mx-auto flex justify-between items-center">
                <Link href={'/'} className="flex items-center">
                  <RondureLogo className="lg:w-[17.8rem] w-[9.6rem]" />
                </Link>
                <div onClick={closeMenu} className="cursor-pointer">
                  <RonClose />
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <motion.div
              className="flex flex-col items-center justify-start mt-10 space-y-10 h-full"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={parentVariants} // Attach parent variants here
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={childVariants} // Attach child variants here
                >
                  <Link
                    className="hover:text-gray-700 font-[500] text-[1.6rem] text-ron_text mb-4"
                    href={item.href}
                    onClick={closeMenu}
                  >
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>

      <div className='h-[10.9rem] w-full bg-white drop-shadow-md relative z-[100]'>
        <div className='flex justify-between items-center max-w-[90%] lg:max-w-[85%] mx-auto h-full'>
          <Link href='/' className='flex items-center'>
            <RondureLogo className='lg:w-[17.8rem] w-[9.6rem]' />
          </Link>

          {/* desktop nav */}
          <div className='hidden lg:inline'>
            <nav className="flex space-x-8 text-gray-900 font-medium">
              {navItems.map((item, index) => (
                <Link className="hover:text-gray-700 text-[1.6rem] text-[#1D1D1D]" key={index} href={item.href}>
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>

          <div className='hidden lg:flex items-center justify-center space-x-16'>
            <div><Flight width='50' height='50' /></div>
            <div className='text-[1.6rem] font-[600]'><span>Sign Up</span></div>
          </div>

          {/* mobile nav */}
          <div className='lg:hidden flex h-full justify-center items-center'>
            <div onClick={toggleMenu}>
              <Menu />
            </div>
          </div>
        </div>


      </div>
      <MobileDropdownMenu closeMenu={closeMenu} isOpen={isOpen}/>
    </>
  )
}

export default Header