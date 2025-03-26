import { Inter } from "next/font/google";

import localFont from "next/font/local";

export const aeonik = localFont({
  src: [
    {
      path: "../fonts/Aeonik-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-aeonik",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-inter",
});
