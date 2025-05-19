import React from 'react';
import css from '../assets/css.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import tailwind from '../assets/tailwind.png';
import react from '../assets/react.png';
import nodeJS from '../assets/nodeJS.png';
import expressJS from '../assets/expressJS.jpeg';
import mongodb from '../assets/MongoDB.jpeg';
import github from '../assets/github.png';
import nestjs from '../assets/Nest.png';
import nextjs from '../assets/Next.jpg';
import TS from '../assets/TS.jpg';

const Skills = () => {
  return (
    <div className='w-full bg-black text-gray-400 py-10' id='skills'>
      <div className='max-w-[1200px] mx-auto'>
        <h2 className='text-center text-3xl md:text-4xl font-bold text-white mb-6'>
          My Tech Stack
        </h2>

        <div className='overflow-x-auto'>
          <div className='flex gap-8 px-4 sm:px-6 md:px-10 w-max'>
            <SkillItem img={html} label='HTML' />
            <SkillItem img={css} label='CSS' />
            <SkillItem img={javascript} label='JavaScript' />
            <SkillItem img={TS} label='TS' />
            <SkillItem img={tailwind} label='Tailwind' />
            <SkillItem img={react} label='React' />
            <SkillItem img={nestjs} label='NestJS' />
            <SkillItem img={nextjs} label='Next.js' />
            <SkillItem img={nodeJS} label='NodeJS' />
            <SkillItem img={expressJS} label='ExpressJS' />
            <SkillItem img={mongodb} label='MongoDB' />
            <SkillItem img={github} label='GitHub' />
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillItem = ({ img, label }) => (
  <div className='flex flex-col items-center min-w-[80px] md:min-w-[100px]'>
    <img src={img} alt={label} className='h-12 md:h-16 object-contain' />
    <p className='mt-2 text-sm text-center'>{label}</p>
  </div>
);

export default Skills;
