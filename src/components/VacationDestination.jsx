import { useState } from "react";

import { motion } from "framer-motion";
import { Eye, Globe } from "lucide-react";
import France from '/public/rondure-assets/countries/icons/france.svg'
import Ghana from '/public/rondure-assets/countries/icons/ghana.svg'
import USA from '/public/rondure-assets/countries/icons/ghana.svg'
import Italy from '/public/rondure-assets/countries/icons/italy.svg'
import Rwanda from '/public/rondure-assets/countries/icons/italy.svg'
import England from '/public/rondure-assets/countries/icons/england.svg'
import Egypt from '/public/rondure-assets/countries/icons/england.svg'
import Spain from '/public/rondure-assets/countries/icons/spain.svg'
import Kenya from '/public/rondure-assets/countries/icons/spain.svg'
import SouthAfrica from '/public/rondure-assets/countries/icons/south-africa.svg'


const destinations = [
    { name: "France", image: "/rondure-assets/countries/france.png", icon: <France /> },
    { name: "Ghana", image: "/rondure-assets/countries/ghana.png", icon: <Ghana /> },
    { name: "Italy", image: "/rondure-assets/countries/italy.png", icon: <Italy /> },
    { name: "Rwanda", image: "/rondure-assets/countries/rwanda.png", icon: <Rwanda /> },
    { name: "England", image: "/rondure-assets/countries/england.png", icon: <England /> },
    { name: "Egypt", image: "/rondure-assets/countries/egypt.png", icon: <Egypt /> },
    { name: "Spain", image: "/rondure-assets/countries/spain.png", icon: <Spain /> },
    { name: "USA", image: "/rondure-assets/countries/usa.png", icon: <USA /> },
    { name: "Kenya", image: "/rondure-assets/countries/kenya.png", icon: <Kenya /> },
    { name: "South Africa", image: "/rondure-assets/countries/south-africa.png", icon: <SouthAfrica /> },
];


const DestinationCard = ({ name, image, icon }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Function to get background color based on the name
    const getIconBgColor = (name) => {
        const colors = {
            France: "#F48461",
            Ghana: "#CA3000",
            Italy: "#9EB953",
            Rwanda: "#9EB953",
            England: "#61D1F4",
            Egypt: "#61D1F4",
            Spain: "#7E61F4",
            USA: "#CA3000",
            Kenya: "#7E61F4",
            "South Africa": "#D750D1",
        };
        return colors[name] || "#FFFFFF"; // Default to white if name not found
    };

    return (
        <motion.div
            className="flex-shrink-0 w-[10.8rem] h-[30.29rem] relative overflow-hidden rounded-[4rem] bg-cover object-cover bg-center shadow-lg inset-0 flex flex-col justify-end text-white space-y-4"
            style={{ backgroundImage: `url(${image})` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{
                width: isHovered ? "30.79rem" : "10.8rem",
            }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
        >
            {/* Rotating content */}
            <motion.div
                initial={false}
                className="flex flex-row items-center space-x-6 transform origin-center "
                animate={{
                    rotate: isHovered ? 0 : -90,
                    translateY: isHovered ? '-4rem' : '-5rem', // Smooth adjustment instead of margin
                    translateX: isHovered ? '2rem' : 0, // Replace marginInline with translate
                }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
            >
                {/* Icon with background color */}
                <div>
                    <div
                        className="rounded-full w-fit p-6 h-fit"
                        style={{ backgroundColor: getIconBgColor(name) }}
                    >
                        {icon}
                    </div>
                </div>

                {/* Adjusted name span */}
                <motion.span
                    className="text-[1.6rem] font-[600] origin-center"
                    transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
                    style={{
                        transformOrigin: "left center", // Ensures the text stays centered during rotation
                    }}
                >
                    {name}
                </motion.span>
            </motion.div>
        </motion.div>
    );
};

const VacationDestinations = () => {
    return (
        <div className="lg:py-16 ">
            <div className="bg-gray-100 flex flex-col items-center justify-center px-4 ">
                <h1 className="text-3xl font-bold text-[#283372] mb-12">
                    Vacation Destination
                </h1>

                <div className="flex w-screen lg:w-full lg:justify-center space-x-8 overflow-y-hidden overflow-x-scroll ">
                    {destinations.map((destination, index) => (
                        <div key={index} className=" ml-6 lg:ml-0">
                            <DestinationCard
                                key={index}
                                name={destination.name}
                                image={destination.image}
                                icon={destination.icon}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VacationDestinations;