import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Courses from "@/components/sections/Courses";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <LoadingScreen />

      <Navbar />

      {/* Agrega animación al entrar en viewport */}
      <ScrollReveal />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Courses />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
