import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/profile";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="03 / Experience" title="Where I've worked" />

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-[5px] md:left-[7px] top-2 bottom-2 w-px bg-border" />

          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative mb-14 last:mb-0"
            >
              <span className="absolute -left-8 md:-left-10 top-1.5 w-3 h-3 rounded-full bg-amber shadow-[0_0_0_4px_rgba(240,180,41,0.15)]" />

              <div className="font-mono text-xs text-cyan mb-1">{job.period}</div>
              <h3 className="text-xl font-semibold text-text">{job.role}</h3>
              <div className="text-text-dim mb-4">{job.company}</div>

              <ul className="space-y-2.5">
                {job.points.map((p, pi) => (
                  <li key={pi} className="flex gap-3 text-text-dim leading-relaxed">
                    <span className="text-amber mt-2 w-1 h-1 rounded-full bg-amber shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
