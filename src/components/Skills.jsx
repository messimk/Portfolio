import React from 'react'
import css from '../assets/css.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import nodeJS from '../assets/nodeJS.png'
import expressJS from '../assets/expressJS.jpeg'
import mongodb from '../assets/MongoDB.jpeg'
import github from '../assets/github.png'

const Skills = () => {
  return (
    <div className=' border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-5 place-items-center md:flex md:justify-between md:items-center'> 
      <h2 className='text-gray-700 text-2xl md:text-4xl font-bold m-4'>
        My <br/> Tech <br/> Stack
      </h2>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={html} alt=''/>
        <p className='mt-2'>HTML</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={css} alt=''/>
        <p className='mt-2'>CSS</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={javascript} alt=''/>
        <p className='mt-2'>JavaScript</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={tailwind} alt=''/>
        <p className='mt-2'>Tailwind</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={react} alt=''/>
        <p className='mt-2'>React</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={nodeJS } alt=''/>
        <p className='mt-2'>NodeJs</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={expressJS} alt=''/>
        <p className='mt-2'>ExpressJS</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={mongodb} alt=''/>
        <p className='mt-2'>MongoDB</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={github} alt=''/>
        <p className='mt-2'>GitHub</p>
      </div>
    </div>
  )
}

export default Skills