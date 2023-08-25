import React from 'react'

import ione from '../assets/gallery/1.jpg'
import itwo from '../assets/gallery/2.jpg'
import ithree from '../assets/gallery/3.jpg'
import ifour from '../assets/gallery/4.jpg'
import ifive from '../assets/gallery/5.jpg'
import isix from '../assets/gallery/6.jpg'

const galData = [
    {id: 1, image: ione},
    {id: 2, image: itwo},
    {id: 3, image: ithree},
    {id: 4, image: ifour},
    {id: 5, image: ifive},
    {id: 6, image: isix},
]

const Gallery = () => {
  return (
    <div className='mt-[45rem] md:mt-[25rem] lg:mt-[15rem]'>
        <div className='flex flex-col items-center mb-12'>
            <h1 className='text-2xl md:text-5xl font-bold font-serif pb-8'>Outdoor Recreation</h1>
            <p className='font-base text-lg text-center mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aut magni id dignissimos dicta quos eaque libero necessitatibus quaerat neque.</p>
            <div className='grid grid-cols-1 grid-rows-6 gap-4 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 pb-12'>
            {galData.map(data=> (
                <div className='w-[20rem] h-[25rem]' key={data.id}>
                    <img className='w-[20rem] h-[25rem]' src={data.image} alt='data.id' />
                </div>
            ))}
            </div>
            <div>
                <button className='text-xl font-bold tracking-wide bg-yellow-600 rounded-xl pt-4 pb-4 pr-6 pl-6 text-white'>More Photos</button>
            </div>
        </div>
    </div>
  )
}

export default Gallery