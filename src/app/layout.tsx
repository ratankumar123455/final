import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope, Space_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingActions from "@/components/FloatingActions";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const displayGrotesque = Bricolage_Grotesque({
  variable: "--font-display-grotesque",
  subsets: ["latin"],
});

const siteUrl = "https://www.metabob.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Metabob — Generative AI for Text-to-Image and Image-to-Video",
    template: "%s | Metabob",
  },
  description:
    "Metabob Private Limited builds a generative AI platform that turns text prompts into images and images into video, running on NVIDIA GPU infrastructure across AWS — for creative teams, marketers, and studios.",
  keywords: [
    "Metabob",
    "text to image AI",
    "image to video AI",
    "generative AI platform",
    "AWS generative AI",
    "NVIDIA GPU AI",
    "AI video generation",
    "AI image generation",
    "diffusion models",
    "creative AI tools",
    "AI content generation India",
  ],
  authors: [{ name: "Metabob Private Limited" }],
  creator: "Metabob Private Limited",
  openGraph: {
    title: "Metabob — Generative AI for Text-to-Image and Image-to-Video",
    description:
      "Turn a prompt into an image, and an image into video — powered by NVIDIA GPUs on AWS infrastructure.",
    url: siteUrl,
    siteName: "Metabob",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metabob — Generative AI for Text-to-Image and Image-to-Video",
    description:
      "Turn a prompt into an image, and an image into video — powered by NVIDIA GPUs on AWS infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Metabob Private Limited",
  url: siteUrl,
  logo: `${siteUrl}/icon`,
  foundingDate: "2024",
  founder: {
    "@type": "Person",
    name: "Aarav Mehta",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "4th Floor, Prestige Tech Park, Kadubeesanahalli",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560103",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-91234-56789",
    contactType: "sales",
    email: "hello@metabob.in",
  },
  areaServed: "Worldwide",
  makesOffer: [
    "Text-to-Image Generation",
    "Image-to-Video Generation",
    "Generative AI API",
    "Enterprise AI Infrastructure",
  ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceMono.variable} ${displayGrotesque.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <div className="noise-layer" aria-hidden="true" />
        <SmoothScroll />
        <CursorGlow />
        <ScrollProgress />
        <div className="relative z-10 flex min-h-full flex-col">
          <Header />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </div>
        <FloatingActions />
      </body>
    </html>
  );
}
