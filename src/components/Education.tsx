import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "../data/profile";

export default function Education() {
  return (
    <section id="education" className="relative py-28 px-6 bg-surface/40">
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="06 / Education" title="Academic background" />

        <div className="grid sm:grid-cols-2 gap-5">
          {education.map((ed, i) => (
            <motion.div
              key={ed.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-xl p-6 hover:border-border-hover transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center mb-4">
                <GraduationCap size={18} className="text-amber" />
              </div>
              <div className="font-mono text-xs text-cyan mb-2">{ed.period}</div>
              <h3 className="font-semibold text-text mb-1 leading-snug">{ed.degree}</h3>
              <div className="text-sm text-text-dim mb-3">{ed.school}</div>
              <div className="text-sm font-mono text-text-faint">{ed.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
