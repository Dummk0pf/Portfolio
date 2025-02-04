import { Link } from "react-router-dom"
import { projects } from "../constants"
import { arrow } from "../assets/icons"
import CTA from "../components/CTA"

const Projects = () => {
  return (
    <section className='max-container'>
        <h1 className='head-text'>My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span></h1>
        <div className="mt-5 text-slate-500 flex flex-col gap-3">
            <p>I've had the opportunity to work on several projects. Each one has helped me grow both technically and personally. If any of them catch your interest, I warmly invite you to take a look at the code and share any feedback or suggestions. I’m always open to feedback and opportunities for improvement!</p>
        </div>

        <div className="flex flex-wrap my-20 gap-16">
            {
                projects.map((project) => (
                    <div className="lg:w-[400px] w-full" key={project.name}>
                        <div className="block-container w-12 h-12">
                            <div className={`btn-back rounded-xl ${project.theme}`}/>
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img src={project.iconUrl} alt={project.description}  className="w-1/2 h-1/2 object-contain" />
                            </div>
                        </div>
                        <div className="mt-5 flex flex-col">
                            <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
                            <p className="mt-2 text-slate-500">{project.description}</p>
                            <div className="flex items-center mt-5 font-poppins gap-2">
                                <Link 
                                to={project.link} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-blue-600"
                                >Github Link</Link>
                                <img src={arrow} alt="arrow" className="h-4 w-4 object-contain"/>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

        <hr className="border-slate-200"/>
        <CTA/>
    </section>
  )
}

export default Projects