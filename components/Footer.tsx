import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-dark">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-8">
          <a className="text-gray-400 hover:text-primary" href="#" aria-label="GitHub">
            <Github />
          </a>
          <a className="text-gray-400 hover:text-primary" href="#" aria-label="LinkedIn">
            <Linkedin />
          </a>
          <a className="text-gray-400 hover:text-primary" href="#" aria-label="Twitter">
            <Twitter />
          </a>
        </div>
        <p className="text-gray-500 text-sm">© 2024 FullStack Portfolio. Diseñado con pasión y código limpio.</p>
      </div>
    </footer>
  );
}

