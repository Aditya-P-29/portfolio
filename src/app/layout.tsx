import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});


export const metadata: Metadata = {
  title: "Aditya Poddar | Full Stack Developer.",
  description: "Full Stack Developer specializing in modern web technologies.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.className}`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        </body>
    </html>
  );
}
