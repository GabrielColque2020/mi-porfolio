"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Cierra menú al hacer scroll (simple)
  useEffect(() => {
    const onScroll = () => setOpen(false);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 glass-nav">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-custom flex items-center justify-center text-dark font-bold">
            FS
          </div>
          <span className="text-xl font-bold tracking-tight">
            FullStack<span className="text-primary">Dev</span>
          </span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#inicio">
            Inicio
          </a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#sobre-mi">
            Sobre Mí
          </a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#experiencia">
            Experiencia
          </a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#proyectos">
            Proyectos
          </a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#cursos">
            Cursos
          </a>
          <a
            className="px-4 py-2 bg-primary text-dark rounded-custom text-sm font-semibold hover:bg-accent transition-all"
            href="#contacto"
          >
            Contáctame
          </a>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-white"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-dark/95">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            <a className="text-sm font-medium hover:text-primary" href="#inicio">
              Inicio
            </a>
            <a className="text-sm font-medium hover:text-primary" href="#sobre-mi">
              Sobre Mí
            </a>
            <a className="text-sm font-medium hover:text-primary" href="#experiencia">
              Experiencia
            </a>
            <a className="text-sm font-medium hover:text-primary" href="#proyectos">
              Proyectos
            </a>
            <a className="text-sm font-medium hover:text-primary" href="#cursos">
              Cursos
            </a>
            <a
              className="px-4 py-2 bg-primary text-dark rounded-custom text-sm font-semibold hover:bg-accent transition-all w-fit"
              href="#contacto"
            >
              Contáctame
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

