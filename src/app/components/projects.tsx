"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-white"
    >
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
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
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
                "group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50",
                project.featured
                  ? "md:col-span-8 md:row-span-2"
                  : "md:col-span-4"
              )}
            >
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 opacity-60 
                group-hover:opacity-80 transition-opacity duration-300"
              />

              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-100 
                  transition-transform duration-700 ease-out"
                />
              </div>

              <div className="relative z-20 h-full flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>

                  <div className="flex gap-3">


                    <Button
                      size="sm"
                      variant="default"
                      className="text-white border-0"
                      onClick={() => openProjectModal(index)}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver detalles
                    </Button>



                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="text-white"
                    >
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </Link>
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
          <Button
            asChild
            size="lg"
            // className="bg-gradient-to-r  from-purple-500 to-blue-500 shadow-lg shadow-purple-500/20 hover:shadow-xl transition-all text-white border-0"
          >
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
              className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-auto"
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

                  {/* Controles de navegación de imágenes */}
                  {projects[selectedProject].images.length > 1 && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {projects[selectedProject].images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(idx);
                          }}
                          className={`w-2.5 h-2.5 rounded-full ${
                            currentImageIndex === idx
                              ? "bg-white"
                              : "bg-white/40"
                          }`}
                          aria-label={`Ver imagen ${idx + 1}`}
                        />
                      ))}
                    </div>
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
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                    {projects[selectedProject].title}
                  </h3>

                  <p className="text-slate-300 mb-6">
                    {projects[selectedProject].description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Button
                      asChild
                      className="bg-emerald-600 hover:bg-emerald-700 text-white"
                    >
                      <Link
                        href={projects[selectedProject].demoUrl}
                        target="_blank"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver demo
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="border-slate-600 text-white hover:bg-slate-700"
                    >
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

// "use client";

// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Button } from "@/app/components/ui/button";
// import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
// import Link from "next/link";
// // import CircularGallery from "@/app/components/circularGallery";
// import Folder from "./folder";
// import Image from "next/image";

// const projects = [
//   {
//     title: "Vets For Pets",
//     description: "Una aplicación web moderna construida con React y Next.js.",
//     images: ["/Home_1.png", "/maps.png", "/perfil.png"],
//     tags: ["React", "Next.js", "Tailwind CSS"],
//     demoUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     title: "INNOVA",
//     description:
//       "Una plataforma de comercio electrónico con carrito de compras y pasarela de pago.",
//     images: ["/innova.jpg", "/iniciosesion.jpg", "/productos.jpg"],
//     tags: ["TypeScript", "React", "Node.js"],
//     demoUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     title: "Vets For Pets",
//     description: "Una aplicación web moderna construida con React y Next.js.",
//     images: ["/Home_1.png", "/maps.png", "/perfil.png"],
//     tags: ["React", "Next.js", "Tailwind CSS"],
//     demoUrl: "#",
//     githubUrl: "#",
//   },
// ];

// export default function Projects() {
//   const [imageIndexes, setImageIndexes] = useState(projects.map(() => 0));

//   const handleNextImage = (i: number) => {
//     setImageIndexes((prev) => {
//       const updated = [...prev];
//       updated[i] = (prev[i] + 1) % projects[i].images.length;
//       return updated;
//     });
//   };

//   const handlePrevImage = (i: number) => {
//     setImageIndexes((prev) => {
//       const updated = [...prev];
//       updated[i] =
//         (prev[i] - 1 + projects[i].images.length) % projects[i].images.length;
//       return updated;
//     });
//   };

//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   return (
//     <div>
//       <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 ">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Mis Proyectos
//             </h2>
//             <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
//             <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
//               Aquí hay una selección de proyectos en los que he trabajado.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {projects.map((project, index) => (
//               <div
//                 key={index}
//                 className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
//               >
//                 <div className="relative h-96">
//                   <AnimatePresence mode="wait">
//                     <motion.img
//                       key={project.images[imageIndexes[index]]}
//                       src={project.images[imageIndexes[index]]}
//                       alt={project.title}
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       transition={{ duration: 0.1 }}
//                       className="w-full h-full object-cover absolute top-0 left-0"
//                     />
//                   </AnimatePresence>
//                   <button
//                     onClick={() => handlePrevImage(index)}
//                     className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/70 p-2 rounded-full z-10"
//                   >
//                     <ChevronLeft className="w-6 h-6" />
//                   </button>
//                   <button
//                     onClick={() => handleNextImage(index)}
//                     className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/70 p-2 rounded-full z-10"
//                   >
//                     <ChevronRight className="w-6 h-6" />
//                   </button>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
//                   <p className="text-gray-600 dark:text-gray-300 mb-4">
//                     {project.description}
//                   </p>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tags.map((tag, i) => (
//                       <span
//                         key={i}
//                         className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex gap-4">

//                     <Button asChild size="sm" variant="default">
//                       <Link href={project.demoUrl} target="_blank">
//                         <ExternalLink className="h-4 w-4 mr-2" />
//                         Demo
//                       </Link>
//                     </Button>

//                     <Button asChild size="sm" variant="outline">
//                       <Link href={project.githubUrl} target="_blank">
//                         <Github className="h-4 w-4 mr-2" />
//                         Código
//                       </Link>
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="text-center mt-12"
//           >
//             <Button asChild size="lg" variant="outline">
//               <Link href="https://github.com" target="_blank">
//                 <Github className="h-5 w-5 mr-2" />
//                 Ver más proyectos en GitHub
//               </Link>
//             </Button>
//           </motion.div>
//         </div>
//       </section>

//       {/* //! Circular Gallery */}
// {/*
//       <div style={{ height: '600px', position: 'relative' }} className="flex items-center justify-center  container ">
//   <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05}  />
// </div> */}

//       {/* //! Folder */}

//       <div className="h-[600px] flex items-center justify-center">
//         <Folder
//           size={3}
//           color="#E1B1F7"
//           className="drop-shadow-lg"
//           items={[
//             <Image
//               key="uno"
//               src="/Home_1.png"
//               alt="Vets for Pets"
//               fill
//               className="w-full h-full object-cover rounded-md cursor-pointer"
//               onClick={() => setSelectedImage("/Home_1.png")}
//             />,

//             <Image
//               key="dos"
//               src="/innova.jpg"
//               alt="INNOVA"
//               fill
//               className="w-full h-full object-cover rounded-md cursor-pointer"
//               onClick={() => setSelectedImage("/innova.jpg")}
//             />,
//             <Image
//               key="cuatro"
//               src="/productos.jpg"
//               alt="Productos"
//               fill
//               className="w-full h-full object-cover rounded-md cursor-pointer"
//               onClick={() => setSelectedImage("/productos.jpg")}
//             />,
//             <Image
//               key="tres"
//               src="/productos.jpg"
//               alt="Productos"
//               fill
//               className="w-full h-full object-cover rounded-md cursor-pointer"
//               onClick={() => setSelectedImage("/productos.jpg")}
//             />,
//           ]}
//         />
//         {selectedImage && (
//           <div
//             className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999]"
//             onClick={() => setSelectedImage(null)}
//           >
//             <div className="relative w-[90vw] h-[80vh]">
//               <Image
//                 src={selectedImage}
//                 alt="Vista ampliada"
//                 fill
//                 className="object-contain rounded-lg shadow-lg"
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
