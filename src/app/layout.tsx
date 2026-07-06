import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope, Space_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingActions from "@/components/FloatingActions";
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

const siteUrl = "https://www.sutertai.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sutertai — Transform Your Business With AI-Powered Digital Solutions",
    template: "%s | Sutertai",
  },
  description:
    "Sutertai Private Limited is an AI-powered digital marketing and technology agency — websites, software, AI products, SEO, branding, mobile apps, and business automation for startups and enterprises.",
  keywords: [
    "Sutertai",
    "AI digital marketing agency",
    "website development",
    "software development company",
    "AI product development",
    "SEO agency India",
    "social media marketing",
    "business automation",
    "CRM development",
    "cloud solutions",
    "branding agency Prayagraj",
  ],
  authors: [{ name: "Sutertai Private Limited" }],
  creator: "Sutertai Private Limited",
  openGraph: {
    title: "Sutertai — Transform Your Business With AI-Powered Digital Solutions",
    description:
      "Websites, software, AI products, marketing, and automation — everything a growing business needs under one roof.",
    url: siteUrl,
    siteName: "Sutertai",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sutertai — Transform Your Business With AI-Powered Digital Solutions",
    description:
      "Websites, software, AI products, marketing, and automation — everything a growing business needs under one roof.",
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
  "@type": "ProfessionalService",
  name: "Sutertai Private Limited",
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  foundingDate: "2023",
  founder: {
    "@type": "Person",
    name: "Ramesh Sharma",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "174 Kasturba Gandhi Marg, Kachehri, near Hawaijahaj",
    addressLocality: "Prayagraj",
    addressRegion: "Uttar Pradesh",
    postalCode: "211002",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7459887412",
    contactType: "sales",
    email: "hello@sutertai.com",
  },
  areaServed: "Worldwide",
  makesOffer: [
    "AI Powered Digital Marketing",
    "Website Development",
    "Software Development",
    "AI Product Development",
    "Mobile App Development",
    "UI/UX Design",
    "Business Automation & CRM",
    "Cloud Solutions",
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
        <CursorGlow />
        <ScrollProgress />
        <div className="relative z-10 flex min-h-full flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <FloatingActions />
      </body>
    </html>
  );
}
