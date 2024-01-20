import Image from 'next/image'
import React from 'react'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <div className='flex md:flex-row sm:flex-col justify-between w-full'>
        <div className='flex justify-center w-full items-start flex-col ml-[50px] sm:ml-0 px-6'>
            <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                <Image height={50} width={50} src={"/Discount.png"}/>
                <p className="ml-2">
                    <span className="text-white">20%</span> Discount For{" "}
                    <span className="text-white">1 Month</span> Account
                </p>
            </div>
            <div className="flex flex-row justify-between items-center gap-[40px]">
                <h1 className=" font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[55px]">
                    The Next <br className="sm:hidden" />{" "}
                    <span className="text-gradient">Generation</span>{" "}
                </h1>
                <div className="ss:flex sm:hidden md:mr-4 mr-0">
                    <GetStarted />
                </div>
            </div>
            <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                Payment Method.
            </h1>
            <p className='max-w-[470px] mt-5 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]'>
                Our team of experts uses a methodology to identify the credit cards
                most likely to fit your needs. We examine annual percentage rates,
                annual fees.
            </p>
        </div>
        <div className=' justify-center items-center flex sm:flex-col md:my-0 my-10 w-full'>
            <Image height={300} width={400} quality={100} src={"/robot.png"} className='w-full h-[80vh] sm:flex sm:justify-end'/>
            <div className="ss:flex hidden sm:block md:mr-4 mr-0">
                <GetStarted />
            </div>
        </div>
    </div>
  )
}

export default Hero