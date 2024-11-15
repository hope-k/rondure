import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { Montserrat } from 'next/font/google'
import { FlightProvider } from '@/context/FlightContext';


const emmanuelle = localFont({
  src: './fonts/Emmanuelle.ttf',
  variable: "--font-emmanuelle",
  weight: "100 400 500 900"
})

const montserrat = Montserrat({
  subsets: ["cyrillic"],
  variable: "--font-montserrat",
  weight: ['200', '400', '600', '700', '900']
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
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${emmanuelle.variable} ${montserrat.variable} antialiased `}
      >
        <Header />
        <FlightProvider>
          {children}
        </FlightProvider>
      </body>
    </html>
  );
}
