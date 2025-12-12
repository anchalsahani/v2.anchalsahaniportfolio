"use client";

import { useEffect, useRef } from "react";
import { Layers } from "lucide-react";
import { Icon } from "@iconify/react";

export default function TechStackBox() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (!slider) return;

      scrollAmount += 1;
      slider.scrollLeft = scrollAmount;

      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        scrollAmount = 0;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  // Colored tech icons list (from resume + GitHub)
  const techIcons = [
    "devicon:react",
    "devicon:nextjs",
    "devicon:typescript",
    "devicon:javascript",
    "devicon:nodejs",
    "devicon:express",
    "devicon:mongodb",
    "devicon:html5",
    "devicon:css3",
    "devicon:tailwindcss",
    "devicon:git",
    "devicon:cplusplus",
  ];

  return (
    <section className="py-14 px-6">
      <div
        className="
          max-w-6xl mx-auto rounded-3xl p-8 
          border border-[var(--foreground)]
          bg-[var(--surface-1000)]
          shadow-[0_0_18px_rgba(0,150,255,0.15)]
        "
      >
        {/* Section Tag */}
        <div
          className="
            inline-flex items-center gap-2 mb-6 px-4 py-1.5 
            rounded-full border border-[var(--foreground)] 
            bg-[var(--surface-900)]
            text-[var(--sun)] font-semibold text-sm
          "
        >
          <Layers size={16} />
          Tech Stack
        </div>

        {/* Scrolling Icons */}
        <div
          ref={sliderRef}
          className="
            flex overflow-x-scroll gap-14 py-6 scrollbar-hide 
            whitespace-nowrap select-none items-center
          "
        >
          {techIcons.concat(techIcons).map((icon, i) => (
            <div
              key={i}
              className="
                flex items-center justify-center 
                h-16 w-16 rounded-xl 
                backdrop-blur-md
                transition-all duration-300
              "
            >
              <Icon
                icon={icon}
                width="50"
                height="50"
                className="opacity-100"
              />
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="mt-6">
          <h3 className="text-2xl font-bold text-[var(--sun)]">
            Technologies I work with
          </h3>
          <p className="mt-3 text-[var(--foreground)] opacity-80 text-sm max-w-2xl">
            I primarily work in the JavaScript ecosystem — building full-stack 
            applications using React, Next.js, Node.js, MongoDB and modern UI 
            tooling. I also have strong foundations in C++ for algorithms and 
            problem-solving.
          </p>
        </div>
      </div>
    </section>
  );
}
