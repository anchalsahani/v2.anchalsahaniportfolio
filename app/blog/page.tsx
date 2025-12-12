import { Wrench } from "lucide-react";

export default function UnderConstruction() {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6">

      {/* ICON BOX */}
      <div
        className="
          w-24 h-24 mb-6 
          rounded-2xl 
          flex items-center justify-center
          bg-[var(--surface-900)] 
          border border-white/10
          shadow-[inset_0_0_20px_rgba(255,255,255,0.04),0_8px_25px_rgba(0,0,0,0.3)]
          backdrop-blur-xl
        "
      >
        <Wrench size={40} className="text-[var(--honey)]" />
      </div>

      {/* TITLE */}
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-xl">
        Under Construction
      </h1>

      {/* SUBTEXT */}
      <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
        This page is currently under construction. I'm working hard to
        bring something exciting here soon. Stay tuned!
      </p>
    </section>
  );
}
