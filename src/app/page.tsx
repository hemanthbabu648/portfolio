import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <div className="bg-com-primary text-white pt-5 flex flex-col gap-5 lg:gap-14">
      <section id="hero">
        <Hero />
      </section>
      <section id="aboutme">
        <About />
      </section>
      <section id="projects">
        <Projects isLandingPage />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
