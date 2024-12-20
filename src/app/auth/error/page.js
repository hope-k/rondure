'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'
import { toast } from 'react-hot-toast'

export default function Error({ error, reset }) {
    useEffect(() => {
        console.log('----->>>>>', error)
    },[error])
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
                <h2 className="text-3xl font-bold text-red-500 mb-4">Oops! Something went wrong.</h2>
                <p className="text-lg text-gray-600 mb-6">{error || 'An unexpected error occurred.'}</p>
                <button
                    onClick={() => reset()}
                    className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition"
                >
                    Try Again
                </button>
                <div className="mt-4">
                    <p className="text-sm text-gray-500">If the problem persists, please contact support.</p>
                </div>
            </div>
        </div>
    )
}