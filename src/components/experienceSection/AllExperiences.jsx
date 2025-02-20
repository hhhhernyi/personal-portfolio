import SingleExperience from './SingleExperience'
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: 'Senior Analog Layout Engineer',
    company: 'Marvell Tech',
    date: '2022-2024',
    responsibilities: [ 
      'Led a team of 15 engineers to complete a project', 
      'Developed training materials for junior engineers',
      'Coordinated with overseas stakeholders to manage project timeline'
    ]
  },
  {
    job: 'Demand Planner',
    company: 'Halliburton',
    date: '2024-2024',
    responsibilities: [ 
      'Optimize inventory management by reducing stranded inventory by $800,000', 
      'Collaborated with procurement team to improve demand forecasting accuracy by 50%',
      'Manage multi-location materials using SAP',
    ]
  }, {
    job: 'Software Engineering Student',
    company: 'General Assembly',
    date: '2022-2025',
    responsibilities: [ 
      'Completed a 12-week course on full-stack software development', 
      'Developed 4 different projects using MERN stack',
      'Collaborated with other students on a project focusing on version control']
  },
]

const AllExperiences = () => {
  return (
    <div className='flex md:flex-row sm:flex-col-reverse items-center justify-between'>
      {experiences.map((experience, index)=>(
        <>
        <SingleExperience key={index} experience={experience}/>
        {index < 2 ? 
        <motion.div 
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}>
          <FaArrowRight className='text-6xl text-orange lg:block sm:hidden'/>
          </motion.div> :null}
        </>
        
))}
    </div>
  )
}

export default AllExperiences