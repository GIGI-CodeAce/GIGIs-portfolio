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
  title: "Portfolio",
  description: "My portfolio website. You can find there anything related to my programming experience. By Dobre Robert.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

    <link rel="icon" href="https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/refs/heads/main/AppImages/others/mainWebNew.svg" type="image/x-icon" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="My portfolio website. You can find there anything related to my programming experience. By Dobre Robert." />
  
    {/* <!-- Google Fonts - Material Symbols --> */}
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
  
    {/* <!-- Open Graph Meta Tags --> */}
    <meta property="og:title" content="GIGI's Portfolio" />
    <meta property="og:description" content="My portfolio website. You can find there anything related to my programming experience. By Dobre Robert." />
    <meta property="og:image" content="https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/refs/heads/main/AppImages/others/mainWebNew.svg" />
    <meta property="og:url" content="https://github.com/GIGI-CodeAce" />
  
    {/* <!-- Twitter Meta Tags --> */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="My Portfolio" />
    <meta name="twitter:description" content="My portfolio website. You can find there anything related to my programming experience. By Dobre Robert." />
    <meta name="twitter:image" content="https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/refs/heads/main/AppImages/others/mainWebNew.svg" />
    <meta name="twitter:url" content="https://github.com/GIGI-CodeAce" />
  
    {/* <!-- Canonical Link --> */}
    <link rel="canonical" href="https://github.com/GIGI-CodeAce" />
  
    <title>Portfolio</title>

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
