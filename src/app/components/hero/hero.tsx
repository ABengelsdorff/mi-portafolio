"use client";

import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import AnimatedText from "../ui/animated-text";
import SplashCursor from "./splashCursor";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { Canvas, extend } from "@react-three/fiber";
import { useGLTF, useTexture, Environment, Lightformer } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import Band from "./band";
import Image from "next/image";
import { useTranslation } from "react-i18next";

extend({ MeshLineGeometry, MeshLineMaterial });
useGLTF.preload("/assets/3d/card.glb");
useTexture.preload("/assets/images/tag_texture.png");

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="min-h-screen pt-20 flex items-center relative overflow-hidden"
    >
      <SplashCursor />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center z-10">
        {/* IMAGEN DE PERFIL - SOLO EN MOBILE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center md:hidden"
          viewport={{ once: false }}
        >
          <div className="relative w-60 h-60 sm:w-60 sm:h-60">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary to-purple-400 rounded-full opacity-70 blur-2xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              viewport={{ once: false }}
            />
            <motion.div
              className="relative w-full h-full bg-white dark:bg-gray-900 rounded-full overflow-hidden border-2 border-primary/20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              viewport={{ once: false }}
            >
              <Image
                src="/yo.jpg"
                alt="Tu foto de perfil"
                fill
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* TEXTO - IZQUIERDA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
          viewport={{ once: false }}
        >
          <p className="text-primary font-medium text-xl mb-2">
            {t("hero.intro")}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <AnimatedText text="Angelica Bengelsdorff" />
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 gradient-text">
            {t("hero.role")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            {t("hero.description")}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="p-4">
              <Link href="#projects">{t("hero.viewProjects")}</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="p-4">
              <Link href="#contact">{t("hero.contactMe")}</Link>
            </Button>
            <Button asChild size="lg" className="p-4">
              <Link
                href="./CV_FullStack_Angelica_Bengelsdorff.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("hero.viewCv")}
              </Link>
            </Button>
          </div>

          <TooltipProvider delayDuration={0}>
            <div className="flex gap-4 mt-8">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" className="h-10 w-10 p-0" asChild>
                    <Link
                      href="https://github.com/ABengelsdorff"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <Github className="h-6 w-6"/>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">GitHub</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" className="h-10 w-10 p-0" asChild>
                    <Link
                      href="https://www.linkedin.com/in/angelica-bengelsdorff"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-6 w-6" />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">LinkedIn</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" className="h-10 w-10 p-0" asChild>
                    <Link
                      href="mailto:Angelica.bengelsdorff.5@gmail.com"
                      target="_blank"
                      aria-label="Mail"
                    >
                      <Mail className="h-6 w-6" />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Email</TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </motion.div>

        {/* TARJETA 3D - Escritorio */}
        <div className="absolute top-0 right-0 w-full h-screen md:flex hidden justify-end items-start z-[-1] pointer-events-none">
          <Canvas
            camera={{ position: [0, 0, 13], fov: 25 }}
            style={{ backgroundColor: "transparent", pointerEvents: "auto" }}
          >
            <ambientLight intensity={Math.PI} />
            <Physics
              debug={false}
              interpolate
              gravity={[0, -40, 0]}
              timeStep={1 / 60}
            >
              <Band />
            </Physics>
            <Environment background={false} blur={0.75}>
              <Lightformer
                intensity={2}
                color="white"
                position={[0, -1, 5]}
                rotation={[0, 0, Math.PI / 3]}
                scale={[100, 0.1, 1]}
              />
              <Lightformer
                intensity={3}
                color="white"
                position={[-1, -1, 1]}
                rotation={[0, 0, Math.PI / 3]}
                scale={[100, 0.1, 1]}
              />
              <Lightformer
                intensity={3}
                color="white"
                position={[1, 1, 1]}
                rotation={[0, 0, Math.PI / 3]}
                scale={[100, 0.1, 1]}
              />
              <Lightformer
                intensity={10}
                color="white"
                position={[-10, 0, 14]}
                rotation={[0, Math.PI / 2, Math.PI / 3]}
                scale={[100, 10, 1]}
              />
            </Environment>
          </Canvas>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        viewport={{ once: false }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <Button variant="ghost" size="icon" asChild></Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
