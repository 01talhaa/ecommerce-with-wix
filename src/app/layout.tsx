import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Head from 'next/head'; // Import Head
import { WixClientContextProvider } from "@/context/wixContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hilorang",
  description: "Official Website of Hilorang.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
  <link rel="icon" href="/favicon.ico" />
</Head>
      <html lang="en">
        <body className={inter.className}>
          <WixClientContextProvider>
          <Navbar/>
          {children}
          <Footer/>
          </WixClientContextProvider>
        </body>
      </html>
    </>
  );
}