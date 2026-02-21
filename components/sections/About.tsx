import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section className="py-24 bg-surface/50" id="sobre-mi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-custom overflow-hidden border-2 border-primary/30">
              <Image
                alt={profile.aboutImageAlt}
                src={profile.aboutImage}
                width={900}
                height={900}
                className="w-full h-full object-cover"
                priority={false}
              />
            </div>

            <div className="absolute -bottom-6 -right-6 p-6 bg-dark border border-white/10 rounded-custom shadow-2xl">
              <span className="text-3xl font-bold text-primary block">{profile.aboutYears}</span>
              <span className="text-sm text-gray-400 uppercase tracking-widest">
                {profile.aboutYearsLabel}
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">{profile.aboutTitle}</h2>

            <p className="text-gray-400 mb-6 leading-relaxed">{profile.aboutP1}</p>
            <p className="text-gray-400 mb-8 leading-relaxed">{profile.aboutP2}</p>

            <div className="grid grid-cols-2 gap-4">
              {profile.skills.map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <CheckCircle className="text-primary w-5 h-5" />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

