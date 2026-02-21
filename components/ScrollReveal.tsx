"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("animate-fade-in");
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return null;
}

