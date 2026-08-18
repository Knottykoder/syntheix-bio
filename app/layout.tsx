import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hemant Kumar — Frontend Engineer | Cinematic Portfolio",
  description: "Resume ne nahi bataya. Website bata degi. — Premium Developer Portfolio × Bollywood Movie Title Card",
  keywords: [
    "Hemant Kumar",
    "Frontend Engineer",
    "React.js Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Portfolio",
    "Resume ne nahi bataya. Website bata degi.",
    "Techahead",
    "Declone Labs",
    "Loopnix"
  ],
  authors: [{ name: "Hemant Kumar" }],
  openGraph: {
    title: "Hemant Kumar — Frontend Engineer Portfolio",
    description: "Resume ne nahi bataya. Website bata degi.",
    type: "website",
    locale: "en_US",
    siteName: "Hemant Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hemant Kumar — Frontend Engineer Portfolio",
    description: "Resume ne nahi bataya. Website bata degi.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#08090B] text-[#F5F1E8] font-sans antialiased selection:bg-[#D6A84F] selection:text-black">
        {/* Film grain noise overlay */}
        <div className="film-grain" />
        
        {/* Main Content */}
        {children}
      </body>
    </html>
  );
}
