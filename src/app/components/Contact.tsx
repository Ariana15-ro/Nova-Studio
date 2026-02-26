import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-zinc-900">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Contacto
        </h2>
        <p className="text-zinc-400 text-center mb-16 text-lg">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 text-center">
            <div className="inline-flex p-3 bg-purple-500/20 rounded-full mb-4">
              <Mail className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-white font-bold mb-2">Email</h3>
            <p className="text-zinc-400">tu@email.com</p>
          </div>

          <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 text-center">
            <div className="inline-flex p-3 bg-purple-500/20 rounded-full mb-4">
              <Phone className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-white font-bold mb-2">Teléfono</h3>
            <p className="text-zinc-400">+1 (555) 123-4567</p>
          </div>

          <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 text-center">
            <div className="inline-flex p-3 bg-purple-500/20 rounded-full mb-4">
              <MapPin className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-white font-bold mb-2">Ubicación</h3>
            <p className="text-zinc-400">Ciudad, País</p>
          </div>
        </div>

        <div className="bg-zinc-950 p-8 rounded-xl border border-zinc-800">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">
                Asunto
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="¿Sobre qué quieres hablar?"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">
                Mensaje
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                placeholder="Escribe tu mensaje aquí..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg transition-all transform hover:scale-105"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
