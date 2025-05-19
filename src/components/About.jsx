import React from 'react';
import aboutimg from '../assets/about.jpg';

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id="about">
      <div className='md:grid md:grid-cols-2 sm:py-16'>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0'>
          <div className='my-auto mx-6'>
            <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
            <p className='text-base lg:text-lg leading-relaxed'>
              I am a Computer Engineering professional skilled in:
              <br />
              <span className="font-semibold">JavaScript, HTML, CSS, C++, ReactJS, MongoDB, ExpressJS, NestJS, Next.js, and TypeScript</span>.
              <br /><br />
              I hold an international certificate from Udacity, demonstrating my commitment to continuous learning and growth in the tech industry.
              <br /><br />
              My diverse skill set enables me to effectively solve complex programming challenges and contribute to modern, scalable, and innovative software projects.
            </p>
          </div>
        </div>
        <img
          className='mx-auto rounded-3xl py-8 md:py-0'
          src={aboutimg}
          alt='About me'
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default About;
