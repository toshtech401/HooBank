import React from 'react'

const Service = () => {
  return (
    <div className='sm:flex-col sm:w-full bg-black-gradient-2 rounded-[20px] box-shadow sm:px-[20px] px-6 sm:py-12 py-8 sm:my-16 my-6 flex justify-around items-center w-[80%]'>
      <div className='flex-1 flex flex-col'>
        <h2 className=' font-poppins font-semibold xs:text-[48px] text-[40px] sm:text-[25px] text-white w-full'>Let’s try our service now!</h2>
        <p className='font-poppins font-normal text-dimWhite text-[18px] sm:text-[15px] leading-[30.8px] max-w-[470px] mt-5'>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className='sm:w-full'>
        <button class="bg-blue-gradient text-[18px] text-primary font-poppins py-4 px-6 rounded-[10px] hover:shadow-lg hover:shadow-white sm:w-full transform transition-all duration-500 ease-in-out sm:hover:scale-105 hover:scale-125 hover:brightness-110 hover:animate-pulse active:animate-bounce">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Service