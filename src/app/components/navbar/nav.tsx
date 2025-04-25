"use client";

import { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import { MoonIcon, SunIcon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import GooeyNav from "./GooeyNav";
import "./GooeyNav.css";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { t } = useTranslation();

  const navLinks = [
    { name: t("nav.home"), href: "#hero" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  //bloqueo de scrol cuando el menu esta abierto (movil)
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold gradient-text">
          Portafolio
        </Link>

        {/* Desktop Navigation con Gooey */}
        <div className="hidden md:flex items-center gap-6">
          <GooeyNav
            items={navLinks.map((link) => ({
              label: link.name,
              href: link.href,
            }))}
            animationTime={600}
            particleCount={15}
            minDistance={20}
            maxDistance={42}
            maxRotate={75}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            timeVariance={300}
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <Select
            onValueChange={(value) => i18n.changeLanguage(value)}
            defaultValue={i18n.language}
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Idioma" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="es">Español</SelectItem>
              <SelectItem value="pt">Português</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Select
            onValueChange={(value) => i18n.changeLanguage(value)}
            defaultValue={i18n.language}
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Idioma" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="es">Español</SelectItem>
              <SelectItem value="pt">Português</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: false }}
            // className="md:hidden bg-white dark:bg-gray-950 border-t dark:border-gray-800 "
            className="md:hidden bg-white/60 dark:bg-gray-950/60 backdrop-blur-md border-t dark:border-gray-800"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
