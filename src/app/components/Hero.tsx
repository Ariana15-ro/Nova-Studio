import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-5xl font-bold">
            TN
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Tu Nombre
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-8">
            Desarrollador Full Stack & Diseñador Creativo
          </p>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-12">
            Apasionado por crear experiencias digitales excepcionales que combinan
            diseño elegante con código limpio y eficiente.
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors"
          >
            <Github className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
          <a
            href="mailto:tu@email.com"
            className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors"
          >
            <Mail className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
