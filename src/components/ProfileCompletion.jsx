"use client"
import React, { useEffect, useState } from 'react'
import PhoneNumberInput from './Forms/PhoneNumberInput'
import { useSession, } from 'next-auth/react'
import API from '@/axiosConfig/config'

const ProfileCompletion = () => {
    const { data: session, status, update } = useSession()
    const [phoneNumber, setPhoneNumber] = useState('')
    const [error, setError] = useState('') // State to hold error message

    const handleChange = (e, selectedCountryCode) => {
        const value = e.target.value
        const finalValue = selectedCountryCode ? `${selectedCountryCode}${value}` : value;

        setPhoneNumber(finalValue)
    }



    const onSubmit = async (e) => {

        e.preventDefault(); // Prevent default form submission
        setError(''); // Reset error message before submission
        try {
            const res = await API.patch('/api/v1/auth/user/', {
                'phone_number': phoneNumber
            })
            if (res.status === 200) {
                await update({
                    user: {
                        phone_number: phoneNumber,
                        is_new_user: false // Update the phone number
                    },
                });
            
            }
        } catch (e) {
            setError(e.message); // Set error message if an error occurs
            console.log('ERROR: ', e.message)
        }
    }


    if (status === 'authenticated' && session?.user?.is_new_user) {
        return (
            <div className='h-screen w-screen fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm'>
                <form onSubmit={onSubmit} className='bg-white rounded-2xl shadow-md w-11/12 max-w-md lg:max-w-2xl py-[4rem] px-4 lg:px-10'>
                    <h2 className='text-[1.2rem] lg:text-[2rem] font-[400] py-3'>Please Provide Your Phone Number</h2>
                    <div className='mt-4'>
                        <PhoneNumberInput
                            label='Phone'
                            type='tel'
                            placeholder='Enter your phone number'
                            radius={'0.8rem'}
                            handleChange={handleChange}
                            name={'phone_number'}
                            error={error}
                        />
                    </div>
                    <button type='submit' className='bg-[#283372] my-3 text-white p-6 text-[1.4rem] rounded-lg w-full'>Submit</button>
                </form>
            </div>
        )
    }
    return null
}

export default ProfileCompletion