import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageLoader } from "@/components/ui/PageLoader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Journey } from "@/components/sections/Journey";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Certificates } from "@/components/sections/Certificates";
import { Github } from "@/components/sections/Github";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Projects />
        <Education />
        <Certificates />
        <Github />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
