import Image from 'next/image'
import React from 'react'

const CardDeal = () => {
  return (
    <div className='flex md:flex-row sm:py-16 py-6 justify-between w-[80%] gap-[40px]'>
        <div className='flex justify-center items-start flex-1 flex-col'>
            <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>Find a better card deal <br className="sm:block" /> in few easy steps.</h2>
            <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
                Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
                aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>
            <button className='py-4 px-6 mt-10 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none'>Get Started</button>
        </div>
        <div>
            <Image height={100} width={350} src={"/card.png"} className="w-[100%] h-[100%] relative z-[5]"/>
        </div>
    </div>
  )
}

export default CardDeal