import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section className="py-24 bg-surface/50" id="proyectos">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Proyectos Destacados</h2>
            <p className="text-gray-400">Una selección de mis trabajos más recientes.</p>
          </div>

          <a className="text-primary hover:underline flex items-center gap-2" href="#">
            Ver todo el repositorio <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

