import { motion } from "framer-motion";
import { Eye, Globe } from "lucide-react";

const destinations = [
    { name: "Egypt", image: "/placeholder1.jpg", icon: <Globe /> },
    { name: "Spain", image: "/placeholder2.jpg", icon: <Eye /> },
    { name: "USA", image: "/placeholder3.jpg", icon: <Eye /> },
    { name: "Kenya", image: "/placeholder4.jpg", icon: <Globe /> },
];

const DestinationCard = ({ name, image, icon }) => {
    return (
        <motion.div
            className="flex-shrink-0 relative overflow-hidden rounded-[2rem] bg-cover bg-center shadow-lg absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white space-y-4"
            style={{ backgroundImage: `url(${image})` }}
            whileHover={{ scale: 1.05, width: "16rem" }}
            whileTap={{ scale: 0.98 }}
            initial={{ width: "12rem", opacity: 1 }}
            animate={{ width: "12rem" }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="flex items-center justify-center rounded-full bg-purple-600 p-4"
                animate={{ rotate: 0 }}
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
            >
                {icon}
            </motion.div>
            <p className="text-lg font-semibold">{name}</p>
        </motion.div>
    );
};

const VacationDestinations = () => {
    return (
        <div>
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-16">
            <h1 className="text-3xl font-bold text-blue-800 mb-12">
                Vacation Destination
            </h1>
            <div className="flex space-x-8 overflow-x-auto">
                {destinations.map((destination, index) => (
                    <DestinationCard
                        key={index}
                        name={destination.name}
                        image={destination.image}
                        icon={destination.icon}
                    />
                ))}
            </div>
        </div>
        </div>
    );
};

export default VacationDestinations;