import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import { Analytics } from "@vercel/analytics/next";
import { Databuddy } from "@databuddy/sdk";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anoob Suresh",
  description: "Anoob Suresh's Portfolio - Frontend Developer & UI/UX Designer",
  keywords: [
    "Frontend Developer",
    "UI/UX Designer",
    "Next.js Portfolio",
    "React Developer",
    "Tailwind CSS",
    "Anoob Suresh",
  ],
  openGraph: {
    title: "Anoob Suresh's Portfolio",
    description: "Anoob Suresh's Portfolio - Frontend Developer & UI/UX Designer",
    url: "https://anoobsuresh0.github.io",
    siteName: "Anoob Suresh's Portfolio",
    images: [
      {
        url: "https://anoobsuresh0.github.io/opengraphh.jpg",
        width: 1200,
        height: 630,
        alt: "Anoob Suresh Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anoob Suresh's Portfolio",
    description: "Frontend Developer & UI/UX Designer",
    images: ["https://anoobsuresh0.github.io/opengraphh.jpg"],
    creator: "@anoobsuresh0",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
    
        <link rel="canonical" href="https://anoobsuresh0.github.io" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Anoob Suresh",
              url: "https://anoobsuresh0.github.io",
              sameAs: [
                "https://github.com/anoobsuresh0",
                "https://linkedin.com/in/anoob-suresh-5a48971b5",
              ],
              jobTitle: "Frontend Developer & UI/UX Designer",
              image: "https://anoobsuresh0.github.io/opengraphh.jpg",
            }),
          }}
        />
      </head>

      <link rel="icon" href="/dev-avatar.ico" />

      <body
        className={` ${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}

        <Analytics />

        <Databuddy
          clientId={process.env.NEXT_PUBLIC_DATABUDDY_CLIENT_ID as string}
          trackHashChanges={true}
          trackAttributes={true}
          trackInteractions={true}
          trackEngagement={true}
          trackScrollDepth={true}
          trackExitIntent={true}
          trackBounceRate={true}
          trackWebVitals={true}
          trackErrors={true}
          enableBatching={true}
        />

        <CustomCursor />
      </body>
    </html>
  );
}
