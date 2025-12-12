"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Icon } from "@iconify/react";

const projects = [
  {
    title: "HealthCare Website",
    year: 2025,
    description:
      "A modern physiotherapy clinic focused on restoring movement, relieving pain, and improving quality of life through personalized rehabilitation and expert care.",
    image: "./advika.png",
    tech: ["devicon:react", "devicon:nodejs", "devicon:express", "devicon:mongodb", "devicon:openai"],
    live: "https://www.advikaphysiotherapyclinic.com/",
    github: "https://github.com/anchalsahani/advikaphysiotherapyclinic",
  },
  {
    title: "CodeWrite – CodePen Clone",
    year: 2025,
    description:
      "A lightweight CodePen clone built using React, Material-UI, and CodeMirror. Supports real-time HTML, CSS, and JavaScript editing with instant live preview.",
    image: "./codewrite.png",
    tech: ["devicon:react", "devicon:materialui", "devicon:javascript"],
    live: "https://codewrite-chi.vercel.app/",
    github: "https://github.com/anchalsahani/codewrite",
  },
  {
    title: "Portfolio Website",
    year: 2025,
    description:
      "A fully responsive personal portfolio built with modern UI animations, smooth scrolling, and mobile-first design, deployed using Vercel.",
    image: "./portfolio.png",
    tech: ["devicon:html5", "devicon:css3", "devicon:javascript"],
    live: "https://anchal-sahani-portfolio.vercel.app/",
    github: "https://github.com/anchalsahani/my-portfolio",
  },
  {
  title: "Zentrok — Digital Marketing Agency Website",
  year: 2025,
  description:
    "A modern agency website featuring a fully custom UI, dynamic animations, responsive layouts, and a clean dark-tech theme — built to showcase services, workflow, and brand identity.",
  image: "./zentrok.png",
  tech: ["devicon:nextjs", "devicon:typescript", "devicon:tailwindcss"],
  live: "https://zentrok.vercel.app/",
  github: "https://github.com/anchalsahani/Zentrok",
  },

];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Heading Row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16">

          <div className="max-w-2xl space-y-4">
            <div
              className="inline-flex items-center px-4 py-1.5 rounded-full 
              border border-[var(--foreground)]/20 text-[var(--foreground)] text-sm font-medium"
            >
              <Icon icon="ph:suitcase-simple-duotone" className="mr-2" />
              Projects
            </div>

            <h2 className="text-5xl font-extrabold text-[var(--foreground)] leading-tight">
              Milestones in the <br /> learning journey
            </h2>

            <p className="text-[var(--foreground)] opacity-80 text-base leading-relaxed">
              Each project marks a step forward, showcasing my growth and journey as a developer.
              Explore how I&apos;ve tackled challenges and built solutions along the way.
            </p>
          </div>

          <a
            href="#"
            className="
              px-6 py-3 rounded-full border border-[var(--foreground)]/20 
              text-[var(--foreground)] hover:bg-[var(--foreground)]/10 
              transition-all duration-300 flex items-center gap-2
            "
          >
            View all projects <ExternalLink size={18} />
          </a>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <div
                className="
                  rounded-2xl overflow-hidden bg-[var(--surface-1000)]
                  border border-[var(--foreground)]/15
                  shadow-md hover:shadow-lg transition-all duration-300
                "
              >
                <img src={p.image} alt={p.title} className="w-full object-cover" />

                {/* Tech Icons Row */}
                <div className="flex gap-4 justify-center py-4 bg-[var(--surface-900)] border-t border-[var(--foreground)]/10">
                  {p.tech.map((icon, idx) => (
                    <Icon
                      key={idx}
                      icon={icon}
                      width="26"
                      height="26"
                      className="opacity-90 brightness-125"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 text-sm text-[var(--foreground)] opacity-70">{p.year}</div>

              <h3 className="text-xl font-semibold text-[var(--foreground)] mt-1">{p.title}</h3>

              <p className="text-[var(--foreground)] opacity-70 text-sm leading-relaxed mt-1">
                {p.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                <a
                  href={p.live}
                  target="_blank"
                  className="
                    flex items-center gap-2 px-4 py-2 text-sm rounded-full
                    border border-[var(--honey)] text-[var(--honey)]
                    hover:bg-[var(--honey)] hover:text-[var(--background)]
                    transition-all duration-300
                  "
                >
                  <ExternalLink size={16} /> Live
                </a>

                <a
                  href={p.github}
                  target="_blank"
                  className="
                    flex items-center gap-2 px-4 py-2 text-sm rounded-full
                    border border-[var(--foreground)]/30 text-[var(--foreground)]
                    hover:bg-[var(--foreground)] hover:text-[var(--background)]
                    transition-all duration-300
                  "
                >
                  <Github size={16} /> Code
                </a>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
