import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { Toaster } from "sonner";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  metadataBase: new URL('https://adityapoddar.site'),
  title: 'Aditya Poddar | Full Stack Developer',
  description: 'Portfolio of Aditya Poddar — Full Stack Developer building modern, responsive web applications and clean user experiences.',
  openGraph: {
    title: 'Aditya Poddar | Full Stack Developer',
    description: 'Portfolio of Aditya Poddar — Full Stack Developer building modern, responsive web applications and clean user experiences.',
    url: 'https://adityapoddar.site',
    siteName: 'Aditya Poddar Portfolio',
    images: [
      {
        url: '/web-img.png',
        width: 1200,
        height: 630,
        alt: 'Aditya Poddar - Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditya Poddar | Full Stack Developer',
    description: 'Portfolio of Aditya Poddar — Full Stack Developer building modern, responsive web applications and clean user experiences.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
