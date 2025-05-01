"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Code, Palette, Rocket, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Button } from "../ui/button";

export default function About() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: t("about.features.0.title"),
      description: t("about.features.0.description"),
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: t("about.features.1.title"),
      description: t("about.features.1.description"),
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: t("about.features.2.title"),
      description: t("about.features.2.description"),
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {t("about.title")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            {t("about.intro")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">{t("about.storyTitle")}</h3>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t("about.story1")}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t("about.story2")}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              {t("about.story3")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-4 flex items-start gap-4">
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-16"
      >
        <Button asChild size="lg">
          <Link
            href="./CV_FullStack_Angelica_Bengelsdorff.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText className="h-5 w-5 mr-2" />
            {t("hero.viewCv")}
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
