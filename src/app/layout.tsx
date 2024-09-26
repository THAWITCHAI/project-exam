import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

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

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full h-[5rem] shadow-lg flex justify-center items-center p-2">
          <div className=" w-1/4 h-full flex justify-around items-center">
            <Link href={'/'}> <div className="hover:ring-1 hover:ring-blue-500 transition-all ease-in-out w-[10rem] h-[3rem] flex justify-center items-center">กรอกข้อมูล</div> </Link>
            <Link href={'/show-data'}> <div className="hover:ring-1 hover:ring-blue-500 transition-all ease-in-out w-[10rem] h-[3rem] flex justify-center items-center">แสดงข้อมูล</div> </Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
