import { Home } from "./components/Home"
import { Headrer } from "./components/header"
import { useRef } from "react";
import { Contact } from "./components/Contact";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
function App() {

  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToSection = (ref: React.MutableRefObject<any>) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-purple-500">
      <div className='flex justify-center sticky z-2 top-2 mb-4'>
        <Headrer scrollToHome={() => scrollToSection(homeRef)}
          scrollToExperience={() => scrollToSection(experienceRef)}
          scrollToProjects={() => scrollToSection(projectsRef)}
          scrollToSkills={() => scrollToSection(skillsRef)}
          scrollToContact={() => scrollToSection(contactRef)} />
      </div>
      <div>
        <section ref={homeRef} id="home">
          <Home />
        </section>
        <section ref={experienceRef} id="experience">
          <Experience />
        </section>
        <section ref={skillsRef} id="skills">
          <Skills />
        </section>
        <section ref={projectsRef} id="projects">
          <Projects />
        </section>
        <section ref={contactRef} id="contact">
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default App
