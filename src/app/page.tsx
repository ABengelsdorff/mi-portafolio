import Nav from "./components/navbar/nav";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Footer from "./components/footer";

export default function Home() {
  return <div className="relative z-10 min-h-screen bg-transparent">
    <Skills />
    <Projects />
    <Nav />
    <Footer />
  </div>;
}
