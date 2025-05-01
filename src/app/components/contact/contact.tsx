"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import SuccessDialog from "../ui/success-dialog";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_h366by8", //  SERVICE ID
        "template_le0j7mr", //  TEMPLATE ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "lf3zOrlzAQFFvOTxT" // PUBLIC KEY
      );

      setShowSuccessDialog(true);

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      alert("Hubo un error al enviar el mensaje. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {t("contact.title")}
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, margin: "-100px" }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-6">{t("contact.subtitle")}</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              {t("contact.description")}
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-500">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">
                    {t("contact.contactInfo.github")}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    <a
                      href="https://github.com/ABengelsdorff"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-primary"
                    >
                      github.com/ABengelsdorff
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-500">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">
                    {t("contact.contactInfo.linkedin")}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    <a
                      href="https://www.linkedin.com/in/angelica-bengelsdorff"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-primary"
                    >
                      linkedin.com/in/angelica-bengelsdorff
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">
                    {t("contact.contactInfo.email")}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    <a
                      href="mailto:Angelica.bengelsdorff.5@gmail.com?subject=Contacto%20desde%20tu%20portfolio&body=Hola%20Angélica,%20me%20gustaría%20ponerme%20en%20contacto..."
                      className="hover:underline text-primary"
                    >
                      Angelica.bengelsdorff.5@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulario funcional */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, margin: "-100px" }}
            className="md:w-1/2"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-100 dark:border-slate-700"
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder={t("contact.form.placeholderName")}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder={t("contact.form.placeholderEmail")}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder={t("contact.form.placeholderMessage")}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="p-4 w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium py-3 rounded-lg shadow-lg shadow-purple-500/20 hover:shadow-xl transition-all flex justify-center items-center text-center "
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    {t("contact.form.sending")}
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="h-5 w-5 mr-2" />
                    {t("contact.form.button")}
                  </span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <SuccessDialog
        open={showSuccessDialog}
        onOpenChange={setShowSuccessDialog}
      />
    </section>
  );
}
