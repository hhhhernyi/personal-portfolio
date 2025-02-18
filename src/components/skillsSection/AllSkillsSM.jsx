
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa6";

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

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
        {skills.map((item,index)=>(
            <div key={index} className="flex flex-col items-center">
                <item.icon className="text-7xl text-orange"/>
                <p className="text-center mt-4 text-white">{item.skill}</p>
            </div>
        ))}
    </div>
  )
}

export default AllSkillsSM