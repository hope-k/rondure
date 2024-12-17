import React, { use, useEffect, useState } from 'react';
import Facebook from '/public/fb/fb.svg';
import Google from '/public/google/google.svg';
import { Eye, EyeOff } from 'lucide-react';
import FloatingLabelInput from '../Forms/FloatingLabelInput';
import Link from 'next/link';
import PhoneNumberInput from '../Forms/PhoneNumberInput';
import API from '@/axiosConfig/config';
import { TailSpin } from 'react-loader-spinner'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'


const SocialButtons = (
  <div className='space-y-5 w-full'>
    <button className='flex justify-center flex-row space-x-2 px-10 py-5 w-full items-center border border-gray-400 rounded-3xl lg:px-[5rem] lg:py-[2rem]'>
      <Facebook />
      <span className='text-[#333333] text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem] font-[400]'>
        Sign up with Facebook
      </span>
    </button>
    <button className='flex justify-center flex-row space-x-2 px-10 py-5 w-full items-center border border-gray-400 rounded-3xl lg:px-[5rem] lg:py-[2rem]'>
      <Google />
      <span className='text-[#333333] text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem] font-[400]'>
        Sign up with Google
      </span>
    </button>
  </div>
);

const Signup = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [signupDetails, setSignupDetails] = useState({})
  const [errors, setErrors] = useState(null)
  const [signupLoading, setSignupLoading] = useState(false)


  useEffect(() => {
    console.log('details: ', signupDetails)
  }, [signupDetails])

  const handleChange = (e, selectedCountryCode) => {
    const { name, value } = e.target;
    const finalValue = selectedCountryCode ? `${selectedCountryCode}${value}` : value;
    setSignupDetails((prevDetails) => ({
      ...prevDetails,
      [name]: finalValue,
    }));
  }

  const handleCredentialsSignup = async (e) => {
    e.preventDefault()
    setSignupLoading(true)
    setErrors(null);
    try {
      const res = await API.post('/api/v1/auth/signup/', {
        ...signupDetails
      });
      console.log('RES', res)
      if (res.status === 201) {
        setSignupLoading(false)
        setSignupDetails(null);
        setErrors(null);
        toast.success('Sign-up successful! Welcome to Rondure Connect. Please check your email for the verification link.', {
          className: 'text-[1.3rem]',
          style: {
            color: '#ffffff',
            background: '#02491DFF'
          },
          duration: 10000
        });
        router.push('/auth/verify-email')

      }

    } catch (e) {
      setSignupLoading(false)
      const backendErrors = e.response?.data?.errors || [];
      const formattedErrors = backendErrors.reduce((acc, error) => {
        acc[error.attr] = error.detail;
        return acc;
      }, {});

      setErrors(formattedErrors || 'An unexpected error occurred.')
      console.log('ERROR: ', formattedErrors);
    }
  }



  return (
    <section className='min-h-screen relative flex items-center justify-center'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage: `
      linear-gradient(to bottom, rgba(110, 51, 114, 0.7), rgba(40, 51, 114, 0.2)),
      url('/home/1.jpg')
    `,
          filter: 'brightness(0.5)',
        }}
      ></div>
      <div className='max-w-[90%] w-full container lg:px-[15rem] relative z-50 py-10 lg:py-[10rem] lg:max-w-[50%] space-y-10 mx-auto bg-white rounded-[2.4rem] flex flex-col items-center'>
        <span className='font-[500] text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] text-[#333333]'>
          Create Your Account
        </span>
        {/* Social buttons */}
        {SocialButtons}

        <div className='w-full flex space-x-4 items-center justify-center'>
          <span className='flex-grow h-[0.2rem] bg-gray-300'></span>
          <span className='text-[1.2rem] md:text-[1.4rem] text-[#666666] font-[400]'>OR</span>
          <span className='flex-grow h-[0.2rem] bg-gray-300'></span>
        </div>

        {/* Form */}
        <form onSubmit={handleCredentialsSignup} className='space-y-5 w-full'>

          <div className='flex lg:flex-row flex-col gap-4'>
            <div className='flex-1'>
              <FloatingLabelInput
                label='First Name'
                type='text'
                placeholder='Enter your name'
                name='first_name'
                handleChange={handleChange}
                error={errors?.first_name}
              />
            </div>
            <div className='flex-1'>
              <FloatingLabelInput
                label='Last Name'
                type='text'
                placeholder='Enter your name'
                name='last_name'
                handleChange={handleChange}
                error={errors?.last_name}
              />
            </div>
          </div>
          <div>
            <FloatingLabelInput
              label='Email'
              type='email'
              placeholder='Enter your email'
              name='email'
              handleChange={handleChange}
              error={errors?.email}

            />
          </div>
          <div>
            <PhoneNumberInput
              label='Phone'
              type='tel'
              placeholder='Enter your phone number'
              radius={'0.8rem'}
              name='phone_number'
              handleChange={handleChange}
              error={errors?.phone_number}

            />
          </div>
          <div className='flex flex-col lg:flex-row lg:space-x-5 space-y-5 lg:space-y-0'>
            <div className='relative flex-1'>
              <FloatingLabelInput
                label='Password'
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter your password'
                name='password1'
                handleChange={handleChange}
                error={errors?.non_field_errors || errors?.password1
                }

              />
              <div
                className='absolute inset-y-0 right-3 flex items-center cursor-pointer'
                onClick={() => setShowPassword(!showPassword)}
              >
                <div
                  className='absolute z-50 inset-y-0 right-3 flex items-center cursor-pointer'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </div>              </div>
            </div>
            <div className='relative flex-1'>
              <FloatingLabelInput
                label='Confirm Password'
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder='Confirm your password'
                name='password2'
                handleChange={handleChange}
                error={errors?.non_field_errors || errors?.password2
                }

              />
              <div
                className='absolute inset-y-0 right-3 flex items-center cursor-pointer'
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <div
                  className='absolute z-50 inset-y-0 right-3 flex items-center cursor-pointer'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </div>              </div>
            </div>
          </div>
          <button disabled={signupLoading} type='submit' className='w-full text-center flex items-center justify-center bg-[#283372] disabled:opacity-60 text-white px-10 py-5 rounded-full text-[1.6rem] lg:text-[1.8rem] font-[500]'>
            <span>
              {signupLoading ? (
                <TailSpin
                  height="20"
                  width="20"
                  color="#FFFFFFFF"
                />
              ) : (
                'Sign Up'
              )}
            </span>
          </button>
          <div className='text-center'>
            <Link href='/auth/signin' className='text-[1.2rem] md:text-[1.4rem] text-blue-800 underline'>
              Already have an account? Sign in
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;