import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/profile";

function FeaturedCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-2xl overflow-hidden glass hover:border-amber/30 transition-colors group"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber/60 to-transparent" />

      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="p-8 lg:p-10">
          <div className="flex items-center gap-2 font-mono text-xs text-amber mb-4">
            <span className="px-2 py-0.5 rounded-full border border-amber/30 bg-amber/10">
              ⭐ Hero Project
            </span>
          </div>

          <h3 className="text-2xl lg:text-3xl font-bold text-text mb-2">
            {project.name}
          </h3>
          <p className="text-cyan font-mono text-sm mb-5">{project.tagline}</p>
          <p className="text-text-dim leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="mb-6">
            <div className="font-mono text-xs uppercase tracking-wider text-text-faint mb-3">
              Features
            </div>
            <div className="grid grid-cols-2 gap-2">
              {project.features.map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm text-text-dim">
                  <span className="text-amber mt-1.5 w-1 h-1 rounded-full bg-amber shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-7">
            {project.techStack.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.03] border border-border text-text-faint"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-mono px-5 py-2.5 rounded-full bg-amber text-[#0a0a0a] hover:bg-amber-soft transition-colors"
            >
              <GithubIcon size={16} /> View Code
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-mono px-5 py-2.5 rounded-full border border-border hover:border-border-hover transition-colors"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Architecture panel */}
        <div className="bg-black/30 border-t lg:border-t-0 lg:border-l border-border p-8 lg:p-10 flex flex-col justify-center">
          <div className="font-mono text-xs uppercase tracking-wider text-text-faint mb-4">
            Architecture flow
          </div>
          <div className="space-y-2 font-mono text-[13px]">
            {project.architecture.map((line, i) => (
              <div
                key={i}
                className="text-text-dim border-l-2 border-border pl-3 py-1 hover:border-cyan hover:text-text transition-colors"
              >
                {line}
              </div>
            ))}
          </div>
          {project.architectureNote && (
            <p className="mt-5 text-sm text-text-faint leading-relaxed">
              {project.architectureNote}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass rounded-2xl p-7 hover:border-border-hover transition-colors flex flex-col"
    >
      <h3 className="text-xl font-bold text-text mb-1">{project.name}</h3>
      <p className="text-cyan font-mono text-sm mb-4">{project.tagline}</p>
      <p className="text-text-dim text-sm leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      <div className="mb-5">
        <div className="grid grid-cols-1 gap-1.5">
          {project.features.slice(0, 4).map((f) => (
            <div key={f} className="flex items-start gap-2 text-sm text-text-dim">
              <span className="text-cyan mt-1.5 w-1 h-1 rounded-full bg-cyan shrink-0" />
              {f}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.slice(0, 6).map((t) => (
          <span
            key={t}
            className="text-xs font-mono px-2 py-1 rounded-md bg-white/[0.03] border border-border text-text-faint"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-mono text-text-dim hover:text-amber transition-colors"
        >
          <GithubIcon size={15} /> Code
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-mono text-text-dim hover:text-cyan transition-colors"
          >
            <ExternalLink size={15} /> Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured)!;
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="04 / Projects"
          title="Things I've shipped"
          description="Three production-style builds — one AI-powered, two foundational full-stack systems."
        />

        <div className="mb-8">
          <FeaturedCard project={featured} />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {others.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/Jagruti2004deore"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-text-dim hover:text-text transition-colors"
          >
            See all repositories on GitHub <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
