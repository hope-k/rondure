// components/ScrollingPartners.js
import React from "react";
import AirFrance from '/public/rondure-assets/partners/airfrance.svg'
import American from '/public/rondure-assets/partners/american.svg'
import British from '/public/rondure-assets/partners/british.svg'
import Delta from '/public/rondure-assets/partners/delta.svg'
import Emirates from '/public/rondure-assets/partners/emirates.svg'
import Luf from '/public/rondure-assets/partners/luf.svg'
import Turkish from '/public/rondure-assets/partners/turkish.svg'

const partners = [
    { id: 1, name: "Air France", logo: AirFrance },
    { id: 5, name: "Emirates", logo: Emirates },
    { id: 7, name: "Turkish Airlines", logo: Turkish },
    { id: 6, name: "Lufthansa", logo: Luf },
    { id: 3, name: "British Airways", logo: British },
    { id: 2, name: "American Airlines", logo: American },
    { id: 4, name: "Delta Airlines", logo: Delta },
];

const ScrollingPartners = () => {
    return (
        <div className="overflow-hidden bg-gray-100">
            <div className="flex w-full whitespace-nowrap animate-loop">
                {partners.map((partner) => (
                    <React.Fragment key={partner.id}>
                        <div className="flex items-center mx-[4rem]">
                            <partner.logo className=" " aria-label={partner.name} />
                        </div>
                    </React.Fragment>
                ))}
                {partners.map((partner) => (
                    <React.Fragment key={partner.id}>
                        <div className="flex items-center mx-[4rem]">
                            <partner.logo className=" " aria-label={partner.name} />
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default ScrollingPartners;