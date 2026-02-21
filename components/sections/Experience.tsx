import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section className="py-24" id="experiencia">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Experiencia Laboral</h2>

        <div className="space-y-12">
          {experience.map((job) => (
            <div key={job.id} className="relative pl-8 border-l-2 border-white/10">
              <div
                className={[
                  "absolute -left-[9px] top-0 w-4 h-4 rounded-full",
                  job.highlight ? "bg-primary" : "bg-white/20",
                ].join(" ")}
              />
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="text-xl font-bold">{job.role}</h3>
                <span className={job.highlight ? "text-primary font-medium" : "text-gray-400 font-medium"}>
                  {job.period}
                </span>
              </div>

              <p className="text-gray-300 font-medium mb-4">{job.company}</p>

              <ul className="text-gray-400 space-y-2 list-disc list-inside">
                {job.achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

