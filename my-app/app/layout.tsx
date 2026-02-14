import type { Metadata } from "next";
import { Montserrat, Urbanist } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller/page";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mufeez | Software Developer",
  description: "Software Developer portfolio of Mufeez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Add both variables to the HTML class list
    <html lang="en" className={`${montserrat.variable} ${urbanist.variable}`}>
      <body className="antialiased  ">
        <SmoothScroller>
          {children}
        </SmoothScroller>
      </body>
    </html>
  );
}