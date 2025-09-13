import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Breath of Thunder - Demon Slayer Hashira Landing Page",
  description: "Experience the power of Zenitsu and the Nine Hashira in this beautiful pastel-themed Demon Slayer landing page",
  keywords: "Demon Slayer, Hashira, Zenitsu, Thunder Breathing, Anime, Pastel Design, Next.js",
  authors: [{ name: "Demon Slayer Corps" }],
  openGraph: {
    title: "Breath of Thunder - Demon Slayer Hashira",
    description: "Experience the power of Zenitsu and the Nine Hashira",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
