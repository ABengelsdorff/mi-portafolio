import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import "../lib/i18n"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.bengelsdorff.dev";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Angelica Bengelsdorff",
      alternateName: ["Angélica Bengelsdorff", "Bengelsdorff"],
      url: siteUrl,
      image: `${siteUrl}/vistaMiniatura.png`,
      jobTitle: "Desarrolladora Web Full Stack y diseñadora UX/UI",
      description:
        "Desarrolladora Full Stack y diseñadora UX/UI en Buenos Aires. Trabaja con React, Next.js, TypeScript y diseño de interfaces.",
      email: "mailto:Angelica.bengelsdorff.5@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Buenos Aires",
        addressCountry: "AR",
      },
      sameAs: [
        "https://github.com/ABengelsdorff",
        "https://www.linkedin.com/in/angelica-bengelsdorff",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "UX/UI",
        "Figma",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Angelica Bengelsdorff",
      inLanguage: "es-AR",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      name: "Angelica Bengelsdorff | Desarrolladora Full Stack",
      inLanguage: "es-AR",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      mainEntity: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Angelica Bengelsdorff | Desarrolladora Full Stack",
    template: "%s | Angelica Bengelsdorff",
  },
  description:
    "Portafolio de Angelica Bengelsdorff, desarrolladora Full Stack y diseñadora UX/UI en Buenos Aires. Proyectos con React, Next.js, TypeScript y diseño de interfaces.",
  keywords: [
    "Angelica Bengelsdorff",
    "Angélica Bengelsdorff",
    "Bengelsdorff",
    "desarrolladora full stack",
    "desarrolladora web Buenos Aires",
    "diseñadora UX UI",
    "portafolio",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Angelica Bengelsdorff", url: siteUrl }],
  creator: "Angelica Bengelsdorff",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Angelica Bengelsdorff | Desarrolladora Full Stack",
    description:
      "Portafolio de Angelica Bengelsdorff: desarrollo web Full Stack y diseño UX/UI. Proyectos en React, Next.js y TypeScript.",
    url: siteUrl,
    siteName: "Angelica Bengelsdorff",
    images: [
      {
        url: "/vistaMiniatura.png",
        width: 1200,
        height: 630,
        alt: "Portafolio de Angelica Bengelsdorff",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angelica Bengelsdorff | Desarrolladora Full Stack",
    description:
      "Portafolio de Angelica Bengelsdorff, desarrolladora Full Stack y diseñadora UX/UI.",
    images: ["/vistaMiniatura.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
