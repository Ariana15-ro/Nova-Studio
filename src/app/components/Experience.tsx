import { Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Presente",
      description: "Liderazgo en el desarrollo de aplicaciones web escalables utilizando React, Node.js y PostgreSQL. Implementación de arquitecturas microservicios y CI/CD.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
    },
    {
      role: "Full Stack Developer",
      company: "Digital Solutions",
      period: "2020 - 2022",
      description: "Desarrollo de aplicaciones empresariales y sistemas de gestión. Colaboración con equipos multidisciplinarios para entregar soluciones de alta calidad.",
      technologies: ["Vue.js", "Express", "MongoDB", "Azure"],
    },
    {
      role: "Frontend Developer",
      company: "StartUp Creative",
      period: "2019 - 2020",
      description: "Desarrollo de interfaces de usuario modernas y responsivas. Optimización de rendimiento y experiencia de usuario.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-zinc-950">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Experiencia Profesional
        </h2>
        <p className="text-zinc-400 text-center mb-16 text-lg">
          Mi trayectoria en el mundo del desarrollo
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-zinc-800 last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-purple-500 border-4 border-zinc-950" />
              
              <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-purple-500/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Briefcase className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-purple-400 font-semibold mb-1">{exp.company}</p>
                    <p className="text-zinc-500 text-sm">{exp.period}</p>
                  </div>
                </div>
                
                <p className="text-zinc-300 mb-4">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
