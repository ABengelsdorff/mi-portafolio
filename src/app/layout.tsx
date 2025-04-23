import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Angelica Bengelsdorff | Desarrolladora Full Stack",
  description:
    "Soy Angelica Bengelsdorff, desarrolladora Full Stack enfocada en crear experiencias web modernas, atractivas y funcionales. Este es mi portafolio personal.",
  keywords: [
    "Angelica Bengelsdorff",
    "portafolio",
    "desarrolladora web",
    "full stack developer",
    "React",
    "Next.js",
    "Frontend",
    "Backend",
  ],
  authors: [{ name: "Angelica Bengelsdorff" }],
  creator: "Angelica Bengelsdorff",
  icons: {
    icon: "/favicon.ico", 
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
