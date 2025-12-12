"use client";

import Image from "next/image";
import { FiBook, FiBriefcase } from "react-icons/fi";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

/* ----------------------------------------
   Resume Data (static — safe for client)
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
   PAGE COMPONENT — CLEAN + DEPLOY SAFE
------------------------------------------- */

export default function AboutPage() {
  return (
    <main className="text-[var(--foreground)]">
      {/* ----------------------------------------
          HERO SECTION
      ------------------------------------------- */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-2 items-center">
          {/* TEXT SIDE */}
          <div>
            <p className="text-sm font-medium text-[var(--sun)]">About Me</p>

            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold whitespace-nowrap">
               Hi — I&apos;m Anchal Sahani.
            </h1>


            <p className="mt-4 text-base sm:text-lg opacity-90 max-w-xl">
              I&apos;m a third-year IT undergrad passionate about building fast,
              accessible and scalable web experiences. I focus on clean
              engineering, polished UI/UX, and production-ready development.
            </p>

            <p className="mt-4 text-base sm:text-lg opacity-90 max-w-xl">
              Currently seeking{" "}
              <span className="text-[var(--sun)] font-semibold">SDE Internships</span>{" "}
              to work on impactful real-world systems.
            </p>
          </div>

          {/* IMAGE SIDE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-2xl overflow-hidden bg-[var(--surface-900)] border border-[var(--foreground)]/10 shadow-xl">
              <Image
                src="/avatar.jpg"
                alt="Anchal Sahani"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------
          EDUCATION + EXPERIENCE SECTION
      ------------------------------------------- */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-3">
          {/* EDUCATION CARD */}
          <div className="bg-[var(--surface-1000)] p-6 rounded-2xl border border-[var(--sun)]/10">
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
          <div className="lg:col-span-2 bg-[var(--surface-1000)] p-6 rounded-2xl border border-[var(--foreground)]/10">
            <div className="flex items-center gap-3 mb-4">
              <FiBriefcase className="text-[var(--sun)] w-6 h-6" />
              <h3 className="text-xl text-[var(--sun)] font-semibold">Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-lg">{exp.company}</h4>
                      <p className="opacity-80 text-sm">{exp.role}</p>
                    </div>
                    <p className="opacity-60 text-sm">{exp.period}</p>
                  </div>

                  <ul className="mt-2 ml-4 list-disc text-sm opacity-80 space-y-1">
                    {exp.bullets.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SKILLS + PROJECTS */}
        <div className="mt-12">
          <Skills />
        </div>

        <div className="mt-16">
          <Projects />
        </div>
      </section>

      {/* ----------------------------------------
          CTA + FOOTER
      ------------------------------------------- */}
      <CTASection />
      <Footer />
    </main>
  );
}
