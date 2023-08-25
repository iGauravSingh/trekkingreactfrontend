import React from 'react'

import { motion } from 'framer-motion'

import camping from '../assets/camping.png'
import hiking from '../assets/hiking.png'
import tent from '../assets/tent.png'
import news from '../assets/newspaper.png'

const boxData = [
    {id: 1, title: 'Trekking', icon: hiking},
    {id: 2, title: 'Camping', icon: camping},
    {id: 3, title: 'Beach Tents', icon: tent},
    {id: 4, title: 'News & Events', icon: news},
]

const boxVariant = {
    hidden: {
        opacity: 0,
        y: 200,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 1.5,
            delay: 0.75,
            ease: [0, 0.71, 0.2, 1.01],
        }
    }
}

const Boxes = () => {
  return (
    <div className='h-1/2 absolute top-[90%]  z-10 w-full'>
        <motion.div 
        variants={boxVariant}
        initial='hidden'
        whileInView="show"
        className='flex flex-col justify-center items-center md:flex-row flex-1 md:flex-wrap gap-12'>
            {/* Box  */}
            {boxData.map( box=> (
                <div className='w-56 md:w-[15rem] h-32 md:h-[12rem] bg-yellow-600 flex flex-col items-center justify-center text-white' key={box.id}>

                    <div className='w-12 md:w-14  mb-4'>
                        <img className='invert' src={box.icon} alt={box.title}/>
                        </div>

                    <h2 className='font-bold text-2xl tracking-wide uppercase'>{box.title}</h2>
                </div>
            ))}
        </motion.div>
    </div>
  )
}

export default Boxes

// className='flex flex-col justify-center items-center md:flex-row flex-1 md:flex-wrap gap-12'>