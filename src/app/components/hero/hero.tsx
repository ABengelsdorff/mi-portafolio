"use client";

import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Phone } from "lucide-react";
import Link from "next/link";
import AnimatedText from "../ui/animated-text";
import SplashCursor from "./splashCursor";

import { Canvas, extend } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Environment,
  Lightformer,
} from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import Band from "./band";

extend({ MeshLineGeometry, MeshLineMaterial });
useGLTF.preload("/assets/3d/card.glb");
useTexture.preload("/assets/images/tag_texture.png");

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-20 flex items-center relative overflow-hidden"
    >
      <SplashCursor />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center z-10">
        {/* TEXTO - IZQUIERDA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <p className="text-primary font-medium text-xl mb-2">¡Hola! 👋 Soy</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <AnimatedText text="Angelica Bengelsdorff" />
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 gradient-text">
            Desarrolladora Web Full Stack
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            Creo experiencias web atractivas y funcionales con React, TypeScript
            y las últimas tecnologías web.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="#projects">Ver proyectos</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Contáctame</Link>
            </Button>
          </div>

          <div className="flex gap-4 mt-8">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/ABengelsdorff"
                target="_blank"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/angelica-bengelsdorff"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="tel:+543751608480"
                target="_blank"
                aria-label="Teléfono"
              >
                <Phone className="h-5 w-5" />
              </Link>
            </Button>
          </div>
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
