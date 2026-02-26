export function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-zinc-950">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Sobre Mí
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
              Soy un profesional dedicado con más de 5 años de experiencia en el
              desarrollo de aplicaciones web y móviles. Mi enfoque está en crear
              soluciones innovadoras que resuelvan problemas reales.
            </p>
            <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
              Me especializo en tecnologías modernas como React, Node.js, y TypeScript,
              siempre buscando las mejores prácticas y patrones de diseño para
              entregar productos de alta calidad.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Cuando no estoy programando, me encontrarás explorando nuevas tecnologías,
              contribuyendo a proyectos de código abierto, o compartiendo conocimientos
              con la comunidad de desarrolladores.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
              <h3 className="text-2xl font-bold text-white mb-4">Habilidades Técnicas</h3>
              <div className="space-y-4">
                <SkillBar skill="Frontend Development" percentage={95} />
                <SkillBar skill="Backend Development" percentage={88} />
                <SkillBar skill="UI/UX Design" percentage={85} />
                <SkillBar skill="Database Management" percentage={90} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ skill, percentage }: { skill: string; percentage: number }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-zinc-400">{skill}</span>
        <span className="text-zinc-400">{percentage}%</span>
      </div>
      <div className="w-full bg-zinc-800 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
