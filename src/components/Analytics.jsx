import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/laptop grahpic chart" />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Manage Data Analytics Centrally
          </h1>
          <p>Join the leading data analytics initiative that helps businesses of all sizes and industries to
            leverage the power of data. Get acces to customized solutions that turn data into actionable
            insights and enable smarter decision-making.
          </p>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-3 md:mx-0 text-[#05291e]'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics