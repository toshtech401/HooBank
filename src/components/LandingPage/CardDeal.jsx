import Image from 'next/image'
import React from 'react'

const CardDeal = () => {
  return (
    <div className='flex sm:flex-col md:flex-row sm:py-16 py-6 justify-between w-[80%] sm:w-full sm:px-[20px] gap-[40px]'>
        <div className='flex justify-center items-start flex-1 flex-col'>
          <h2 className='font-poppins font-semibold text-[40px] sm:text-[25px] text-white w-full'>Find a better card deal <br className="sm:block" /> in few easy steps.</h2>
          <p className='font-poppins font-normal text-dimWhite text-[18px] sm:text-[15px] leading-[30.8px] max-w-[470px] mt-5'>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <button class="bg-blue-gradient text-[18px] sm:hover:scale-105 text-primary font-poppins py-4 px-6 rounded-[10px] hover:shadow-lg hover:shadow-white sm:w-full transform transition-all duration-500 ease-in-out hover:scale-125 hover:brightness-110 hover:animate-pulse active:animate-bounce">
            Get Started
          </button>

        </div>
        <div>
          <Image height={150} width={350} src={"/card.png"} className="w-[100%] h-[100%] relative z-[5]"/>
        </div>
    </div>
  )
}

export default CardDeal