import { motion } from "framer-motion";
import { fadeUp } from "../animations/motionVariants";
import "../styles/experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">

        <motion.h2
          className="experience-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="timeline">

          {/* TIMELINE DOT */}
          <span className="timeline-dot"></span>

          <motion.div
            className="experience-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="role">Software Developer Intern</h3>

            <p className="company">
              Innotronix Labs & Trading, Pune
            </p>

            <p className="duration">
              Sept 2025 – Nov 2025
            </p>

            <ul className="experience-points">
              <li>
                Worked on frontend and backend features for internal dashboards
              </li>
              <li>
                Integrated REST APIs and resolved bugs across multiple modules
              </li>
              <li>
                Assisted in documentation, requirement analysis, and tool evaluation
              </li>
              <li>
                Supported QA by writing and executing test cases
              </li>
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
