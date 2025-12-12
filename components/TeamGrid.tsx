"use client";
import { useState } from "react";
import Image from "next/image";

const team = [
  { name: "Himanshu", role: "Creative Director", img: "/name1.avif", bio: "Brand nerd. Coffee addict." },
  { name: "Gaurav", role: "Growth Lead", img: "/name2.jpg", bio: "Performance & data freak." },
    { name: "Himanshu", role: "Creative Director", img: "/name1.avif", bio: "Brand nerd. Coffee addict." },
  { name: "Gaurav", role: "Growth Lead", img: "/name2.jpg", bio: "Performance & data freak." },
  
  // add more...
];

export default function TeamGrid() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 text-[var(--foreground)] transition-colors duration-500 flex justify-center">
      <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-8 text-[var(--sun)]">
          The Team
        </h1>

        <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              className="w-full rounded-lg shadow p-4 flex flex-col items-center gap-4 
                         bg-[var(--surface-1000)] border border-[var(--honey)] 
                         hover:shadow-lg hover:border-[var(--amber)] transition"
            >
              {/* Avatar */}
              <div className="relative w-16 h-16 flex-shrink-0 rounded-full overflow-hidden border-2 border-[var(--honey)]">
                <Image
                  src={t.img}
                  alt={t.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="64px"
                  priority={false}
                />
              </div>

              {/* Text */}
              <div className="text-center">
                <div className="font-semibold text-lg text-[var(--foreground)]">{t.name}</div>
                <div className="text-sm text-[var(--amber)]">{t.role}</div>

                {open === i && (
                  <p className="mt-3 text-sm text-[var(--foreground)]/80 transition-opacity duration-300">
                    {t.bio}
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
