import IATA from '/public/rondure-assets/footer/it.svg'
import Amadeus from '/public/rondure-assets/footer/amadeus.svg'
import Instagram from '/public/rondure-assets/footer/socials/ig.svg'
import Facebook from '/public/rondure-assets/footer/socials/fb.svg'
import Behance from '/public/rondure-assets/footer/socials/behance.svg'
import Fourth from '/public/rondure-assets/footer/socials/4.svg'

export default function Footer() {
    return (
        <footer className="bg-white py-[10rem] px-4   mt-[10rem]">
            <div className="max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 ">
                {/* Logo and Text */}
                <div className="space-y-4 mb-16 lg:mb-0 col-span-2 lg:text-start md:text-left max-w-[100ch]">
                    <div className="flex items-center pb-4 space-x-4">
                        <div className="w-fit h-fit  ">
                            {/* Placeholder for IATA logo */}
                            <IATA />
                        </div>
                        <div className="w-fit h-fit ">
                            {/* Placeholder for Amadeus logo */}
                            <Amadeus />
                        </div>
                    </div>
                    <p className="text-[1.6rem] font-[400] text-[#1D1D1D] ">
                        Travel management can be a time-consuming and costly endeavour. A
                        good travel management solution must therefore offer end-to-end
                        service to the client, while combining exceptional service which
                        saves time, with real value for money.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Navigation Links */}
                    <div className="text-ron_text md:text-left">
                        <h4 className="font-semibold text-[2.1rem] mb-4">Home</h4>
                        <ul className="space-y-2 text-[1.6rem] text-gray-600">
                            <li>Visa Assistance</li>
                            <li>Business Travels</li>
                            <li>Car Rentals</li>
                            <li>Vacation</li>
                        </ul>
                    </div>

                    {/* Contact Links */}
                    <div className="text-[1.6rem] text-ron_text md:text-left">
                        <h4 className="font-semibold text-[2.1rem] mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-[1.6rem] text-gray-600">
                            <li>Help Center</li>
                            <li>Testimony</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="flex flex-col text-start text-[1.6rem] text-ron_text">
                        <span className='text-[2.1rem] font-semibold mb-4'>Follow Us</span>
                        <div className='flex flex-row justify-start items-start space-x-3'>
                            <div className="p-2 h-fit w-fit bg-[#1D1D1D] rounded-[5px] flex items-center justify-center">
                                {/* Placeholder for Instagram icon */}
                                <Instagram />
                            </div>
                            <div className="p-2 h-fit w-fit bg-[#1D1D1D] rounded-[5px] flex items-center justify-center">
                                {/* Placeholder for Dribbble icon */}
                                <Behance />
                            </div>
                            <div className="p-2 h-fit w-fit bg-[#1D1D1D] rounded-[5px] flex items-center justify-center">
                                {/* Placeholder for Facebook icon */}
                                <Facebook />
                            </div>
                            <div className="p-2 h-fit w-fit bg-[#1D1D1D] rounded-[5px] flex items-center justify-center">
                                {/* Placeholder for Behance icon */}
                                <Fourth />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}