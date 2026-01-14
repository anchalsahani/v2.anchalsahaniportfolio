"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Eye } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

// Rotating words for light mode
const rotatingWordsLight = [
  { text: "clean UI", color: "#5c8cff" },
  { text: "modern apps", color: "#5c8cff" },
  { text: "digital experiences", color: "#5c8cff" },
];

// Rotating words for dark mode
const rotatingWordsDark = [
  { text: "scalable systems", color: "#4ADE80" },
  { text: "high-performance apps", color: "#60A5FA" },
  { text: "impactful software", color: "#F472B6" },
];

const MotionLink = motion(Link);

export default function Hero() {
  const { theme, resolvedTheme } = useTheme();
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  const currentTheme = resolvedTheme || theme || "light";
  const rotatingWords =
    currentTheme === "dark" ? rotatingWordsDark : rotatingWordsLight;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  if (!mounted) return null;

  return (
    <motion.section
      className="
        relative flex flex-col 
        items-start sm:items-center 
        text-left sm:text-center
        px-4 sm:px-6 
        pt-14 sm:pt-20 pb-16 sm:pb-20 
        min-h-screen
        justify-center sm:justify-start
        overflow-hidden
      "
    >
      {/* Aurora Background */}
      <motion.div
        className="
          absolute bottom-0 left-0 w-full h-[400px]
          opacity-40 dark:opacity-50
          pointer-events-none z-0
        "
        style={{
          borderRadius: "30% 30% 0 0 / 80% 80% 0 0",
          filter: "blur(80px)",
        }}
      />

      {/* Tagline */}
      <p
        className="
          font-sans font-semibold tracking-wide uppercase 
          mb-3 sm:mb-4 relative z-10 
          text-cyan-300
          text-[12px] xs:text-sm md:text-base
          text-left sm:text-center
        "
      >
        Software Developer • Frontend Engineer • Problem Solver
      </p>

      {/* Heading — FIXED MOBILE LEFT ALIGNMENT */}
      <h1
        className="
          text-3xl xs:text-4xl sm:text-5xl md:text-6xl 
          font-bold text-foreground tracking-tight font-sans 
          leading-tight 
          max-w-full xs:max-w-md sm:max-w-none 
          relative z-10
        "
      >
        <div className="flex justify-start sm:justify-center items-center gap-2">
          <span>I build</span>

          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ color: rotatingWords[index].color }}
            >
              {rotatingWords[index].text}
            </motion.span>
          </AnimatePresence>
        </div>
      </h1>

      {/* Subtext */}
      <p
        className="
          mt-4 sm:mt-6 
          text-sm xs:text-base sm:text-lg 
          max-w-sm xs:max-w-sm sm:max-w-xl 
          font-sans 
          relative z-10
          text-left sm:text-center
          opacity-90
        "
      >
        I turn ideas into production ready solutions <br></br> fast, scalable, and beautifully executed.
      </p>

      {/* CTA Buttons */}
      <div
        className="
          mt-8 sm:mt-10 
          flex flex-col sm:flex-row gap-4 
          relative z-10 
          w-full sm:w-auto
        "
      >
        {/* Contact Me */}
        <MotionLink
          href="/contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className={`
            relative flex items-center 
            px-6 py-3 
            rounded-full 
            border border-current 
            font-semibold shadow-lg hover:shadow-xl 
            group transition-all duration-300 
            overflow-hidden
            w-full sm:w-auto
            text-base
            ${currentTheme === "light" ? "text-on-surface" : "text-white"}
          `}
        >
          <span
            className="
              relative z-10 w-full text-center sm:text-center 
              transition-all duration-300 
              group-hover:-translate-x-3
            "
          >
            Contact Me
          </span>

          <Send
            size={18}
            className="
              absolute right-3 
              opacity-0 translate-x-2
              group-hover:opacity-100 group-hover:translate-x-0
              transition-all duration-300 ease-in-out z-10
            "
          />
        </MotionLink>

        {/* View Projects */}
        <MotionLink
          href="./about"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="
            relative flex items-center 
            px-6 py-3 
            rounded-full 
            border border-current 
            font-semibold shadow-lg hover:shadow-xl
            group transition-all duration-300 
            overflow-hidden
            w-full sm:w-auto
            text-base
          "
        >
          <span
            className="
              relative z-10 w-full text-center sm:text-center
              transition-all duration-300 
              group-hover:-translate-x-3
            "
          >
            View Projects
          </span>

          <Eye
            size={18}
            className="
              absolute right-3 
              opacity-0 translate-x-2
              group-hover:opacity-100 group-hover:translate-x-0
              transition-all duration-300 ease-in-out z-10
            "
          />
        </MotionLink>
      </div>
    </motion.section>
  );
}
