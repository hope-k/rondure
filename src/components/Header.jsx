"use client"

import React, { useEffect, useState } from 'react'
import Menu from '/public/rondure-assets/rondure-mobile-menu.svg'
import RondureLogo from '/public/rondure-assets/rondure-logo.svg'
import Link from 'next/link';
import Flight from '/public/rondure-assets/flight.svg'
import RonClose from '/public/rondure-assets/ron-close.svg'
import FlightButton from '/public/rondure-assets/flightbutton.svg'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { TailSpin } from 'react-loader-spinner';
import { redirect } from 'next/navigation';
import { signOut } from 'next-auth/react';



const MobileDropdownMenu = ({ isOpen, closeMenu }) => {

  const { data: session, status } = useSession()
  const user = session?.user

  useEffect(() => {
    console.log('USER: ', user)
  })

  const parentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.06,
      },
    },
    exit: { opacity: 0, y: 20 },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: 20 },
  };
  const pathname = usePathname();
  console.log("Current Path:", pathname); // Debugging
  const navItems = [
    { name: 'Visa Assistance', href: '/visa-assistance' },
    { name: 'Business Travel', href: '/business-travel' },
    { name: 'Vacations', href: '/vacations' },
    { name: 'Car Rental', href: '/car-rental' },
    { name: 'About', href: '/about' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Logistics', href: '/logistics' },
    { name: <FlightButton className='lg:hidden' />, href: '/fights' },
    { name: <span className={'font-[600] lg:hidden ' + (useSession().status === 'authenticated' && 'hidden')}>Sign Up</span>, href: '/auth/signup' }

  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="p-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-black h-[100svh] z-[99]"
            onClick={closeMenu}
          ></motion.div>

          <motion.div
            className="absolute top-0 left-0 w-full pb-[10rem] bg-white z-[100]"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.8, 0.25, 1],
            }}
          >
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

            <motion.div
              className="flex flex-col items-center justify-start mt-10 space-y-10 h-full"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={parentVariants}
            >
              {navItems.map((item, index) => {

                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={index}
                    variants={childVariants}
                  >
                    <Link
                      className={`hover:text-gray-700 font-[500] text-[1.6rem]  mb-4`}
                      href={item.href}
                      onClick={closeMenu}
                    >
                      <span className={isActive ? 'text-ron_orange' : 'text-[#1D1D1D]'}>{item.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
              {status === 'authenticated' ? user?.picture ? (
                <div className="flex flex-col items-center">
                  <Image
                    src={user.picture}
                    alt="Profile Picture"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <span className="text-gray-700 font-semibold underline mt-3 text-sm">{user.email}</span>
                </div>
              ) : (<div className='flex flex-col justify-center items-center w-full '>
                <div className="rounded-full bg-gray-300 flex items-center justify-center" style={{ width: '50px', height: '50px' }}>
                  <span className="text-black text-[1.6rem] font-[600]">
                    {user?.first_name?.charAt(0)}{user?.last_name?.charAt(0)}
                  </span>
                </div>
                <span className='font-[700] underline text-[1rem]'>
                  {user?.email}
                </span>
                <span onClick={() => signOut()} className='mt-10 text-red-600 font-[700] text-[1.2rem] underline '>
                  Logout
                </span>
              </div>) : null
                
                 
            }
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Header = () => {
  const { data: session, status } = useSession()
  const user = session?.user
  useEffect(() => {
    console.log('USER:: ', user)

  }, [session, user])

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();



  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  const navItems = [
    { name: 'Visa Assistance', href: '/visa-assistance' },
    { name: 'Business Travel', href: '/business-travel' },
    { name: 'Vacations', href: '/vacations' },
    { name: 'Car Rental', href: '/car-rental' },
    { name: 'About', href: '/about' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Logistics', href: '/logistics' },
    { name: <FlightButton className='lg:hidden' />, href: '/fights' },
    { name: <span className='font-[600] lg:hidden ' >Sign Up</span>, href: '/auth/signup' }
  ];
  return (
    <>
      <div className='h-[10.9rem] w-full bg-white drop-shadow-md relative z-[100]'>
        <div className='flex justify-between items-center max-w-[90%] lg:max-w-[85%] mx-auto h-full'>
          <Link href='/' className='flex items-center'>
            <RondureLogo className='lg:w-[17.8rem] w-[9.6rem]' />
          </Link>

          <div className='hidden lg:inline'>
            <nav className="flex space-x-8 text-gray-900 font-medium">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link className={`hover:text-gray-700 text-[1.6rem] ${isActive ? 'text-ron-orange' : '#1D1D1D'}`} key={index} href={item.href}>
                    <span className={isActive ? 'text-ron_orange' : 'text-[#1D1D1D]'}>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
            
          </div>

          <div className='hidden lg:flex items-center justify-center space-x-16'>
            <div><Flight width='50' height='50' /></div>
            {status === 'authenticated' ? (
              user?.picture ? (
                <Image
                  src={user.picture}
                  alt="Profile Picture"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              ) : (
                <div className="rounded-full bg-gray-300 flex items-center justify-center" style={{ width: '50px', height: '50px' }}>
                  <span className="text-black text-[1.6rem] font-[600]">
                    {user?.first_name?.charAt(0)}{user?.last_name?.charAt(0)}
                  </span>
                </div>
              )
            ) : (
              <Link href={'/auth/signup'} className='text-[1.6rem] font-[600]'><span>

                {status === 'loading' ? (
                  <TailSpin
                    height="50"
                    width="50"
                    color="#0000003A"

                  />
                ) : (
                  'Sign Up'
                )}
              </span></Link>
            )}
          </div>

          <div className='lg:hidden flex h-full justify-center items-center'>
            <div onClick={toggleMenu}>
              <Menu />
            </div>
          </div>
        </div>
      </div>
      <MobileDropdownMenu closeMenu={closeMenu} isOpen={isOpen} />
    </>
  )
}

export default Header