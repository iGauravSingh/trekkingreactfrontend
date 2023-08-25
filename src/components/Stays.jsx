import React from 'react'

import gem from '../assets/wherego/4.jpg'
import cottage from '../assets/wherego/1.jpg'
import lux from '../assets/wherego/2.jpg'

const Stays = () => {
  return (
    <div className=''>
        <div className='flex flex-col items-center'>
            <h1 className='text-2xl md:text-5xl font-bold font-serif mb-12'>Where to go now</h1>
            <div className='flex flex-wrap items-center justify-center gap-6 mb-12'>

                {/* box -1  */}

              <div className='flex flex-col items-center relative'>

                <img className='w-[25rem] h-[18rem] mb-12' src={gem} alt="gem" />

                <div className='w-[15rem] bg-yellow-600 flex flex-col items-center p-4 text-white absolute top-[14rem]'>
                  <h3 className='text-lg font-bold uppercase tracking-wide'>Hidden Gem</h3>
                  <p>Sites on the rise</p>
                </div>

                <p className='w-[20rem]'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                <a href='#' className='mt-6 text-lg font-semibol border-b-2 border-slate-800 pb-2'>LEARN MORE</a>
              </div>

                  {/* box-2  */}

              <div className='flex flex-col items-center relative'>

                <img className='w-[25rem] h-[18rem] mb-12' src={cottage} alt="gem" />

                <div className='w-[15rem] bg-yellow-600 flex flex-col items-center p-4 text-white absolute top-[14rem]'>
                  <h3 className='text-lg font-bold uppercase tracking-wide'>Hidden Gem</h3>
                  <p>Sites on the rise</p>
                </div>

                <p className='w-[20rem]'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                <a href='#' className='mt-6 text-lg font-semibol border-b-2 border-slate-800 pb-2'>LEARN MORE</a>
              </div>

                  {/* box3 */}

              <div className='flex flex-col items-center relative'>

                <img className='w-[25rem] h-[18rem] mb-12' src={lux} alt="gem" />

                <div className='w-[15rem] bg-yellow-600 flex flex-col items-center p-4 text-white absolute top-[14rem]'>
                  <h3 className='text-lg font-bold uppercase tracking-wide'>Hidden Gem</h3>
                  <p>Sites on the rise</p>
                </div>

                <p className='w-[20rem]'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                <a href='#' className='mt-6 text-lg font-semibol border-b-2 border-slate-800 pb-2'>LEARN MORE</a>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Stays