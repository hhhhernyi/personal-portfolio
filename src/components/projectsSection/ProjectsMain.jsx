import ProjectsText from "./ProjectsText"
import SingleProject from "./SingleProject"

const projects = [
    {
        name:'project1',
        year:'year1',
        align:'right',
        image:'../../images/website-img-1.jpg',
        link:'#'
    },
    {
        name:'project2',
        year:'year2',
        align:'right',
        image:'../../images/website-img-1.jpg',
        link:'#'
    },
    {
        name:'project3',
        year:'year3',
        align:'right',
        image:'../../images/website-img-1.jpg',
        link:'#'
    },
    {
        name:'project4',
        year:'year4',
        align:'right',
        image:'../../images/website-img-1.jpg',
        link:'#'
    }
]

const ProjectsMain = () => {
  return (
    <div id='projeccts' className="max-w-[1200px] mx-auto px-4">
        <ProjectsText/>
        <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
            {projects.map((item,index)=>(
                <SingleProject key={index} name={item.name} year={item.year} align={item.align} image={item.image}/>
            ))}
        </div>
    </div>
  )
}

export default ProjectsMain