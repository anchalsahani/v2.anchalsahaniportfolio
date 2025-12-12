"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PremiumCTA() {
  const { resolvedTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = resolvedTheme || theme || "light";

  return (
    <section className="relative flex items-center justify-center min-h-[55vh] px-6">
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor:
            currentTheme === "dark"
              ? "rgba(0,0,0,0.35)"
              : "rgba(0,0,0,0.08)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center">
        <motion.h2
          className="font-extrabold text-3xl md:text-3xl mb-4 leading-tight"
          style={{ color: "var(--sun)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let&apos;s Build Something Exceptional Together
        </motion.h2>

        <motion.p
          className="text-sm md:text-lg mb-6 opacity-90"
          style={{ color: "var(--foreground)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I specialize in crafting clean, scalable, and high-performance 
          digital experiences — from full-stack applications to modern UI 
          systems. If you&apos;re looking to collaborate, hire, or bring an idea 
          to life, I&apos;m ready.
        </motion.p>

        {/* FIXED CTA BUTTON */}
        <Link href="/contact">
          <motion.span
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="
              relative overflow-hidden flex items-center justify-center
              px-6 py-3 rounded-full font-semibold 
              border border-current
              group transition-all duration-300 shadow-lg hover:shadow-xl
              pr-10 text-sm sm:text-base
              text-[var(--foreground)]
              cursor-pointer
            "
          >
            <span className="relative z-10">Let&apos;s Work</span>

            <ArrowRight
              size={18}
              className="
                absolute right-4 opacity-0 
                group-hover:opacity-100 group-hover:translate-x-1 
                transition-all duration-300 ease-in-out z-10
              "
            />
          </motion.span>
        </Link>
      </div>
    </section>
  );
}
