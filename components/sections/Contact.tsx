"use client";

import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="py-24 bg-surface/50" id="contacto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">{profile.contactTitle}</h2>
            <p className="text-gray-400 text-lg mb-8">{profile.contactDescription}</p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-custom bg-white/5 flex items-center justify-center text-primary">
                  <Mail />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold">Email</p>
                  <p className="text-white">{profile.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-custom bg-white/5 flex items-center justify-center text-primary">
                  <MapPin />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold">Ubicación</p>
                  <p className="text-white">{profile.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface p-8 rounded-custom border border-white/10">
            {!sent ? (
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                  setTimeout(() => setSent(false), 5000);
                }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300" htmlFor="nombre">
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      className="w-full bg-dark border border-white/10 rounded-custom px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      required
                      type="text"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      className="w-full bg-dark border border-white/10 rounded-custom px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      required
                      type="email"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300" htmlFor="asunto">
                    Asunto
                  </label>
                  <input
                    id="asunto"
                    className="w-full bg-dark border border-white/10 rounded-custom px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    required
                    type="text"
                    placeholder="Motivo del contacto"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300" htmlFor="mensaje">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    className="w-full bg-dark border border-white/10 rounded-custom px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    required
                    rows={4}
                    placeholder="Contame sobre tu proyecto o propuesta…"
                  />
                </div>

                <button
                  className="w-full py-4 bg-primary text-dark font-bold rounded-custom hover:bg-accent transition-colors flex items-center justify-center gap-2"
                  type="submit"
                >
                  Enviar Mensaje <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="mt-4 p-4 border rounded-custom text-center bg-primary/10 border-primary/50 text-primary">
                ¡Mensaje enviado con éxito! Me pondré en contacto pronto.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

