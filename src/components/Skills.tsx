import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/profile";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="02 / Skills"
          title="What I actually work with"
          description="Grouped by where it sits in the stack — not a tag cloud."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.05 }}
              className="glass rounded-xl p-6 hover:border-border-hover transition-colors"
            >
              <h3 className="font-mono text-xs tracking-[0.15em] uppercase text-cyan mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-lg bg-white/[0.03] border border-border text-text-dim hover:text-text hover:border-amber/40 hover:bg-amber/5 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
