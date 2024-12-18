import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { Montserrat } from 'next/font/google'
import { FlightProvider } from '@/context/FlightContext';
import Footer from "@/components/Footer";
import Providers from "./providers";
import ProfileCompletion from "@/components/ProfileCompletion";
import toast, { Toaster } from 'react-hot-toast';
import VerifyEmail from "@/components/Auth/VerifyEmail";


const emmanuelle = localFont({
  src: './fonts/Emmanuelle.ttf',
  variable: "--font-emmanuelle",
  weight: "100 400 500 900"
})

const montserrat = Montserrat({
  subsets: ["cyrillic"],
  variable: "--font-montserrat",
  weight: ['200', '400', '500', '600', '700', '900']
})


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Rondure Connect",
  description: "Affordable flights and hotels worldwide for your trip.",
  keywords: "flights, hotels, travel, booking, affordable, worldwide",
  author: "Rondure Team",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-[#F1F1F1] ${geistSans.variable} ${geistMono.variable} ${emmanuelle.variable} ${montserrat.variable} antialiased `}
        >
        <Toaster/>
        <Providers>
        

          <div className="z-[1000] relative">
            <ProfileCompletion />
          </div>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
