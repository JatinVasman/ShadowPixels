import type { Metadata } from "next";
import { Orbitron, Sora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppButton from "@/components/WhatsAppButton";
import InstagramButton from "@/components/InstagramButton";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shadowpixels.studio"),
  title: "ShadowPixels Studio | Visuals That Leave A Mark",
  description:
    "ShadowPixels Studio is a premium creative media agency specializing in Graphic Design, Video Editing, Motion Graphics, Social Media Management, and Cinematic VFX. We help businesses, brands, and creators transform bold ideas into unforgettable visual experiences.",
  keywords: [
    "creative media agency",
    "visual experiences Noida",
    "motion graphics Noida",
    "cinematic VFX Delhi",
    "video editing agency India",
    "graphic design studio Delhi NCR",
    "social media management company",
    "Rishabh Srivastava Noida"
  ],
  authors: [{ name: "Rishabh Srivastava" }],
  creator: "Rishabh Srivastava",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shadowpixels.studio",
    title: "ShadowPixels Studio | Visuals That Leave A Mark",
    description:
      "ShadowPixels Studio is a premium creative media agency specializing in Graphic Design, Video Editing, Motion Graphics, Social Media Management, and Cinematic VFX.",
    siteName: "ShadowPixels Studio",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "ShadowPixels Studio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShadowPixels Studio | Visuals That Leave A Mark",
    description:
      "ShadowPixels Studio is a premium creative media agency specializing in Graphic Design, Video Editing, Motion Graphics, Social Media Management, and Cinematic VFX.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${sora.variable} h-full antialiased`}
    >
      <head>
        {/* Organization / LocalBusiness JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "ShadowPixels Studio",
              "url": "https://shadowpixels.studio",
              "logo": "https://shadowpixels.studio/logo.png",
              "image": "https://shadowpixels.studio/logo.png",
              "description": "ShadowPixels Studio is a premium creative media agency specializing in Graphic Design, Video Editing, Motion Graphics, Social Media Management, and Cinematic VFX.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Noida",
                "addressRegion": "Delhi NCR",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8423653305",
                "contactType": "customer service",
                "email": "shadowpixels.studio@gmail.com"
              },
              "sameAs": [
                "https://instagram.com/shadowpixels.studio",
                "https://wa.me/918423653305"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-obsidian text-silver">
        <Navbar />
        <MouseFollower />
        {children}
        <InstagramButton />
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
