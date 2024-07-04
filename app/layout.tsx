import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "./context/NextAuthProvider";
import Navbar from "@/components/layout/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Memories",
  description:
    "Create, play, and share your own personal themed memory board game. Browse the diverse themes by all the creators.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NextAuthProvider>
          <main className='w-full h-screen flex flex-col'>
            <div className=''>
              <div className='py-3 sm:px-20'>
                <Navbar />
              </div>
              <div>{children}</div>
              <div>Footer</div>
            </div>
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
