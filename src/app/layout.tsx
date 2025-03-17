import type { Metadata } from "next";
import { Inter } from "next/font/google";

import localFont from "next/font/local";

const Aeonik = localFont({
  src: [
    {
      path: "./fonts/Aeonik-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-aeonik",
  display: "swap",
});

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Home - DevOptima",
  description: "DevOptima home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${Aeonik.variable} ${inter.variable}`}>
      <body>
        <div className="overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
