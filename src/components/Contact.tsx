import { motion } from "framer-motion";
import { Mail, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/profile";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[30rem] bg-gradient-to-r from-amber/10 to-cyan/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-xs tracking-[0.2em] uppercase text-cyan mb-4">
            07 / Contact
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-text tracking-tight mb-6">
            Let's build something <span className="text-gradient">worth shipping.</span>
          </h2>
          <p className="text-text-dim text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Open to full-time Java Full Stack / SDE roles. If you're hiring,
            or just want to talk about Spring AI, RAG, or real-time systems —
            my inbox is open.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <MagneticButton href={`mailto:${profile.email}`} variant="primary">
              <Mail size={16} /> {profile.email}
            </MagneticButton>
          </div>

          <div className="flex items-center justify-center gap-5">
            {[
              { icon: GithubIcon, href: profile.github, label: "GitHub" },
              { icon: LinkedinIcon, href: profile.linkedin, label: "LinkedIn" },
              { icon: Code2, href: profile.leetcode, label: "LeetCode" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-11 h-11 flex items-center justify-center rounded-full border border-border text-text-dim hover:text-text hover:border-border-hover hover:-translate-y-0.5 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
