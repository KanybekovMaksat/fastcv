import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import { Inter } from "next/font/google";



export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"], // если нужны разные начертания
});