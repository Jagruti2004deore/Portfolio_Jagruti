import { motion } from "framer-motion";
import { fadeUp } from "../animations/motionVariants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/projects.css";

const projects = [
  {
    title: "StayUp – Hotel Booking Platform",
    tech: "MERN Stack",
    image: "/assets/stayup.png",
    github: "https://github.com/Jagruti2004deore/StayUp-BookNStay-website-",
    live: "#",
  },
  {
    title: "Zerodha Trading Platform Clone",
    tech: "React • Node • MongoDB",
    image: "/assets/zerodha.png",
    github: "https://github.com/Jagruti2004deore/Zerodha-Clone",
    live: "#",
  },
  {
    title: "Hospital Appointment Management System",
    tech: "React • Spring Boot • PostgreSQL",
    image: "/assets/management.png",
    github: "https://github.com/Jagruti2004deore/hospital-appointment-system",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">

        <motion.h2
          className="projects-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          My <span>Projects</span>
        </motion.h2>

        <motion.p
          className="projects-subtitle"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          A selection of real-world projects I’ve built using modern web
          technologies.
        </motion.p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <span className="project-tech">{project.tech}</span>
                <h3>{project.title}</h3>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
