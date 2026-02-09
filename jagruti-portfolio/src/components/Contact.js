import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="contact-line">
      <div className="container contact-line-content">

        <h4 className="contact-name">Jagruti Deore</h4>

        <p className="contact-text">
          Designed with ❤️ and built using React & modern web technologies.
        </p>

        <div className="contact-icons">
          <a href="mailto:deorejagruti284@gmail.com">
            <FaEnvelope />
          </a>
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
        </div>

      </div>
    </section>
  );
};

export default Contact;
