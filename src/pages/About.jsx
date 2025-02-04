import { educations, skills } from '../constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

const About = () => {
    return (
        <section className='max-container'>
            <h1 className='head-text'>Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Prames</span></h1>
            <div className="mt-5 text-slate-500 flex flex-col gap-3">
                <p>Software Engineer based in India, specializing in technical education through hands-on learning and building applications</p>
            </div>
            <div className="py-10 flex flex-col">
                <h3 className='subhead-text'>My Skills</h3>
                <div className="flex flex-wrap gap-12 mt-16">
                    { skills.map((skill) => (
                        <div className="block-container w-20 h-20">
                            <div className="btn-back rounded-xl"/>
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img src={skill.imageUrl} alt={skill.name} className='h-1/2 w-1/2'/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="py-16">
                <h3 className='subhead-text'>Education</h3>
                <div className="mt-5 text-slate-500 flex flex-col gap-3">
                    <p>I have dedicated myself to academic excellence, continually building a strong foundation of knowledge. Below is a summary of my educational journey:</p>
                </div>
                <div className="mt-12">
                    <VerticalTimeline>
                        {
                            educations.map((education) => (
                                <VerticalTimelineElement 
                                key={education.company_name} 
                                date={education.date}
                                icon={
                                    <div className='flex justify-center items-center w-full h-full'>
                                        <img src={education.icon} alt={education.institution_name} className='w-[60%] h-[60%] object-contain'/>
                                    </div>
                                }
                                iconStyle={{
                                    background: education.iconBg
                                }}
                                contentStyle={{
                                    borderBottom:'8px',
                                    borderStyle:'solid',
                                    boxShadow:'none',
                                    borderBottomColor:education.iconBg
                                }}
                                >
                                    <div className="">
                                        <h3 className='text-black text-xl font-poppins font-semibold'>{education.title}</h3>
                                        <p className='text-black-500 font-medium font-base'>{education.institution_name}</p>
                                    </div>
                                    <ul className='list-disc my-5 ml-5 space-y-2'>
                                        {
                                            education.points.map((point, index) => (
                                                <li key={`education-point-${index}`} className='text-black-500/50 font-normal text-sm pl-1'>
                                                    {point}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </VerticalTimelineElement>
                            ))
                        }
                    </VerticalTimeline>
                </div>
            </div>
            <hr className='border-slate-200'/>
            <CTA/>
        </section>
    )
}

export default About