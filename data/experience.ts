import type { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Senior Full Stack Developer",
    company: "Tech Solutions S.A.",
    period: "2021 — Presente",
    achievements: [
      "Liderazgo de equipo en la migración de microservicios.",
      "Optimización de tiempos de carga en un 40% mediante Next.js.",
      "Implementación de pipelines CI/CD automatizados.",
    ],
    highlight: true,
  },
  {
    id: "exp-2",
    role: "Frontend Developer",
    company: "Creative Digital Agency",
    period: "2019 — 2021",
    achievements: [
      "Desarrollo de interfaces altamente interactivas con React y Tailwind.",
      "Colaboración estrecha con diseñadores UI/UX.",
      "Mantenimiento de sistemas de diseño corporativos.",
    ],
  },
];

