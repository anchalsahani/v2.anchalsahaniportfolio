"use client";

import Image from "next/image";
import { FiBook, FiBriefcase } from "react-icons/fi";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

/* ----------------------------------------
   Resume Data
------------------------------------------- */

const education = {
  school: "Maharaja Agrasen Institute Of Technology",
  degree: "B.Tech in Information Technology",
  period: "Aug 2023 – Jun 2027",
  gpa: "8.23 / 10",
  coursework:
    "Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, OOP (C++), Web Technologies",
};

const experiences = [
  {
    company: "ZENTROK PVT LTD",
    role: "Web Development Intern",
    period: "Jul 2025 – Sep 2025",
    bullets: [
      "Built and deployed production-grade applications using Next.js, TypeScript, and TailwindCSS.",
      "Implemented dynamic routing, REST API integrations, and reusable component architecture.",
      "Improved performance, responsiveness, and accessibility across key user flows.",
    ],
  },
  {
    company: "NCC MAIT",
    role: "Website Developer & Graphic Designer",
    period: "Aug 2023 – Jun 2024",
    bullets: [
      "Designed and developed the official NCC MAIT website.",
      "Optimized mobile UX and improved navigation flow.",
    ],
  },
];

/* ----------------------------------------
   Animation Variants
------------------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/* ----------------------------------------
   PAGE
------------------------------------------- */

export default function AboutPage() {
  return (
    <main className="text-[var(--foreground)] overflow-hidden">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-2 items-center">

          {/* LEFT: TEXT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-sm font-medium text-[var(--sun)] uppercase tracking-wide">
              About Me
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-[var(--sun)] whitespace-nowrap">
                Anchal Sahani
              </span>
            </h1>

            <p className="text-base sm:text-lg opacity-90 max-w-xl leading-relaxed">
              I’m a third-year IT undergraduate focused on building fast,
              scalable, and accessible web applications with strong attention
              to engineering quality and UI/UX polish.
            </p>

            <p className="text-base sm:text-lg opacity-90 max-w-xl">
              Currently seeking{" "}
              <span className="text-[var(--sun)] font-semibold">
                SDE / Frontend Internship
              </span>{" "}
              opportunities to work on real-world, high-impact systems.
            </p>
          </motion.div>


        </div>
      </section>

      {/* ---------------- EDUCATION + EXPERIENCE ---------------- */}
      <section className="py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 lg:grid-cols-3">

          {/* EDUCATION */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[var(--surface-1000)] p-6 rounded-2xl border border-[var(--sun)]/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <FiBook className="text-[var(--sun)] w-6 h-6" />
              <h3 className="text-xl font-semibold text-[var(--sun)]">
                Education
              </h3>
            </div>

            <h4 className="font-semibold">{education.school}</h4>
            <p className="opacity-80">{education.degree}</p>
            <p className="opacity-70">{education.period}</p>
            <p className="opacity-70 mt-1">GPA — {education.gpa}</p>

            <p className="mt-3 text-sm opacity-80 leading-relaxed">
              {education.coursework}
            </p>
          </motion.div>

          {/* EXPERIENCE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 bg-[var(--surface-1000)] p-6 rounded-2xl border border-[var(--foreground)]/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <FiBriefcase className="text-[var(--sun)] w-6 h-6" />
              <h3 className="text-xl font-semibold text-[var(--sun)]">
                Experience
              </h3>
            </div>

            <div className="space-y-7">
              {experiences.map((exp, index) => (
                <div key={index}>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <div>
                      <h4 className="font-semibold text-lg">{exp.company}</h4>
                      <p className="text-sm opacity-80">{exp.role}</p>
                    </div>
                    <p className="text-sm opacity-60">{exp.period}</p>
                  </div>

                  <ul className="mt-3 ml-5 list-disc text-sm opacity-80 space-y-1.5">
                    {exp.bullets.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* SKILLS */}
        <div className="mt-16">
          <Skills />
        </div>

        {/* PROJECTS */}
        <div className="mt-20">
          <Projects />
        </div>
      </section>

      <Footer />
    </main>
  );
}
