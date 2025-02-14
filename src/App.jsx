// src/App.jsx

import HeroGradient from "./components/navbar/heroSection/HeroGradient";
import HeroMain from "./components/navbar/heroSection/HeroMain";
import { SubHeroSection } from "./components/navbar/heroSection/SubHeroSection";
import NavBarMain from "./components/navbar/NavBarMain";

const App = () => {
  return(
    <main className="font-body">
      <NavBarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
    </main>
  );
};

export default App;
