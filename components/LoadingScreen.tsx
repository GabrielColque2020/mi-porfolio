"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-[100] bg-dark flex items-center justify-center"
          aria-label="Pantalla de carga"
        >
          <div className="text-center">
            <h1 className="typewriter-text text-3xl md:text-5xl font-bold text-white px-4">
              Hola Mundo
            </h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

