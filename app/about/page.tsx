"use client";

import Image from "next/image";
import { FiBook, FiBriefcase } from "react-icons/fi";
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
      "Built and deployed production-grade applications using Next.js, TypeScript & TailwindCSS.",
      "Implemented dynamic routing, API integrations, and reusable component architecture.",
      "Improved UI/UX consistency, responsiveness, and accessibility across pages.",
    ],
  },
  {
    company: "NCC MAIT",
    role: "Website Developer & Graphic Designer",
    period: "Aug 2023 – Jun 2024",
    bullets: [
      "Developed and maintained the official NCC MAIT website.",
      "Enhanced user flow and optimized mobile responsiveness.",
    ],
  },
];

/* ----------------------------------------
   PAGE — MOBILE CLEAN + RESPONSIVE
------------------------------------------- */

export default function AboutPage() {
  return (
    <main className="text-[var(--foreground)]">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-2 items-center">

          {/* TEXT SIDE */}
          <div className="text-left space-y-4">
            <p className="text-sm font-medium text-[var(--sun)]">About Me</p>

           <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Hi 👋 I&apos;m <span className="whitespace-nowrap">Anchal Sahani.</span>
           </h1>



            <p className="text-base sm:text-lg opacity-90 max-w-xl">
              I&apos;m a third-year IT undergrad passionate about building fast,
              accessible and scalable web experiences. I focus on clean engineering,
              polished UI/UX, and production-ready development.
            </p>

            <p className="text-base sm:text-lg opacity-90 max-w-xl">
              Currently seeking{" "}
              <span className="text-[var(--sun)] font-semibold">SDE Internships</span>{" "}
              to work on impactful real-world systems.
            </p>
          </div>



        </div>
      </section>

      {/* ---------------- EDUCATION + EXPERIENCE ---------------- */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 sm:gap-10 lg:grid-cols-3">

          {/* EDUCATION CARD */}
          <div className="bg-[var(--surface-1000)] p-6 rounded-2xl border border-[var(--sun)]/10 text-left">
            <div className="flex items-center gap-3 mb-4">
              <FiBook className="text-[var(--sun)] w-6 h-6" />
              <h3 className="text-xl text-[var(--sun)] font-semibold">Education</h3>
            </div>

            <h4 className="font-semibold">{education.school}</h4>
            <p className="opacity-80">{education.degree}</p>
            <p className="opacity-70">{education.period}</p>
            <p className="opacity-70 mt-1">GPA — {education.gpa}</p>

            <p className="mt-3 text-sm opacity-80 leading-relaxed">
              {education.coursework}
            </p>
          </div>

          {/* EXPERIENCE CARD */}
          <div className="lg:col-span-2 bg-[var(--surface-1000)] p-6 rounded-2xl border border-[var(--foreground)]/10 text-left">
            <div className="flex items-center gap-3 mb-4">
              <FiBriefcase className="text-[var(--sun)] w-6 h-6" />
              <h3 className="text-xl text-[var(--sun)] font-semibold">Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                    <div>
                      <h4 className="font-semibold text-lg">{exp.company}</h4>
                      <p className="opacity-80 text-sm">{exp.role}</p>
                    </div>

                    <p className="opacity-60 text-sm">{exp.period}</p>
                  </div>

                  <ul className="mt-2 ml-5 list-disc text-sm opacity-80 space-y-1">
                    {exp.bullets.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* SKILLS */}
        <div className="mt-12">
          <Skills />
        </div>

        {/* PROJECTS */}
        <div className="mt-16">
          <Projects />
        </div>
      </section>

      {/* ---------------- CTA + FOOTER ---------------- */}
      <Footer />
    </main>
  );
}
