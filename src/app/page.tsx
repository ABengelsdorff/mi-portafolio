import Nav from "./components/navbar/nav";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import Hero from "./components/hero/hero";
import Contact from "./components/contact/contact";

export default function Home() {
  return <div className="relative z-10 min-h-screen bg-transparent">
    <Nav />
    <Hero />
    <Skills />
    <Projects />
    <About />
    <Contact />
    <Footer />
  </div>;
}
