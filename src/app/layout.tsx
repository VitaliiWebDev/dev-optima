import type { Metadata } from "next";

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
        <div className="overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
