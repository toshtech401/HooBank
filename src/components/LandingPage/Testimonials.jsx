"use client"
import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <div className='sm:py-16 py-6 flex justify-center items-center flex-col relative w-[80%] sm:w-full sm:px-[20px]'>
        <div className="w-full flex justify-between sm:flex-col md:flex-col items-center sm:mb-16 mb-6 relative z-[1]">
            <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] sm:text-[25px] text-white w-full'>What People are <br className="sm:hidden" /> saying about us</h2>
            <div className="w-full md:mt-0 mt-6">
                <p className='font-poppins font-normal text-dimWhite text-[18px] sm:text-[15px] leading-[30.8px] text-left max-w-[450px]'>
                    Everything you need to accept card payments and grow your business
                    anywhere on the planet.
                </p>
            </div>
        </div>
        <div  className="flex justify-between w-full sm:flex-col md:grid md:grid-cols-2 gap-[55px]  mr-0 my-5">
            <div className='glowBorder feedback-card py-12 px-5 rounded-[20px] w-full feedback-container transition-all transform hover:scale-110'>
                <Image height={50} width={50} src={"/quotes.svg"}/>
                <p className='font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10'>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                <div className='flex flex-row'>
                    <Image height={50} width={50} src={"/people01.png"} className="w-[48px] h-[48px] rounded-full"/>
                    <div className='flex flex-col ml-4'>
                        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">Herman Jensen</h4>
                        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">Founder & Leader</p>
                    </div>
                </div>
            </div>
            <div className='glowBorder feedback-card py-12 px-5 rounded-[20px] w-full transition-all transform hover:scale-110'>
                <Image height={50} width={50} src={"/quotes.svg"}/>
                <p className='font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10'>Money makes your life easier. If you're lucky to have it, you're lucky.</p>
                <div className='flex flex-row' >
                    <Image height={50} width={50} src={"/people02.png"} className="w-[48px] h-[48px] rounded-full"/>
                    <div className='flex flex-col ml-4'>
                        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">Steve Mark</h4>
                        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">Founder & Leader</p>
                    </div>
                </div>
            </div>
            <div className='glowBorder feedback-card py-12 px-5 rounded-[20px] w-full transition-all transform hover:scale-110'>
                <Image height={50} width={50} src={"/quotes.svg"}/>
                <p className='font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10'>It is usually people in the money business, finance, and international trade that are really rich.</p>
                <div className='flex flex-row'>
                    <Image height={50} width={50} src={"/people03.png"} className="w-[48px] h-[48px] rounded-full"/>
                    <div className='flex flex-col ml-4'>
                        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">Kenn Gallagher</h4>
                        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">Founder & Leader</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
} 

export default Testimonials