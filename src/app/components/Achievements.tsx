import { Award, Trophy, Target, Star } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "Mejor Proyecto del Año 2024",
      description: "Reconocimiento por excelencia en innovación y desarrollo de software",
      year: "2024",
    },
    {
      icon: Award,
      title: "Certificación AWS Solutions Architect",
      description: "Certificación profesional en arquitectura de soluciones en la nube",
      year: "2023",
    },
    {
      icon: Star,
      title: "+50 Proyectos Completados",
      description: "Entrega exitosa de proyectos para clientes internacionales",
      year: "2022-2024",
    },
    {
      icon: Target,
      title: "Líder de Equipo Técnico",
      description: "Liderazgo de equipos multidisciplinarios de desarrollo",
      year: "2023",
    },
    {
      icon: Trophy,
      title: "Hackathon Nacional - Primer Lugar",
      description: "Ganador del hackathon más grande del país con solución innovadora",
      year: "2022",
    },
    {
      icon: Award,
      title: "Contribuidor Open Source",
      description: "Contribuciones activas a proyectos populares de código abierto",
      year: "2021-2024",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-zinc-900">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Logros & Reconocimientos
        </h2>
        <p className="text-zinc-400 text-center mb-16 text-lg">
          Hitos destacados en mi carrera profesional
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-white font-bold text-lg leading-tight">
                        {achievement.title}
                      </h3>
                    </div>
                    <p className="text-zinc-400 text-sm mb-3">
                      {achievement.description}
                    </p>
                    <span className="text-purple-400 text-xs font-semibold">
                      {achievement.year}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
