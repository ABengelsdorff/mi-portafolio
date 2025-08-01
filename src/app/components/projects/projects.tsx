"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, Copy } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "../ui/dialog";


export default function Projects() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("admin@barber.com\nadmin123");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const { t } = useTranslation();

  const projects = [
    {
      title: t("projectData.barberShop.title"),
      description: t("projectData.barberShop.description"),
      images: [

        "/barberShop/HeroSeccion.png",
        "/barberShop/EstilosPopulares.png",
        "/barberShop/Barberos.png",
        "/barberShop/Reservas.png",
        "/barberShop/Galeria.png",
        "/barberShop/Opiniones.png",

        "/barberShop/DashboardAdmin.png",
        "/barberShop/Analiticas.png",
        "/barberShop/ReservasAdmin.png",
        "/barberShop/BarberosAdmin.png",
        "/barberShop/Horarios.png",
        "/barberShop/ComentarioAdmin.png",
      ],
      tags: [
        // Frontend
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Radix UI",
        "Zustand",
        "Recharts",
        "Lucide Icons",
        "Date-fns",
        "JWT Decode",
        "Framer Motion",
        "React Day Picker",
        // Backend
        "Express",
        "TypeORM",
        "PostgreSQL",
        "Node.js",
        "JWT",
        "Nodemailer",
        "Node-Cron",
        "Class Validator",
        "Class Transformer",
        "Docker",
        "Docker Compose"
      ],
      clientDemoUrl: "https://demo.barberturnos.shop/",
      adminDemoUrl: "https://demo.barberturnos.shop/admin",

      githubUrl: "",
      featured: true,
    },

    {
      title: t("projectData.legajoRh.title"),
      description: t("projectData.legajoRh.description"),
      images: [
        "/legajoRH/buscar.png",
        "/legajoRH/InicioSesion.png",
        "/legajoRH/Admin1.png",
        "/legajoRH/Admin.png",
        "/legajoRH/buscar1.png",
        "/legajoRH/form.png",
        "/legajoRH/graficos.png",
        "/legajoRH/personal.png",
        "/legajoRH/icono.png",
      ],
      tags: [
        "Electron",
        "React",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "SQLite",
        "Zustand",
        "React Hook Form",
        "JWT",
        "Node.js",
        "Express",
        "TypeORM",
      ],
      demoUrl: "",
      githubUrl: "",
      featured: false,
    },

    {
      title: t("projectData.formGallery.title"),
      description: t("projectData.formGallery.description"),
      images: [
        "/assets/formGallery/formGallery1.png",
        "/assets/formGallery/formGallery2.png",
        "/assets/formGallery/formGallery3.png",
        "/assets/formGallery/formGallery4.png",
        "/assets/formGallery/formGallery5.png",
        "/assets/formGallery/formGallery6.png",
      ],
      tags: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "framer-motion",
        "Lucide React",
        "sonner",
        "Radix UI",
        "ShadCN UI"
      ],
      demoUrl: "https://formgallery.vercel.app/",
      githubUrl: "https://github.com/ABengelsdorff/formGallery",
      tall: true,
    },

    {
      title: t("projectData.vets.title"),
      description: t("projectData.vets.description"),
      images: [
        "/vetsForPets/Home_1.jpg",
        "/vetsForPets/perfil.png",
        "/vetsForPets/turnos.png",
        "/vetsForPets/mascotas.png",
        "/vetsForPets/Veterinarias.png",
        "/vetsForPets/emergencias.png",
        "/vetsForPets/quienesSomos.png",
        "/vetsForPets/notFound.png",
      ],
      tags: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "TypeScript",
        "Leaflet",
        "Geolocation API",
        "Nominatim",
        "Cloudinary",
        "Socket.IO",
        "NestJS",
        "PostgreSQL",
        "TypeORM",
        "JWT",
      ],
      demoUrl: "https://front-pf-vets-for-pets-main.vercel.app/",
      githubUrl: "https://github.com/ABengelsdorff/vets-for-pets",
      featured: false,
    },


    {
      title: t("projectData.portfolio.title"),
      description: t("projectData.portfolio.description"),
      images: [
        "/portafolio/portafolioInicio.png",
        "/portafolio/portafolioInicio1.png",
        "/portafolio/sobreMi.png",
        "/portafolio/habilidades.png",
        "/portafolio/contacto.png",
        "/portafolio/proyectos.jpg",
        "/portafolio/notFound.png",
      ],
      tags: [
        // Frameworks & Lenguajes
        "Next.js",
        "React",
        "TypeScript",

        // Estilos y UI
        "Tailwind CSS",
        "Radix UI",
        "Lucide Icons",
        "TailwindCSS Animate",

        // Animaciones y efectos
        "Framer Motion",
        "GSAP",
        "Three.js",
        "React Three Fiber",
        "React Three Drei",
        "React Three Rapier",
        "Three-Stdlib",
        "Meshline",
        "OGL",

        // Internacionalización
        "i18next",
        "React i18next",
        "next-i18next",

        // Funcionalidades extra
        "EmailJS",
        "EmailJS Browser",
        "Radix Tooltip",
        "Next Themes",
        "React World Flags",
      ],
      demoUrl: "",
      githubUrl: "https://github.com/ABengelsdorff/mi-portafolio",
      featured: false,
    },


    // {
    //   title: t("projectData.innova.title"),
    //   description: t("projectData.innova.description"),
    //   images: [
    //     "/innova/innova.jpg",
    //     "/innova/iniciosesion.jpg",
    //     "/innova/productos.jpg",
    //     "/innova/miperfil.jpg",
    //     "/innova/ordenes.jpg",
    //     "/innova/registro.jpg",
    //   ],
    //   tags: [
    //     "Next.js",
    //     "React",
    //     "TypeScript",
    //     "Tailwind CSS",
    //     "Zustand",
    //     "React Hook Form",
    //     "Styled Components",
    //     "Framer Motion",
    //     "Lucide Icons",
    //     "SweetAlert2",
    //     "Node.js",
    //     "Express",
    //     "PostgreSQL",
    //     "TypeORM",
    //   ],
    //   demoUrl: "#",
    //   githubUrl: "https://github.com/ABengelsdorff/Ecommerce",
    //   featured: false,
    // },
    
  ];

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
    <section id="projects" className="container py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          viewport={{ once: false }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text">
            {t("projects.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            {t("projects.description")}
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
              viewport={{ once: false }}
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
                      className=" border-0 mt-28 transform transition-transform duration-300 group-hover:scale-110"
                      onClick={() => openProjectModal(index)}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {t("projects.details")}
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
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Button asChild size="lg">
            <Link
              href="https://github.com/ABengelsdorff?tab=repositories"
              target="_blank"
            >
              <Github className="h-5 w-5 mr-2" />
              {t("projects.more")}
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
            viewport={{ once: false }}
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-card text-card-foreground border border-border rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-auto"
              viewport={{ once: false }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={projects[selectedProject].images[currentImageIndex]}
                      alt={`${projects[selectedProject].title} - Imagen ${currentImageIndex + 1
                        }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-full object-cover"
                      viewport={{ once: false }}
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
                        className="px-3 py-1 rounded-full text-sm 
                                bg-primary/10 text-primary 
                                dark:bg-purple-100 dark:text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">




                    {projects[selectedProject].title === t("projectData.barberShop.title") && (
                      <>
                        {projects[selectedProject].clientDemoUrl && (
                          <Button asChild>
                            <Link
                              href={projects[selectedProject].clientDemoUrl}
                              target="_blank"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              {t("projects.clientDemo")}
                            </Link>
                          </Button>
                        )}

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              {t("projects.adminDemo")}
                            </Button>
                          </DialogTrigger>

                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>{t("adminDemoModal.title")}</DialogTitle>
                              <DialogDescription
                                dangerouslySetInnerHTML={{
                                  __html: t("adminDemoModal.description"),
                                }}


                              />
                            </DialogHeader>

                            <Button
                              onClick={handleCopy}
                              className="w-full bg-purple-800 text-white hover:bg-purple-600 font-semibold text-sm sm:text-base transition-colors duration-500 ease-in-out"

                            >
                              <Copy className="w-4 h-4 mr-2" />
                              {copied ? "¡Copiado!" : t("downloadModal.copy")}
                            </Button>

                            <DialogFooter className="mt-4">
                              <DialogClose asChild>
                                <Button variant="outline" className="transition-colors duration-500 ease-in-out">
                                  {t("adminDemoModal.cancel")}
                                </Button>
                              </DialogClose>
                              {projects[selectedProject].adminDemoUrl && (
                                <Link
                                  href={projects[selectedProject].adminDemoUrl}
                                  target="_blank"
                                >
                                  <Button className="bg-purple-800 hover:bg-purple-600 text-white transition-colors duration-500 ease-in-out">
                                    {t("adminDemoModal.confirm")}
                                  </Button>
                                </Link>
                              )}
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </>
                    )}

                    {/* Mostrar botón de demo y/o GitHub para el resto de proyectos */}
                    {projects[selectedProject].title !== t("projectData.barberShop.title") &&
                      projects[selectedProject].title !== t("projectData.legajoRh.title") && (
                        <>
                          {projects[selectedProject].demoUrl && (
                            <Button asChild>
                              <Link
                                href={projects[selectedProject].demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                {t("projects.demo")}
                              </Link>
                            </Button>
                          )}

                          {projects[selectedProject].githubUrl && (
                            <Button asChild variant="outline">
                              <Link
                                href={projects[selectedProject].githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="h-4 w-4 mr-2" />
                                {t("projects.code")}
                              </Link>
                            </Button>
                          )}
                        </>
                      )}

                    {projects[selectedProject].title ===
                      t("projectData.legajoRh.title") && (
                        <>
                          <Button asChild>
                            <Link
                              href="https://youtu.be/hjgjQO_xigg"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              {t("projects.presentation")}
                            </Link>
                          </Button>

                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="lg" className="p-4" variant="outline">
                                {t("projects.download")}
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle className="mb-3">
                                  {t("downloadModal.title")}
                                </DialogTitle>
                                <DialogDescription>
                                  <Trans
                                    i18nKey="downloadModal.description"
                                    components={[
                                      <strong key="user" />,
                                      <strong key="pass" />,
                                    ]}
                                  />
                                </DialogDescription>
                              </DialogHeader>
                              <DialogFooter>
                                <DialogClose asChild>
                                  <Button variant="outline">
                                    {t("downloadModal.cancel")}
                                  </Button>
                                </DialogClose>
                                <Link href="/LegajoRH_Setup.exe" download>
                                  <Button>{t("downloadModal.confirm")}</Button>
                                </Link>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </>
                      )}
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
