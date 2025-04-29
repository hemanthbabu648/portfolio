import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/fonts/fonts";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Portfolio | Hemanth Babu S",
  description:
    "Showcasing my journey in software development through a collection of innovative projects and collaborative contributions.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} px-2 md:px-8 lg:px-24 bg-com-primary text-white`}
      >
        <header>
          <nav className="relative">
            <Navbar />
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
