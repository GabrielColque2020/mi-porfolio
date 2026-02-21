import Image from "next/image";
import { Github, Link as LinkIcon } from "lucide-react";
import type { Project } from "@/types";

export default function ProjectCard({
  title,
  description,
  image,
  stack,
  demoUrl,
  repoUrl,
}: Project) {
  return (
    <div className="group bg-dark border border-white/10 rounded-custom overflow-hidden hover:border-primary/50 transition-colors">
      <div className="h-48 overflow-hidden relative">
        <Image
          alt={title}
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="flex gap-4">
            <a
              href={demoUrl ?? "#"}
              className="p-2 bg-dark rounded-full hover:bg-primary transition-colors"
              aria-label="Abrir demo"
            >
              <LinkIcon className="w-5 h-5" />
            </a>
            <a
              href={repoUrl ?? "#"}
              className="p-2 bg-dark rounded-full hover:bg-primary transition-colors"
              aria-label="Ver código"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex gap-2 mb-4 flex-wrap">
          {stack.map((t) => (
            <span
              key={t}
              className="text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-white/5 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
      </div>
    </div>
  );
}

