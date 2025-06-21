"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Ballpit from "../Ballpit";
import { useTranslation } from "react-i18next";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Footer() {
  const { t } = useTranslation();

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
      className="w-full py-10 relative z-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={containerVariants}
    >
      <div className="absolute inset-0 h-full -z-10">
        <Ballpit
          className="w-full h-full"
          count={45}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Portfolio section */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 text-center"
            >
              <h3 className="text-xl font-medium text-black dark:text-white">
                {t("footer.portfolioTitle")}
              </h3>
              <p className="text-black dark:text-white text-sm leading-relaxed">
                {t("footer.portfolioDescription")}
              </p>
            </motion.div>

            {/* Contacto */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 text-center"
            >
              <h3 className="text-xl font-medium text-black dark:text-white">
                {t("footer.contact")}
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-black dark:text-white">
                  {t("footer.location")}
                </p>
                <div className="flex justify-center items-center gap-4 pt-2">
                  <TooltipProvider delayDuration={0}>
                    <div className="flex gap-4">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            className="h-10 w-10 p-0"
                            asChild
                          >
                            <Link
                              href="https://github.com/ABengelsdorff"
                              target="_blank"
                              aria-label="GitHub"
                            >
                              <Github className="h-5 w-5" />
                            </Link>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">GitHub</TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            className="h-10 w-10 p-0"
                            asChild
                          >
                            <Link
                              href="https://www.linkedin.com/in/angelica-bengelsdorff"
                              target="_blank"
                              aria-label="LinkedIn"
                            >
                              <Linkedin className="h-5 w-5" />
                            </Link>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">LinkedIn</TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            className="h-10 w-10 p-0"
                            asChild
                          >
                            <Link
                              href="mailto:Angelica.bengelsdorff.5@gmail.com"
                              target="_blank"
                              aria-label="Mail"
                            >
                              <Mail className="h-5 w-5" />
                            </Link>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">Email</TooltipContent>
                      </Tooltip>
                    </div>
                  </TooltipProvider>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={itemVariants}
            className="mt-4 pt-6 border-t border-white/10 text-center text-black dark:text-white text-base"
          >
            {t("footer.agradecimiento")}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
