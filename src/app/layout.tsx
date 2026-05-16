import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ponimo Kids Wear | Premium Luxury Children's Fashion",
  description: "Discover modern, elegant, and playful fashion for kids at Ponimo Kids Wear. High-end luxury clothing for the little ones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} antialiased`}
    >
      <body className="font-outfit bg-[#FAF9F6]">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

