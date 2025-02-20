import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "Javascript",
    icon: IoLogoJavascript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "NodeJS",
    icon: FaNode,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    skill: "Python",
    icon: FaPython,
  }
];

const AllSkills = () => {
  return <div>
    <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index)=>(
          <motion.div  
          key={index}
          variants={fadeIn("up", `0.${index}`)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}> 
            <SingleSkill  text={item.skill} imgSvg={<item.icon/>}/>
          </motion.div>
             
        ))}
    </div>
  </div>;
};

export default AllSkills;
