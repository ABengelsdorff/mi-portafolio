import Nav from "./components/navbar/nav";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Footer from "./components/footer";
import About from "./components/about";
import Hero from "./components/hero/hero";

export default function Home() {
  return <div className="relative z-10 min-h-screen bg-transparent">
    <Hero />
    <Skills />
    <Projects />
    <About />
    <Nav />
    <Footer />
  </div>;
}
