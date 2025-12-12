"use client";

import React, { useEffect, useState } from "react";
import {
  Code2,
  LayoutPanelLeft,
  Server,
  Cpu,
  Database,
  TerminalSquare,
  GitBranch,
  Rocket,
  LucideIcon,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useTheme } from "next-themes";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const services: Service[] = [
  { title: "Frontend Development", description: "Building responsive, fast and beautiful user interfaces.", icon: LayoutPanelLeft },
  { title: "Backend Development", description: "Writing scalable server-side logic & REST/GraphQL APIs.", icon: Server },
  { title: "Full-Stack Engineering", description: "Connecting frontend + backend into seamless applications.", icon: Code2 },
  { title: "System Design", description: "Architecting reliable, scalable & secure applications.", icon: Cpu },
  { title: "Databases", description: "Designing SQL & NoSQL schemas with optimized queries.", icon: Database },
  { title: "DevOps & Automation", description: "CI/CD, deployments, version control, and cloud processes.", icon: GitBranch },
  { title: "Command Line & Tooling", description: "Building efficient workflows using CLI and developer tools.", icon: TerminalSquare },
  { title: "Performance Optimization", description: "Improving speed, memory usage, and scalability.", icon: Rocket },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function ServicesSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section id="services" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map((service, idx) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={idx}
                variants={item}
                className="
                  w-full p-8 rounded-xl 
                  border border-[var(--honey)] 
                  bg-[var(--surface-1000)]
                  relative overflow-hidden 
                  group transition-all duration-300 
                  flex flex-col items-center text-center
                "
                whileHover={{
                  scale: 1.0,
                  boxShadow:
                    theme === "dark"
                      ? "0 6px 28px rgba(180,200,255,0.10)"
                      : "0 6px 28px rgba(180,200,255,0.10)",
                }}
              >
                {/* Soft hover glow instead of full gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(100,140,255,0.12)] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 z-0" />

                {/* BACKGROUND BIG ICON (Tilt + darker hover) */}
                <Icon
                  size={120}
                  className="
                    absolute inset-0 m-auto 
                    text-[var(--foreground)]
                    opacity-10 
                    group-hover:opacity-25 
                    group-hover:rotate-6
                    transition-all duration-300 
                    z-0
                  "
                />

                {/* Foreground content */}
                <div className="relative z-10 flex flex-col items-center transition-colors duration-300">
                  <Icon className="mb-4 text-4xl text-[var(--foreground)] opacity-90 group-hover:opacity-100 transition-all" />

                  <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">
                    {service.title}
                  </h3>

                  <p className="text-[var(--foreground)] opacity-75">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
