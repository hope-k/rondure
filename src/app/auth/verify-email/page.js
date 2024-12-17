"use client";
import VerifyEmail from '@/components/Auth/VerifyEmail';
import { motion } from "framer-motion";

import { Suspense } from 'react';

export default function Page() {
    return (
        <Suspense>
            <motion.div
                initial={{ opacity: 0, y: 10 }} // Start further down for a subtle drop-in effect
                animate={{ opacity: 1, y: 0 }} // Smoothly animate to its natural position
                transition={{
                    duration: 0.6, // Slightly longer duration
                    ease: [0.4, 0, 0.2, 1], // Custom cubic bezier for a polished ease
                }}
            >
                <VerifyEmail />
            </motion.div>

        </Suspense>
    );
}