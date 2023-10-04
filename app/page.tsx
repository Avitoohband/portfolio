import About from "@/components/About";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Conteact from "@/components/Conteact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />    
      <Projects />
      <Skills />
      <Experience />
      <Conteact />
    </main>
  )
}
