"use client";
import Signin from '@/components/Auth/Signin';
import { motion } from "framer-motion";
import { Suspense } from "react";


export default function Page() {
    return (
        <Suspense fallback={<div className='h-screen w-screen text-[50rem] bg-red-500 relative z-[9000]'>loading...</div>}>
            <motion.div
                initial={{ opacity: 0, y: 10 }} // Start further down for a subtle drop-in effect
                animate={{ opacity: 1, y: 0 }} // Smoothly animate to its natural position
                transition={{
                    duration: 0.6, // Slightly longer duration
                    ease: [0.4, 0, 0.2, 1], // Custom cubic bezier for a polished ease
                }}
            >
                <Signin />
            </motion.div>

        </Suspense>
    );
}