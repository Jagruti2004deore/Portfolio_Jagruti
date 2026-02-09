import { motion } from "framer-motion";
import { fadeUp } from "../animations/motionVariants";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiJavascript,
  SiSpringboot,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiExpress,
  SiPostman,
} from "react-icons/si";
import "../styles/skills.css";

const skillSections = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "SQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Spring Security", icon: <SiSpringboot /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST APIs", icon: <FaNodeJs /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGitAlt /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">

        <motion.h2
          className="skills-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          My <span>Skills</span>
        </motion.h2>

        <motion.p
          className="skills-subtitle"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Technologies and tools I use to build secure, scalable, and modern web
          applications.
        </motion.p>

        {skillSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="skills-group">

            <motion.h3
              className="skills-group-title"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {section.title}
            </motion.h3>

            <div className="skills-pill-grid">
              {section.skills.map((skill, index) => (
                <motion.div
                  className="skill-pill"
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                >
                  <span className="pill-icon">{skill.icon}</span>
                  <span className="pill-text">{skill.name}</span>
                </motion.div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;
