import { BookOpen, GraduationCap } from "lucide-react";
import { courses } from "@/data/courses";

export default function Courses() {
    return (
        <section className="py-24" id="cursos">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex items-center gap-3 mb-12 justify-center">
                    <GraduationCap className="text-primary w-8 h-8" />
                    <h2 className="text-3xl font-bold text-center">Cursos y Certificaciones</h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-primary/50 transition-colors group relative overflow-hidden"
                        >
                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <BookOpen className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors">
                                        {course.title}
                                    </h3>
                                    <div className="text-sm text-gray-400 space-y-1">
                                        <p className="font-medium text-gray-300">{course.platform}</p>
                                        {course.instructor && <p>Instr: {course.instructor}</p>}
                                        {course.date && <p>Año: {course.date}</p>}
                                    </div>

                                    {course.certificateUrl && (
                                        <a
                                            href={course.certificateUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-block mt-4 text-sm text-primary hover:underline font-medium"
                                        >
                                            Ver Certificado →
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
