import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-sm text-text-faint">
          jagruti<span className="text-amber"></span> — built with React,
          TypeScript &amp; Framer Motion
        </span>
        <span className="font-mono text-xs text-text-faint">
          © {new Date().getFullYear()} {profile.fullName}
        </span>
      </div>
    </footer>
  );
}
