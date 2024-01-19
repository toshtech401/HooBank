import React from 'react'

const Service = () => {
  return (
    <div className='sm:flex-row  bg-black-gradient-2 rounded-[20px] box-shadow sm:px-16 px-6 sm:py-12 py-8 sm:my-16 my-6 flex justify-around items-center w-[80%]'>
        <div className='flex-1 flex flex-col'>
            <h2 className=' font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>Let’s try our service now!</h2>
            <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
                Everything you need to accept card payments and grow your business
                anywhere on the planet.
            </p>
        </div>
        <div>
            <button className='py-4 px-6 mt-10 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none'>Get Started</button>
        </div>
    </div>
  )
}

export default Service