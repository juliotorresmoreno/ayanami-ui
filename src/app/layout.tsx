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
  title: "Petra AI - Transforming Data into Knowledge",
  description: "Petra AI leverages vector databases and artificial intelligence to optimize data analysis and retrieval.",
  keywords: ["AI", "Vector Databases", "Machine Learning", "Data Science", "Petra AI"],
  authors: [{ name: "Petra AI Team", url: "https://petra.ai" }],
  openGraph: {
    title: "Petra AI - Transforming Data into Knowledge",
    description: "Discover how Petra AI optimizes data search and analysis using vector databases and artificial intelligence.",
    url: "https://petra.ai",
    siteName: "Petra AI",
    images: [
      {
        url: "/public/og-image.png",
        width: 1200,
        height: 630,
        alt: "Petra AI Landing Page",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@PetraAI",
    title: "Petra AI - Transforming Data into Knowledge",
    description: "AI-driven solutions using vector databases for optimized search and analysis.",
    images: ["/public/twitter-image.png"], // Replace with actual Twitter image
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
