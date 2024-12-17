"use client"

import React, { useState, useEffect } from 'react';
import Facebook from '/public/fb/fb.svg';
import Google from '/public/google/google.svg';
import { Eye, EyeOff } from 'lucide-react';
import FloatingLabelInput from '../Forms/FloatingLabelInput';
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import { toast } from 'react-hot-toast'
import { useRouter, useSearchParams } from 'next/navigation';
import { TailSpin } from 'react-loader-spinner';


const handleFacebookLogin = async (callbackUrl) => {
    try {
        const result = await signIn('facebook', { callbackUrl: callbackUrl });
        if (result && result.error) {
            toast.error(`Something went wrong. Try Again: ${result.error}`, {
                id: 'loading', className: ' text-[11px] p-0 ', style: {
                    color: 'white',
                    background: 'red'
                }
            })
        }
    } catch (error) {
        // Handle unexpected errors (network issues, etc.)
        toast.error(`An unexpected error occurred. Please try again. ${error.message}`, {
            id: 'loading', className: ' text-[11px] p-0 ', style: {
                color: 'white',
                background: 'red'
            }
        })
    }
};

const handleGoogleLogin = async (callbackUrl) => {
    try {
        const result = await signIn('google', { callbackUrl: callbackUrl });
        if (result && result.error) {
            toast.error(`Something went wrong. Try Again: ${result.error}`, {
                id: 'loading', className: ' text-[11px] p-0 ', style: {
                    color: '#ffffff',
                    background: '#860B0BFF'
                }
            });
        }
    } catch (error) {
        // Handle unexpected errors (network issues, etc.)
        toast.error(`An unexpected error occurred. Please try again. ${error.message}`, {
            id: 'loading', className: ' text-[11px] p-0 ', style: {
                color: '#ffffff',
                background: '#860B0BFF'
            }
        });
    }
};


const SocialButtons = (callbackUrl) => (
    <div className='space-y-5 w-full'>
        <button onClick={() => handleFacebookLogin(callbackUrl)} className='flex justify-center flex-row space-x-2 px-10 py-5 w-full items-center border border-gray-400 rounded-3xl lg:px-[5rem] lg:py-[2rem]'>
            <Facebook />
            <span className='text-[#333333] text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem] font-[400] '>
                Sign in with Facebook
            </span>
        </button>
        <button onClick={() => handleGoogleLogin(callbackUrl)} className='flex justify-center flex-row space-x-2 px-10 py-5 w-full items-center border border-gray-400 rounded-3xl lg:px-[5rem] lg:py-[2rem]'>
            <Google />
            <span className='text-[#333333] text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem] font-[400] '>
                Sign in with Google
            </span>
        </button>
    </div>
);

const Signin = () => {

    const router = useRouter()
    const [credentials, setCredentials] = useState(null)
    const [showPassword, setShowPassword] = useState(false);
    const [signinLoading, setSigninLoading] = useState(false)
    const searchParams = useSearchParams()
    const [error, setError] = useState()
    const callbackUrl = searchParams.get("callbackUrl") || "/";

    const handleCredentialsLogin = async (e) => {
        setError(null)

        e.preventDefault()
        setSigninLoading(true)
        try {
            const result = await signIn('credentials', {
                email: credentials.email,
                password: credentials.password,
                redirect: false,
                callbackUrl: '/',
            })

            console.log(JSON.stringify(result.error, null, 2)); // Pretty-prints the object            setSigninLoading(false)

            if (result && result.error) {
                setSigninLoading(false)
                toast.error(<span>{result.error}</span>, {
                    id: 'signin', className: ' text-[1.3rem] font-[600] p-0 ', style: {
                        color: 'white',
                        background: 'red'
                    },
                    duration: 5000
                })
            } else {

                toast.success('Signed In', {
                    id: 'signin', className: ' text-[1.3rem] font-[600] p-0 ', style: {
                        color: 'white',
                        background: 'green',

                    }
                })
                router.replace('/',)
            }


        } catch (e) {
            setSigninLoading(false)

        }
    }
    useEffect(() => {
        if (searchParams.has('error')) {
            toast.error(`Something went wrong. Try Again: ${searchParams.get('error')}`, {
                id: 'loading', className: ' text-[11px] p-0 ', style: {
                    color: 'white',
                    background: 'red'
                }
            })
        }

    }, [searchParams])

    const handleChange = (e) => {
        const { name, value } = e.target
        setCredentials((creds) => ({
            ...creds,
            [name]: value
        }))

    }

    return (
        <section className='min-h-screen relative flex items-center justify-center'>
            {/* Background Image */}
            <div
                className='absolute inset-0 bg-cover bg-center'
                style={{
                    backgroundImage: `
      linear-gradient(to bottom, rgba(110, 51, 114, 0.6), rgba(40, 51, 114, 0.3)),
      url('/home/1.jpg')
    `,
                    filter: 'brightness(0.5)',
                }}
            ></div>
            <div className='max-w-[90%] w-full container lg:px-[15rem] relative z-50 py-10 lg:py-[10rem] lg:max-w-[50%] space-y-10 mx-auto bg-white rounded-[2.4rem] flex flex-col items-center'>
                <span className='font-[500] text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] text-[#333333]'>
                    Sign In to Continue
                </span>
                {/* Social buttons */}
                {SocialButtons(callbackUrl)}

                <div className='w-full flex space-x-4 items-center justify-center'>
                    <span className='flex-grow h-[0.2rem] bg-gray-300'></span>
                    <span className='text-[1.2rem] md:text-[1.4rem] text-[#666666] font-[400]'>OR</span>
                    <span className='flex-grow h-[0.2rem] bg-gray-300'></span>
                </div>

                {/* Form */}
                <form onSubmit={handleCredentialsLogin} className='space-y-5 w-full'>
                    <div>
                        <FloatingLabelInput
                            label='Email'
                            type='email'
                            placeholder='Enter your email'
                            handleChange={handleChange}
                            name='email'
                            error={error}
                        />
                    </div>
                    <div className='relative'>
                        <div>
                            <FloatingLabelInput
                                label='Password'
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Enter your password'
                                handleChange={handleChange}
                                name='password'
                                error={error}
                            />
                        </div>
                        <div
                            className='absolute z-50 inset-y-0 right-3 flex items-center cursor-pointer'
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </div>
                    </div>
                    <div className='text-right'>
                        <Link href='#' className='text-[1.2rem] md:text-[1.4rem] text-blue-500 underline'>
                            Forgot Password?
                        </Link>
                    </div>
                    <button disabled={signinLoading} type='submit' className='w-full disabled:opacity-60 bg-[#283372] text-white px-10 py-5 rounded-full text-[1.6rem] lg:text-[1.8rem] font-[500]'>
                        <span className='flex items-center justify-center'>
                            {signinLoading ? (
                                <TailSpin color="#ffffff" height={20} width={20} />
                            ) : (
                                'Sign In'
                            )}
                        </span>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Signin;