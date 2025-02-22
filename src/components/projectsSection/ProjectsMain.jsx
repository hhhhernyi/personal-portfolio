import ProjectsText from "./ProjectsText"
import SingleProject from "./SingleProject"
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
    {
        name:'Insurance CRM',
        year:'2025',
        align:'right',
        image:'../../images/GA-project3.jpg',
        link:'https://github.com/hhhhernyi/project-3-frontend',
        desc:'Full stack project built with MERN stack with 2 other coursemates, focusing on web development in collaborative environment',
        stack:'ReactJS, MaterialUI, Node.js, ExpressJS, MongoDB, Mongoose, Git and Github'
    },
    {
        name:'Attack on Titan Database ',
        year:'2025',
        align:'right',
        image:'../../images/GA-project2.jpg',
        link:'https://aot-database.netlify.app/',
        desc:'Fully responsive react app using RESTful API, following best practices and mobile-first development',
        stack:'React, React-Bootstrap, Git and Github'
    },
    {
        name:'You want to be millionaire or not?',
        year:'2024',
        align:'right',
        image:'../../images/GA-project1.jpg',
        link:'https://hhhhernyi.github.io/Project-1-Quiz/',
        desc:'Browser based javascript game, focusing on DOM manipulation as an introduction to web development',
        stack:'HTML, CSS, Javascript, Git and Github'
    }
]

const ProjectsMain = () => {
  return (
    <div id='projects' className="max-w-[1200px] mx-auto px-4">
        <motion.div 
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}>
            <ProjectsText/>
        </motion.div>
        
        <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
            {projects.map((item,index)=>(
                <SingleProject key={index} name={item.name} year={item.year} align={item.align} link={item.link} image={item.image} desc={item.desc} stack={item.stack}/>
            ))}
        </div>
    </div>
  )
}

export default ProjectsMain