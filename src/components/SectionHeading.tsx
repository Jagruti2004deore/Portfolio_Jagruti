import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 ${align === "center" ? "text-center mx-auto" : ""}`}
    >
      <div className="flex items-center gap-3 mb-3 font-mono text-xs tracking-[0.2em] uppercase text-cyan justify-center md:justify-start" style={{ justifyContent: align === "center" ? "center" : "flex-start" }}>
        <span className="w-6 h-px bg-cyan/60" />
        {eyebrow}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-text tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-dim max-w-xl text-base leading-relaxed" style={{ marginInline: align === "center" ? "auto" : undefined }}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
