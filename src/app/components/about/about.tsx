"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Code, Palette, Rocket } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Desarrollo Web",
      description:
        "Creo soluciones digitales escalables, modernas y bien estructuradas.",
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "Diseño UI/UX",
      description:
        "Diseño interfaces accesibles, atractivas y centradas en el usuario.",
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "Rendimiento y Optimización",
      description: "Me enfoco en velocidad, eficiencia y experiencia fluida.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mí</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
          Más allá del código, me interesa construir experiencias útiles y amigables. 
          Me esfuerzo por mantenerme al día con las mejores prácticas y aprender algo nuevo en cada desafío.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Mi Historia</h3>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Mi viaje en el desarrollo comenzó hace algunos años, impulsado por
              una fuerte curiosidad por la tecnología y un deseo de crear
              soluciones que impacten en la vida real. A lo largo del tiempo, me
              especialicé en el desarrollo web, con un enfoque Full Stack y un
              especial interés por el Frontend.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Cada proyecto en el que participo representa una nueva oportunidad
              para aprender, mejorar y superarme. Me gusta mantener una
              mentalidad de crecimiento constante y rodearme de personas que
              también buscan dar lo mejor de sí.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Siempre estoy en búsqueda de nuevas herramientas y formas de
              mejorar. Me motiva seguir aprendiendo y aportar valor con
              soluciones creativas, funcionales y centradas en el usuario.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
