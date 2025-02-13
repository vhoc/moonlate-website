import { Lato, Playfair_Display } from "next/font/google";

export const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family-sans",
  weight: ["100", "300", "400", "700", "900"],
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family-serif",
});