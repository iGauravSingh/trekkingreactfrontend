import React from 'react'

import { motion } from 'framer-motion'

const heroHeadVariant = {
    hidden: {
        opacity: 0,
        y: 0,
        scale: 0.5,
    },
    show: {
        y: 0,
        opacity: 1,
        scale: 2,
        transition: {
            type: 'tween',
            duration: 1.5,
            delay: 0.75,
            ease: [0, 0.71, 0.2, 1.01],
        }
    }
}

const heroParaOne = {
    hidden: {
        opacity: 0,
        y: 200,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1.5,
            delay: 1,
        }
    }
}

const heroButtonOne ={
    hidden: {
        opacity: 0,
        y: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1.5,
            delay: 1.5,
        }
    }
}

const heroButtonTwo ={
    hidden: {
        opacity: 0,
        x: 150,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1.5,
            delay: 1.5,
        }
    }
}

const Text = () => {

  return (
    <div className='h-screen flex justify-center items-center bg-camp overflow-hidden text-white'>
        <div className=''>
            <motion.h1
             variants={heroHeadVariant}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true }}
             className='lg:text-5xl md:text-3xl text-2xl font-bold mb-12 text-center'>Camp Here</motion.h1>

            <motion.p 
            variants={heroParaOne}
            initial='hidden'
            whileInView="show"
            className='text-lg font-medium text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, adipisci.</motion.p>

            <div className='flex gap-8 justify-center mt-4 font-bold'>

                <motion.button 
                variants={heroButtonOne}
                initial='hidden'
                whileInView="show"
                className='border-2 border-yellow-600 bg-yellow-600 text-white p-2 rounded-lg'>Why Camp</motion.button>

                <motion.button 
                variants={heroButtonTwo}
                initial='hidden'
                whileInView='show'
                className='border-2 border-yellow-600 text-white p-2 rounded-lg'>How to Camp</motion.button>

            </div>
        </div>
    </div>
  )
}

export default Text