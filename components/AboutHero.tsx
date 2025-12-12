"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden min-h-screen text-[var(--foreground)] bg-transparent">
      <div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 
        pt-[calc(4rem+var(--navbar-height,60px))] pb-12 
        sm:pb-16 lg:pb-20 relative z-10"
        style={{ "--navbar-height": "20px" } as React.CSSProperties}
      >
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Small top label */}
          <p className="text-[var(--sun)] font-mono tracking-wider uppercase mb-4 text-sm sm:text-base">
            About Me
          </p>

          {/* Main Heading */}
          <h1
            className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
              font-extrabold leading-snug sm:leading-tight
            "
          >
            I design and build modern, scalable digital experiences.
            <span className="block mt-3 sm:mt-4 text-lg sm:text-2xl text-[var(--amber)] font-semibold">
              Frontend engineering. UI craftsmanship. Product thinking.
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-5 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed opacity-80">
            I’m a software developer focused on creating intuitive interfaces, 
            performant applications, and seamless user experiences — powered by 
            clean architecture, modern tooling, and thoughtful design.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/projects"
                className="
                  relative flex items-center gap-2
                  px-6 py-3 rounded-full font-semibold
                  border border-[var(--honey)]
                  text-[var(--honey)] 
                  group transition-all duration-300
                  overflow-hidden
                "
              >
                <span className="relative z-10 transition-all duration-300 group-hover:-translate-x-2">
                  See my work  
                </span>

                <Send
                  size={18}
                  className="
                    absolute right-3 opacity-0 translate-x-2 
                    group-hover:opacity-100 group-hover:translate-x-0
                    transition-all duration-300 ease-in-out z-10
                  "
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
