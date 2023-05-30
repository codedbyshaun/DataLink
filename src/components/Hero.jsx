import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[96px] w-full h-3/4 top-[500px] mx-auto text-center flex flex-col justify-center pb-40 space-y-10'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                  Fast, flexible financing for
                  </p>
           <Typed
           className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-3'
           strings={['BTB', 'E-Com', 'SaaS']} 
           typeSpeed={120} 
           backSpeed={136} 
           loop
           />
           </div>
           <p className='md:text-2xl text-xl font-bold text-gray-500'>
            Monitor your data to increase revenue, efficiency, and productivity for BTB, Marketing, and SaaS platforms
            </p> 
            <button className='bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-[#05291e]'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero