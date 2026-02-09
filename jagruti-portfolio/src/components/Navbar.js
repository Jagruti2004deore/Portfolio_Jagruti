import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const Navbar = () => {
  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-dark bg-dark px-4 fixed-top"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Brand */}
      <a
        className="navbar-brand fw-bold d-flex align-items-center gap-2"
        href="#home"
      >
        <FaCode color="#4dabf7" />
        <span>Jagruti</span>
      </a>

      {/* Menu */}
      <ul className="navbar-nav ms-auto d-flex flex-row gap-4">
        <li className="nav-item">
          <a className="nav-link" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#experience">Experience</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-info" href="#contact">Contact</a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
