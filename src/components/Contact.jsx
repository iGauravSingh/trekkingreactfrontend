import React from 'react'

const Contact = () => {
  return (
    <div className=' bg-coupl flex justify-center items-center'>
        {/* image from tail wind config*/}

        <div className='flex flex-col items-center justify-around md:flex-row p-4 w-3/4 gap-8'>

                        {/* contact text  */}
            <div className='flex flex-col items-center text-white md:w-1/2'>
                <h2 className='text-6xl font-bold font-serif mb-8 text-center'>Contact Us</h2>
                <p className='font-medium text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sed totam vel atque velit debitis itaque, facilis iusto ad cupiditate, consequuntur vitae illum maiores doloribus mollitia pariatur, quam esse impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, modi. Lorem ipsum dolor sit amet.</p>
                <button className='mt-8 font-medium text-lg border-2 border-yellow-600 p-4 rounded-lg'>Contact Us</button>
            </div>

            {/* contact form  */}
            <div className='flex flex-col text-white pt-8 gap-8 md:w-1/2 font-medium text-lg'>
                
                    <div className='w-full flex gap-2 justify-between'>
                        <label htmlFor="name">Name</label>
                        <input className='' type="text" id='name' />
                    </div>
                
                <div className='flex gap-2 w-full justify-between'>
                        <label htmlFor="email">Email</label>
                        <input className='' type="text" id='email' />
                    </div>
                <div className='w-full h-[10rem] flex gap-2 justify-between'>
                        <label htmlFor="address">Address</label>
                        <input type="text" id='address' />
                </div>

                <div className='w-full flex gap-2 justify-between h-[3rem]'>
                        <label htmlFor="message">Message</label>
                        <input type="text" id='message' />
                </div>
                <button className='text-white bg-yellow-600 rounded-lg p-4 mt-8 font-medium text-lg'>Submit</button>
            </div>
        </div>

    </div>
  )
}

export default Contact