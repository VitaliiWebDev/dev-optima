import type { Metadata } from "next";

import Header from "@/components/pages/home/header";
import Footer from "@/components/pages/home/footer/footer";

import { aeonik, inter } from "./fonts";

import "./globals.css";

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
    <html lang="en" className={`${aeonik.variable} ${inter.variable}`}>
      <body>
        <div className="overflow-hidden relative flex min-h-screen flex-col">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
