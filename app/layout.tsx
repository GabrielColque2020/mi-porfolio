import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio Profesional | Desarrollador Full Stack",
  description:
    "Desarrollador Full Stack especializado en soluciones modernas y escalables. Explora mi experiencia, proyectos y habilidades técnicas.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body className="font-sans">{children}</body>
    </html>
  );
}
