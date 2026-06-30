import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Counter from "./Counter";
import { profile, stats } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="01 / About" title="The short version" />

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-text-dim text-lg leading-relaxed"
          >
            <p>{profile.summary}</p>
            <p>
              Most recently, I built{" "}
              <span className="text-text font-medium">RepoPilot AI</span>,
              which pushed me past traditional CRUD work into wiring a
              Spring Boot backend directly to a local LLM through Spring AI
              and Ollama — the kind of integration work I want to keep doing.
            </p>
            <p>
              Based in <span className="text-text">{profile.location}</span>,
              currently {profile.availability.toLowerCase()}.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-xl p-5 hover:border-border-hover transition-colors"
              >
                <div className="font-mono text-3xl font-bold text-gradient">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs text-text-dim leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
