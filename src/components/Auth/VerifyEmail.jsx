"use client"
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import API from '@/axiosConfig/config';
import { toast } from 'react-hot-toast';
import { TailSpin } from 'react-loader-spinner';
import { useSession } from 'next-auth/react';

const VerifyEmail = () => {
    const { data: session, update, status: authStatus } = useSession();
    const router = useRouter();
    const searchParams = useSearchParams()
    const token = searchParams.get('confirm-email-token')

    const [status, setStatus] = useState(''); //'success', or 'error'
    const [isConfirming, setIsConfirming] = useState(false); // Loading state for confirming email
    const [verified, setVerified] = useState(false); // Loading state for confirming email
    const [message, setMessage] = useState(''); // Feedback message for the user
    const [email, setEmail] = useState(''); // Email state for resend verification
    const [isResending, setIsResending] = useState(false); // Loading state for resending verification
    const confirmEmail = async (token) => {
        setIsConfirming(true); // Set loading state to true`
        setMessage('')
        setStatus('')
        try {
            const response = await API.post(
                `/api/v1/auth/verify-email/`,
                { 'key': token }
            );
            setMessage('Your email has been successfully verified!')
            setStatus('success')
            setVerified(true)
            toast.success('Your email has been successfully verified', {
                duration: 10000,
                style: {
                    backgroundColor: '#005F03FF',
                    color: "#ffffff",
                    fontSize: "1.3rem",
                    fontWeight: 700
                }
            })
            await update({
                user: {
                    is_email_verified: true,
                },
            });


            router.replace('/auth/signin');
            setIsConfirming(false); // Set loading state to true`

        } catch (error) {
            setIsConfirming(false); // Set loading state to true`
            setStatus('error');
            setVerified(false)
            const errorMessage = error.response?.data?.detail || 'Failed to confirm your email. Please try again or contact support.';
            setMessage(errorMessage);
            if (!session?.user?.is_email_verified) {
                toast.error(errorMessage, {
                    duration: 6000,
                    style: {
                        backgroundColor: '#C60D0DFF',
                        color: "#ffffff",
                        fontSize: "1.3rem",
                        fontWeight: 700
                    }
                });
            }
        }
    };

    useEffect(() => {
        setMessage('If you did not receive the verification email, please check your spam folder or click the resend button.'); // Set initial message
        const handleEmailVerification = async () => {
            if (!token || verified) return;

            try {
                await confirmEmail(token);
            } catch (error) {
                console.error('Email verification failed:', error);
            }
        };

        if (authStatus !== "loading") { // Wait until session status resolves
            handleEmailVerification();
        }
    }, [token, session, authStatus, verified]);


    const resendVerification = async (e) => {
        e.preventDefault()
        setIsResending(true); // Set loading state to true for resending
        try {
            const res = await API.post('/api/v1/auth/resend-verification/', { email });
            toast.success(<span>Verification email resent! Please check your inbox and also check your spam folder.</span>, {
                duration: 10000,
                style: {
                    backgroundColor: '#005F03FF',
                    color: "#ffffff",
                    fontSize: "1.3rem",
                    fontWeight: 700
                }
            });
            setIsResending(false); // Reset loading state for resending


        } catch (error) {
            setIsResending(false); // Reset loading state for resending

            const errorMessage = error.response?.data?.detail || 'Failed to resend verification email. Please try again';
            toast.error(<span>{errorMessage}</span>, {
                duration: 6000,
                style: {
                    backgroundColor: '#C60D0DFF',
                    color: "#ffffff",
                    fontSize: "1.3rem",
                    fontWeight: 700
                }
            });
        } finally {
            setIsResending(false); // Reset loading state for resending
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-full py-[30rem] bg-gray-100">
            <div className="bg-white shadow-lg rounded-[0.8rem] p-8 max-w-xl w-full">
                {isConfirming ? ( // Show loading spinner when confirming email
                    <div className="flex items-center justify-center">
                        <TailSpin height="40" width="40" color="#27282DFF" />
                    </div>
                ) : (
                    <>
                        <h1 className="text-2xl font-semibold text-center mb-4">Email Verification</h1>
                        <p className={`text-center  font-bold mb-4  ${status === 'error' ? 'text-red-700' : 'text-yellow-700'}`}>
                            {message}
                        </p>
                        {status === 'success' ? (
                            <span className="text-center font-[2rem]">You will be redirected shortly...</span>
                        ) : (
                            <form onSubmit={resendVerification} className="flex flex-col items-center">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="border border-gray-300 rounded-md text-[1.4rem] p-6 mb-4 w-full"
                                />
                                <button
                                    type={'submit'}
                                    className="bg-blue-900 text-white rounded-xl p-[1rem] h-full py-6 w-full hover:bg-blue-800 disabled:opacity-60 transition duration-200"
                                    disabled={isResending} // Disable button while resending
                                >
                                    <span className='w-full h-full text-[1.4rem]  flex items-center justify-center font-[500]'>
                                        {isResending ? (
                                            <TailSpin height="15" width="20" color="#FFFFFF" />
                                        ) : (
                                            'Resend Verification Email'
                                        )}
                                    </span>
                                </button>
                            </form>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default VerifyEmail;