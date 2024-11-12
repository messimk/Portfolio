import React from 'react'
import aboutimg from '../assets/about.jpg'
const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12'  id="about">
      <div className='md:grid md:grid-cols-2 sm:py-16'>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0'>
          <div className='my-auto mx-6'>
           <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
           <p className='text-base lg:text-lg'>
            I am a Computer Engineering professional skilled in <br/>
            JavaScript,HTML,CSS,C++,ReactJS,MongoDB and ExpressJS.<br/>
            I possess an international certificate from Udacity,<br/>
            demonstrating my commitment to continuous learning<br/>
            and growth in the tech field. My diverse skill set<br/>
            allows me to tackle various programming challenges<br/>
            effectively and contribute to innovative projects in<br/>
            the software development industry.

           </p>
          </div>
        </div>
        <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutimg} alt='' width={300} height={300} />
      </div>
    </div>
  )
}

export default About
