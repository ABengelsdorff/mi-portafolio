"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import CircularGallery from "@/app/components/circularGallery";
import Folder from "./folder";
import Image from "next/image";

const projects = [
  {
    title: "Vets For Pets",
    description: "Una aplicación web moderna construida con React y Next.js.",
    images: ["/Home_1.png", "/maps.png", "/perfil.png"],
    tags: ["React", "Next.js", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "INNOVA",
    description:
      "Una plataforma de comercio electrónico con carrito de compras y pasarela de pago.",
    images: ["/innova.jpg", "/iniciosesion.jpg", "/productos.jpg"],
    tags: ["TypeScript", "React", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Vets For Pets",
    description: "Una aplicación web moderna construida con React y Next.js.",
    images: ["/Home_1.png", "/maps.png", "/perfil.png"],
    tags: ["React", "Next.js", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  const [imageIndexes, setImageIndexes] = useState(projects.map(() => 0));

  const handleNextImage = (i: number) => {
    setImageIndexes((prev) => {
      const updated = [...prev];
      updated[i] = (prev[i] + 1) % projects[i].images.length;
      return updated;
    });
  };

  const handlePrevImage = (i: number) => {
    setImageIndexes((prev) => {
      const updated = [...prev];
      updated[i] =
        (prev[i] - 1 + projects[i].images.length) % projects[i].images.length;
      return updated;
    });
  };

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div>
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mis Proyectos
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Aquí hay una selección de proyectos en los que he trabajado.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-96">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={project.images[imageIndexes[index]]}
                      src={project.images[imageIndexes[index]]}
                      alt={project.title}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                      className="w-full h-full object-cover absolute top-0 left-0"
                    />
                  </AnimatePresence>
                  <button
                    onClick={() => handlePrevImage(index)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/70 p-2 rounded-full z-10"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => handleNextImage(index)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/70 p-2 rounded-full z-10"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button asChild size="sm" variant="default">
                      <Link href={project.demoUrl} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" variant="outline">
              <Link href="https://github.com" target="_blank">
                <Github className="h-5 w-5 mr-2" />
                Ver más proyectos en GitHub
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* //! Circular Gallery */}

      <div style={{ height: '600px', position: 'relative' }} className="flex items-center justify-center  container ">
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05}  />
</div>








      {/* //! Folder */}

      <div className="h-[600px] flex items-center justify-center">
        <Folder
          size={3}
          color="#E1B1F7"
          className="drop-shadow-lg"
          items={[
            <Image
              key="uno"
              src="/Home_1.png"
              alt="Vets for Pets"
              fill
              className="w-full h-full object-cover rounded-md cursor-pointer"
              onClick={() => setSelectedImage("/Home_1.png")}
            />,

            <Image
              key="dos"
              src="/innova.jpg"
              alt="INNOVA"
              fill
              className="w-full h-full object-cover rounded-md cursor-pointer"
              onClick={() => setSelectedImage("/innova.jpg")}
            />,
            <Image
              key="cuatro"
              src="/productos.jpg"
              alt="Productos"
              fill
              className="w-full h-full object-cover rounded-md cursor-pointer"
              onClick={() => setSelectedImage("/productos.jpg")}
            />,
            <Image
              key="tres"
              src="/productos.jpg"
              alt="Productos"
              fill
              className="w-full h-full object-cover rounded-md cursor-pointer"
              onClick={() => setSelectedImage("/productos.jpg")}
            />,
          ]}
        />
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999]"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-[90vw] h-[80vh]">
              <Image
                src={selectedImage}
                alt="Vista ampliada"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
