import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({text, link, buttonText}) => (
    <div className="info-box">
        <p className='text-center font-medium sm:text-xl'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>{buttonText} <img src={arrow} alt="arrow image" className='w-4 h-4 object-contain'/> </Link>
    </div>
)

const renderContent = {
    1 : (
        <h1 className='sm:text-xl sm:leading-snug text-center text-white neo-brutalism-blue py-4 px-8 mx-5'>Hi, I am <span className='font-semibold'>Prames</span>👋<br />A Software Engineer from India</h1>
    ),
    2 : (
        <InfoBox text={"Transformed ideas into fully functional projects, constantly pushing my skills and creativity to the next level."} link="/about" buttonText="Learn more"/>
    ),
    3 : (
        <InfoBox text={"Continuously exploring new technologies, turning challenges into opportunities to grow and innovate through hands-on experience."} link="/projects" buttonText="Visit my portfolio"/>
    ),
    4 : (
        <InfoBox text={"Need a project done or looking for a dev? I'm just a few keystrokes away"} link="/contact" buttonText="Let's talk"/>
    )
}

const Homeinfo = ({currentStage}) => {
  return renderContent[currentStage]
}

export default Homeinfo