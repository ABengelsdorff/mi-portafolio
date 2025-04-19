import Projects from "./components/projects";
import Skills from "./components/skills";

export default function Home() {
  return <div className="relative z-10 min-h-screen bg-transparent">
    <Skills />
    <Projects />
  </div>;
}
