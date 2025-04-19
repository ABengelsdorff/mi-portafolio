"use client";

import { motion } from "framer-motion";

import { Code, Server, Sparkles } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mis Habilidades
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Estas son las tecnologías y herramientas con las que trabajo para
            crear soluciones web modernas y eficientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    {
      icon: <Code className="h-10 w-10 text-purple-500" />,
      title: "Desarrollo Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript / JavaScript",
        "HTML5 / CSS3",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      icon: <Server className="h-10 w-10 text-green-500" />,
      title: "Desarrollo Backend",
      skills: [
        "Node.js",
        "Express",
        "TypeORM",
        "SQLite / PostgreSQL",
        "JWT (Autenticación)",
        "APIs REST",
      ],
    },
    {
      icon: <Sparkles className="h-10 w-10 text-yellow-500" />,
      title: "Herramientas",
      skills: [
        "Git / GitHub",
        "VS Code",
        "Figma",
        "Vercel",
        "Postman",
        "Zustand",
        "Electron",
      ],
    },
  ].map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-100 dark:border-slate-700"
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <span className="text-slate-600 dark:text-slate-300">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 p-8 bg-primary/5 rounded-lg text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            ¿Buscas un desarrollador con estas habilidades?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Estoy disponible para proyectos freelance y oportunidades de trabajo
            a tiempo completo.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contáctame
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
