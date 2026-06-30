import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";

export default function GithubStats() {
  return (
    <section className="relative py-28 px-6 bg-surface/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="05 / Activity"
          title="GitHub contributions"
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${profile.github.split("/").pop()}&show_icons=true&theme=transparent&hide_border=true&count_private=true&include_all_commits=true&title_color=22D3EE&icon_color=F0B429&text_color=8E8EA0`}
              alt="GitHub stats for Jagruti Deore"
              className="w-full"
              loading="lazy"
            />
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${profile.github.split("/").pop()}&layout=compact&hide_border=true&theme=transparent&title_color=22D3EE&text_color=8E8EA0`}
              alt="Most used languages"
              className="w-full"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
