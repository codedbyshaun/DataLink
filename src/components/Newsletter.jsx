import React from 'react'

const Newsletter = () => {
    return (
        <div className='w-full py-40 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                        Searching for tips to optimize your data workflow?
                    </h1>
                    <p>Sign up to our newsletter and stay up to date</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flex w-full rounded-md text-[#05291e]'
                            type="email"
                            placeholder='Enter Email' />
                        <button className='bg-[#00df9a] text-[#05291e] rounded-md font-bold w-[200px] ml-4 my-6 px-6 py-3'>
                            Notify Me
                        </button>
                    </div>
                </div>
                <p>We care about protecting your data. Learn more in our <span className='text-[#00df9a] cursor-pointer'>Privacy Policy.</span> </p>
            </div>
        </div>
    )
}

export default Newsletter