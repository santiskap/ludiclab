import type { Metadata } from 'next';
import { Montserrat, Poppins } from 'next/font/google';

import './globals.css';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '700'],
  variable: '--font-montserrat', 
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ludiclab',
  description: 'Transformando realidades a través de la actitud lúdica',
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable, poppins.variable} bg-white antialiased scroll-smooth`}>
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <Hero />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}