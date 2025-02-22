import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        Hi, I'm Hern Yi, an aspiring frontend developer with a passion for
        creating engaging and stunning web pages. <br />
        In late 2024, i made the decision to follow my passion and enroll in
        General Assembly's Software Engineering Immersive bootcamp. With my
        background in engineering, i have developed a keen eye for detail and
        have unique perspectives on challenges. Outside of coding, i really
        enjoy continuous learning within the tech field, and i have interest in
        Artificial Intelligence and Machine learning as well. <br />I am looking
        forward to connecting with individuals who share the same passion and
        interest as me!
      </p>
      <button 
      className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">
        <Link
          to="projects"
          smooth={true}
          spy={true}
          duration={500}
          offset={-130}
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
