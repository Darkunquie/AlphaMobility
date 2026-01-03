import { Hexagon, Triangle, Circle, Square, Command } from "lucide-react";

export function ClientLogos() {
  return (
    <section className="py-12 border-b border-slate-100 bg-white">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
          Trusted by innovative companies worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-800">
            <Hexagon className="h-8 w-8 text-blue-600 fill-blue-100" /> NEXUS
          </div>
          <div className="flex items-center gap-2 font-bold text-xl text-slate-800">
            <Triangle className="h-8 w-8 text-purple-600 fill-purple-100" /> VERTEX
          </div>
          <div className="flex items-center gap-2 font-bold text-xl text-slate-800">
            <Circle className="h-8 w-8 text-emerald-600 fill-emerald-100" /> ORBITAL
          </div>
          <div className="flex items-center gap-2 font-bold text-xl text-slate-800">
            <Square className="h-8 w-8 text-rose-600 fill-rose-100" /> CUBE
          </div>
          <div className="flex items-center gap-2 font-bold text-xl text-slate-800">
            <Command className="h-8 w-8 text-cyan-600 fill-cyan-100" /> CMD
          </div>
        </div>
      </div>
    </section>
  );
}
