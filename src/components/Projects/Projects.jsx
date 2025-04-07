import React from 'react'
import Navbar from '../Home/Navbar'
import ProjectCard from './ProjectCard'
import { projects } from "../../constants";
import Footer from '../footer/Footer';

const Projects = () => {
  return (
    <div className='text-white w-full'>
      <Navbar />
      <div className='w-[90%] md:w-[60%] mx-auto my-10 text-center'>
        <h1 className='text-6xl font-clashDisplay'>Our Projects</h1>
        <p className='text-xl font-DMSans mt-3'>Our team comprises a diverse pool of members, which facilitates us to work on projects across various domains. We have set foot into multiple facets of robotics over the years, including mobile robotics, humanoid robotics, swarm robotics, and human-robot interaction, among others, in fields such as healthcare, industry, assistive tech, and agriculture, to name a few.</p>
      </div>
      <div className="flex justify-center w-[90%] mx-auto">
        <div className='grid md:grid-cols-2 grid-flow-row'>
          {projects.map((project, index)=>(
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
      <Footer />
    </div> 
  )
}

export default Projects