"use client"


import React, { createContext, useState } from 'react';

export const FlightContext = createContext();

export const FlightProvider = ({ children }) => {
    const [adults, setAdults] = useState(0);
    const [numChildren, setNumChildren] = useState(0);
    const [selectedClass, setSelectedClass] = useState('economy'); 

    return (
        <FlightContext.Provider value={{ adults, setAdults, numChildren, setNumChildren, selectedClass, setSelectedClass }}>
            {children}
        </FlightContext.Provider>
    );
};