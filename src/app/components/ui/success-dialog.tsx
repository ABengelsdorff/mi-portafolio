"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog";

interface SuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
}

export default function SuccessDialog({
  open,
  onOpenChange,
  title = "Mensaje enviado",
  description = "Gracias por contactarme. Te responderé lo antes posible.",
}: SuccessDialogProps) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (open) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 6000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-none shadow-xl bg-white dark:bg-gray-900 p-0 overflow-hidden">
        {/* Fondo decorativo con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-400/40 opacity-50" />

        {/* Confetti animation */}
        <AnimatePresence>
          {showConfetti && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: -20, x: Math.random() * 400 - 200, opacity: 1 }}
                  animate={{ y: 400, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 2 + Math.random() * 3,
                    delay: Math.random() * 0.3,
                  }}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    left: `${50 + (Math.random() * 60 - 30)}%`,
                    backgroundColor:
                      i % 3 === 0
                        ? "rgb(var(--primary))"
                        : i % 3 === 1
                        ? "rgb(168, 85, 247)" // purple-500
                        : "rgb(236, 72, 153)", // pink-500
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                />
              ))}
            </div>
          )}
        </AnimatePresence>

        <div className="relative z-10 p-6">
          <div className="flex justify-center mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-3">
                <CheckCircle className="h-10 w-10 text-green-500" />
              </div>
            </motion.div>
          </div>

          <DialogHeader className="pb-4">
            <DialogTitle className="text-center text-2xl font-bold">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {title}
              </motion.div>
            </DialogTitle>
            <DialogDescription className="text-center text-base mt-2">
              {description}
            </DialogDescription>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center text-base mt-2"
            ></motion.div>
          </DialogHeader>

          <motion.div
            className="flex justify-center mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              onClick={() => onOpenChange(false)}
              className="px-6 py-3 bg-gradient-to-r from-primary to-purple-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cerrar
            </motion.button>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
