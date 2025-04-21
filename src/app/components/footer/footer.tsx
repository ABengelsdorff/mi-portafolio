"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import Ballpit from "../Ballpit";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.footer
      className="w-full py-8 relative z-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="absolute inset-0 h-full -z-10">
        <Ballpit
          className="w-full h-full"
          count={50}
          gravity={0.5}
          friction={0.9}
          wallBounce={0.9}
          followCursor={true}
          colors={[0x00ffff, 0xffffff, 0x87cefa, 0xa855f7, 0xcccccc]}
        />
      </div>

      {/* Glassmorphism container */}
      <div className="container mx-auto max-w-6xl px-4">
        <div className="backdrop-blur-3xl dark:backdrop-blur-3xl bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Portfolio section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-medium text-black dark:text-white">
                Portafolio
              </h3>
              <p className="text-black dark:text-white text-sm leading-relaxed">
                Desarrolladora web especializado en crear experiencias digitales
                atractivas y funcionales.
              </p>
              <div className="flex space-x-4 pt-2">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-black dark:text-white transition-colors"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-black dark:text-white"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-black dark:text-white"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </motion.div>

            {/* Enlaces rápidos */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-medium text-black dark:text-white">
                Enlaces rápidos
              </h3>
              <nav className="flex flex-col space-y-2">
                {[
                  "Inicio",
                  "Sobre mí",
                  "Habilidades",
                  "Proyectos",
                  "Contacto",
                ].map((item) => (
                  <motion.div key={item} whileHover={{ x: 5 }}>
                    <Link
                      href="#"
                      className="text-black dark:text-white text-sm flex items-center gap-1 transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span>{item}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>

            {/* Contacto */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-medium text-black dark:text-white">
                Contacto
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-black dark:text-white">
                  Buenos Aires, Argentina
                </p>
                <p className="text-black dark:text-white">+54 3751 608480</p>
                <p className="text-black dark:text-white break-all">
                  Angelica.bengelsdorff.5@gmail.com
                </p>
              </div>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            variants={itemVariants}
            className="mt-8 pt-6 border-t border-white/10 text-center text-black dark:text-white text-base"
          >
            © {currentYear} Bengelsdorff Angélica. Todos los derechos
            reservados.
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
