import Image from "next/image";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Testimonial from "@/components/sections/Testimonial";
import Projects from "@/components/sections/Projects";
import Github from "@/components/sections/Github";



export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero/>
      <Skills />
      <Testimonial />
      <Projects />
      {/*Github Status section*/}
      <Github />
    </main>
  );
}
