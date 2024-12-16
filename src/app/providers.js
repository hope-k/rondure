"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { FlightProvider } from '@/context/FlightContext';

function Providers({ children }) {

    return (
        <SessionProvider>
            <FlightProvider>
                {children}
            </FlightProvider>
        </SessionProvider>
    );
}

export default Providers;