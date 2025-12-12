"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const values = [
  {
    title: "Craft Over Complexity",
    desc: "I focus on building experiences that feel intentional, polished, and deeply thought-through.",
  },
  {
    title: "Clean, Scalable Code",
    desc: "I write modular, maintainable systems — optimized for clarity, performance, and growth.",
  },
  {
    title: "Ownership & Execution",
    desc: "I take ideas from concept to production with an engineering-first mindset and strong execution discipline.",
  },
];

export default function MissionValues() {
  useTheme();

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    <section className="py-20 transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl sm:text-5xl font-extrabold text-[var(--foreground)]">
            How I Build
          </h2>
          <p className="font-medium mt-5 text-[var(--foreground)] opacity-70 max-w-2xl mx-auto">
            My work combines thoughtful design, clean engineering, and 
            a focus on real-world impact. These principles guide every project I take on.
          </p>
        </div>

        {/* Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {values.map((v, i) => (
            <motion.article
              key={v.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              className="
                p-7 rounded-2xl border border-[var(--foreground)]
                bg-[var(--surface-1000)] backdrop-blur-sm 
                transition-all duration-500
                hover:scale-[1.01]
                hover:shadow-[0_0_10px_rgba(140,170,255,0.12)]
              "
            >
              <h3 className="text-xl font-semibold mb-3 text-[var(--honey)] ">
                {v.title}
              </h3>
              <p className="text-sm text-[var(--foreground)] opacity-80 leading-relaxed">
                {v.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
