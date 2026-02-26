import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Achievements } from "./components/Achievements";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="size-full bg-zinc-950">
      <Hero />
      <About />
      <Experience />
      <Achievements />
      <Contact />
      
      <footer className="bg-zinc-950 border-t border-zinc-800 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-zinc-400">
            © 2026 Tu Nombre. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
