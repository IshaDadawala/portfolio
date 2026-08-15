import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsSheet from "@/components/SkillsSheet";
import ProjectsPreview from "@/components/ProjectsPreview";
import Experience from "@/components/Experience";
 import EducationAchievements from "@/components/EducationAchievements";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <SkillsSheet />
        <ProjectsPreview />
        <Experience />
        <EducationAchievements />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
