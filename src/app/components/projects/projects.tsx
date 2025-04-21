"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button"; 
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Vets For Pets",
    description: "Una aplicación web moderna construida con React y Next.js.",
    images: ["/Home_1.png", "/maps.png", "/perfil.png"],
    tags: ["React", "Next.js", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "INNOVA",
    description:
      "Una plataforma de comercio electrónico con carrito de compras y pasarela de pago.",
    images: ["/innova.jpg", "/iniciosesion.jpg", "/productos.jpg"],
    tags: ["TypeScript", "React", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Vets For Pets Mobile",
    description:
      "Versión móvil de la aplicación Vets For Pets con React Native.",
    images: ["/Home_1.png", "/maps.png", "/perfil.png"],
    tags: ["React Native", "Expo", "Firebase"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const openProjectModal = (index: number) => {
    setSelectedProject(index);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="container py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text">
            Mis Proyectos
          </h2>
          <p className=" max-w-2xl mx-auto text-lg">
            Explora mi trabajo y descubre las soluciones que he creado para
            diversos desafíos.
          </p>
        </motion.div>

        <div
          ref={containerRef}
          className="relative grid grid-cols-1 md:grid-cols-12 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "group overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-purple-600/30",
                project.featured
                  ? "md:col-span-8 md:row-span-2"
                  : "md:col-span-4"
              )}
            >
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/20 to-transparent z-10 opacity-60 
                group-hover:opacity-80 transition-opacity duration-300"
              />

              <div className=" overflow-hidden">
                <Image
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-100   group-hover:blur-md transition-all duration-700 ease-out"
                />
              </div>

              <div className="relative z-20 h-full flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="default"
                      className=" border-0 mt-28"
                      onClick={() => openProjectModal(index)}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver detalles
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Button asChild size="lg">
            <Link href="https://github.com" target="_blank">
              <Github className="h-5 w-5 mr-2" />
              Ver más proyectos en GitHub
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Modal para ver detalles del proyecto */}
      <AnimatePresence>
        {isModalOpen && selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-card text-card-foreground border border-border rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={projects[selectedProject].images[currentImageIndex]}
                      alt={`${projects[selectedProject].title} - Imagen ${
                        currentImageIndex + 1
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Flechas de navegación */}
                  {projects[selectedProject].images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(
                            (prev) =>
                              (prev -
                                1 +
                                projects[selectedProject].images.length) %
                              projects[selectedProject].images.length
                          );
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                        aria-label="Imagen anterior"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(
                            (prev) =>
                              (prev + 1) %
                              projects[selectedProject].images.length
                          );
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                        aria-label="Siguiente imagen"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}

                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    aria-label="Cerrar"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    {projects[selectedProject].title}
                  </h3>

                  <p className=" mb-6">
                    {projects[selectedProject].description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[selectedProject].tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Button asChild className="">
                      <Link
                        href={projects[selectedProject].demoUrl}
                        target="_blank"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver demo
                      </Link>
                    </Button>

                    <Button asChild variant="outline">
                      <Link
                        href={projects[selectedProject].githubUrl}
                        target="_blank"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Ver código
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
