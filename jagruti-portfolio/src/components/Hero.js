import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaXTwitter,
} from "react-icons/fa6";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero-modern">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Avatar */}
        <div className="avatar-wrapper">
          <img
            src="/assets/myphoto.png"
            alt="Jagruti Deore"
            className="avatar"
          />
        </div>

        {/* Heading */}
        <h1>
          Hey, I’m <span className="highlight">Jagruti</span> ✨
          <br />
          <span className="gradient-text">A Software Developer</span>
        </h1>

        {/* Description */}
        <p className="hero-desc">
          A final-year Computer Science Engineering student and full-stack
          developer with strong expertise in Java, Spring Boot, and REST APIs,
          focused on building secure, scalable, and real-world web applications.
        </p>

        {/* Buttons */}
        <div className="hero-actions">
          <a
  href="https://drive.google.com/file/d/1HlSptgrN05HBh4J_eye2rJ6lLI0sgVSz/view?usp=drive_link"
  target="_blank"
  rel="noreferrer"
  className="hero-btn primary"
>
  View Resume
</a>


          <a href="#projects" className="hero-btn secondary">
            View Projects
          </a>
        </div>

        {/* Social Icons */}
        <div className="hero-socials">
          <a
            href="https://github.com/Jagruti2004deore"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jagruti-deore"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:deorejagruti284@gmail.com">
            <FaEnvelope />
          </a>
          <a href="#">
            <FaXTwitter />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
