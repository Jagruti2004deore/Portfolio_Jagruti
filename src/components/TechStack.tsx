import { techStack } from "../data/profile";

export default function TechStack() {
  const doubled = [...techStack, ...techStack];

  return (
    <section className="relative py-12 border-y border-border overflow-hidden">
      <div className="flex">
        <div className="flex animate-marquee shrink-0 gap-12 pr-12 items-center">
          {doubled.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="font-mono text-lg text-text-faint hover:text-amber transition-colors whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 32s linear infinite;
          width: max-content;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; }
        }
      `}</style>
    </section>
  );
}
