import SingleExperience from './SingleExperience'
import { FaArrowRight } from "react-icons/fa";

const experiences = [
  {
    job: 'Senior Analog Layout Engineer',
    company: 'Marvell Tech',
    date: '2022-2024',
    responsibilities: [ 'task1', 'task2','task3', 'task4']
  },
  {
    job: 'Demand Planner',
    company: 'Halliburton',
    date: '2024-2024',
    responsibilities: [ 'task1', 'task2','task3', 'task4']
  }, {
    job: 'Software engineering student',
    company: 'General Assembly',
    date: '2022-2025',
    responsibilities: [ 'task1', 'task2','task3', 'task4']
  },
]

const AllExperiences = () => {
  return (
    <div className='flex md:flex-row sm:flex-col-reverse items-center justify-between'>
      {experiences.map((experience, index)=>{
        
        <SingleExperience key={index} experience={experience}/>
        {index<2? <FaArrowRight className='text-6xl text-orange lg:block sm:hidden'/> :null}
        
        
})}
    </div>
  )
}

export default AllExperiences