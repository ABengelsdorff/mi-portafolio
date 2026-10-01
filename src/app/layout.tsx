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

const projects = [
  {
    name: "Barber Shop",
    description:
      "Plataforma web para barberías con reservas de turnos online y panel de administración con métricas.",
    url: "https://demo.barberturnos.shop/",
    image: "/barberShop/HeroSeccion.png",
  },
  {
    name: "Gestión de Legajos RH",
    description:
      "Aplicación de escritorio offline con Electron para digitalizar la gestión de legajos del personal.",
    url: "",
    image: "/legajoRH/buscar.png",
  },
  {
    name: "Form Gallery",
    description:
      "Colección de formularios de login y registro modernos, responsivos y reutilizables.",
    url: "https://formgallery.vercel.app/",
    image: "/assets/formGallery/formGallery1.png",
  },
  {
    name: "Rediseño Goodreads",
    description:
      "Rediseño UX/UI mobile de Goodreads con investigación, wireframes y prototipo en Figma.",
    url: "",
    image: "/goodreads/1.jpeg",
  },
  {
    name: "RoomPreview",
    description:
      "Diseño UX/UI mobile de una app de decoración de interiores, con prototipo interactivo en Figma.",
    url: "",
    image: "/roomPreview/1111.jpeg",
  },
];

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
        "Desarrollo web Full Stack",
        "Desarrollo Frontend",
        "Diseño UX/UI",
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Tailwind CSS",
        "Docker",
        "Electron",
        "Figma",
      ],
      knowsLanguage: ["es", "pt"],
      hasOccupation: {
        "@type": "Occupation",
        name: "Desarrolladora Web Full Stack",
        occupationLocation: { "@type": "City", name: "Buenos Aires" },
      },
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
      primaryImageOfPage: `${siteUrl}/vistaMiniatura.png`,
      hasPart: { "@id": `${siteUrl}/#projects` },
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#projects`,
      name: "Proyectos de Angelica Bengelsdorff",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.name,
          description: project.description,
          ...(project.url && { url: project.url }),
          image: `${siteUrl}${project.image}`,
          creator: { "@id": `${siteUrl}/#person` },
        },
      })),
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
    "desarrolladora frontend Argentina",
    "desarrolladora React",
    "desarrolladora Next.js",
    "programadora Buenos Aires",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Angelica Bengelsdorff", url: siteUrl }],
  creator: "Angelica Bengelsdorff",
  publisher: "Angelica Bengelsdorff",
  category: "technology",
  icons: {
    icon: "/favicon.ico",
    apple: "/yo.jpg",
  },
  // Código de verificación de Google Search Console (variable de entorno en Dokploy)
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
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
        width: 1184,
        height: 659,
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
