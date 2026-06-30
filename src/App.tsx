import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import GithubStats from "./components/GithubStats";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-bg min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Experience />
        <Projects />
        <GithubStats />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
