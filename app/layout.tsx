import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ONOV - Where Conversations Shape the Future",
  description: "Engage in debates, connect with communities, share ideas, and stay informed in real time with the most secure political social platform.",
  keywords: "political platform, social media, debates, communities, activism",
  authors: [{ name: "ONOV Inc" }],
  openGraph: {
    title: "ONOV - Where Conversations Shape the Future",
    description: "Engage in debates, connect with communities, share ideas, and stay informed in real time with the most secure political social platform.",
    type: "website",
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
        className={`${inter.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
