import { Github, Linkedin, Twitter } from "lucide-react";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden" id="inicio">
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] -z-10" />

      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
          {profile.badge}
        </span>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
          {profile.heroTitle.split("Web")[0]}
          <span className="text-primary">Web</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          {profile.heroDescription}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            className="w-full sm:w-auto px-8 py-4 bg-primary text-dark font-bold rounded-custom hover:scale-105 transition-transform"
            href="#proyectos"
          >
            Ver mis proyectos
          </a>
          <a
            className="w-full sm:w-auto px-8 py-4 border border-white/20 rounded-custom font-bold hover:bg-white/5 transition-colors"
            href="#contacto"
          >
            Contactar ahora
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-8 text-gray-500">
          <a className="hover:text-white transition-colors" href="#" aria-label="GitHub">
            <Github className="w-6 h-6" />
          </a>
          <a className="hover:text-white transition-colors" href="#" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6" />
          </a>
          <a className="hover:text-white transition-colors" href="#" aria-label="Twitter">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

