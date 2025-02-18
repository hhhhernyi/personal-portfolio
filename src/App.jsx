// src/App.jsx

import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import HelperSection from "./components/HelperSection";
import AboutMeMain from "./components/navbar/aboutMeSection/AboutMeMain";
import HeroGradient from "./components/navbar/heroSection/HeroGradient";
import HeroMain from "./components/navbar/heroSection/HeroMain";
import { SubHeroSection } from "./components/navbar/heroSection/SubHeroSection";
import NavBarMain from "./components/navbar/NavBarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";

const App = () => {
  return(
    <main className="font-body">
      <NavBarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMeMain />
      <HelperSection />
    </main>
  );
};

export default App;
