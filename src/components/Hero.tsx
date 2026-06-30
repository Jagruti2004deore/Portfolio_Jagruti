import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/profile";
import MagneticButton from "./MagneticButton";

const flowLines = [
  { text: "User", color: "text-text" },
  { text: "→ React Frontend", color: "text-cyan" },
  { text: "→ REST API", color: "text-text-dim" },
  { text: "→ Spring Boot", color: "text-amber" },
  { text: "→ Service Layer", color: "text-text-dim" },
  { text: "→ GitHub API & PostgreSQL", color: "text-text-dim" },
  { text: "→ Spring AI", color: "text-amber" },
  { text: "→ Ollama LLM", color: "text-cyan" },
  { text: "→ AI Response", color: "text-cyan-soft" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden noise-bg"
    >
      {/* Aurora gradient backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-20 w-[40rem] h-[40rem] bg-amber/20 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-20 w-[36rem] h-[36rem] bg-cyan/15 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--color-bg)_90%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 font-mono text-xs tracking-wide text-text-dim border border-border rounded-full px-3 py-1.5 mb-6"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              {profile.availability}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight leading-[1.05] text-text"
            >
              {profile.name}
              <span className="block mt-2 text-gradient">
                Java Full Stack Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-lg text-text-dim max-w-lg leading-relaxed"
            >
              {profile.tagline} I build secure, scalable backends in{" "}
              <span className="text-text">Java &amp; Spring Boot</span>, ship
              real-time and AI-integrated features end to end, and deploy
              them like they're going to production — because they usually are.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <MagneticButton href={profile.resumeUrl} target="_blank" rel="noreferrer" variant="primary">
                Download Resume
              </MagneticButton>
              <MagneticButton href="#projects" variant="secondary">
                View Projects
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 flex items-center gap-5"
            >
              {[
                { icon: GithubIcon, href: profile.github, label: "GitHub" },
                { icon: LinkedinIcon, href: profile.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-text-dim hover:text-text hover:border-border-hover hover:-translate-y-0.5 transition-all"
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: signature terminal panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="glass rounded-2xl overflow-hidden shadow-[0_0_60px_-15px_rgba(240,180,41,0.15)]">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-3 font-mono text-xs text-text-faint">
                  repopilot-ai — request flow
                </span>
              </div>
              <div className="p-6 font-mono text-[13px] leading-7">
                {flowLines.map((line, i) => (
                  <motion.div
                    key={line.text}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.12, duration: 0.4 }}
                    className={line.color}
                  >
                    {line.text}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + flowLines.length * 0.12 + 0.2 }}
                  className="mt-3 pt-3 border-t border-border text-text-faint"
                >
                  <span className="text-emerald-400">✓</span> AI Response →
                  Frontend Dashboard
                </motion.div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full rounded-2xl border border-border/60" />
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-faint hover:text-text-dim transition-colors"
        aria-label="Scroll to about"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}
