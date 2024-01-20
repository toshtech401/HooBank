import Image from 'next/image'
import React from 'react'

const Business = () => {
  return (
    <div className='flex md:gap-5 sm:py-2 md:flex-col sm:flex-col sm:w-full sm:px-5 sm:gap-5 py-6 w-[80%]'>
        <div className='flex justify-center items-start flex-1 flex-col'>
            <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>
                You do the business, <br className="sm:hidden" /> we’ll handle
                the money.
            </h2>
            <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
                With the right credit card, you can improve your financial life by
                building credit, earning rewards and saving money. But with hundreds
                of credit cards on the market.
            </p>
            <button className='py-4 px-6 mt-10 sm:w-full font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none'>Get Started</button>
        </div>
        <div>
            <div className='flex flex-row p-6 rounded-[20px] feature-card transition-transform transform hover:scale-105'>
                <div className='w-[64px] h-[64px] rounded-full bg-dimBlue flex justify-center items-center'>
                    <Image height={40} width={40} src={"/Star.svg"}/>
                </div>
                <div className="flex-1 flex flex-col ml-3">
                    <h2 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">Rewards</h2>
                    <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">The best credit cards offer some tantalizing <br className='sm:hidden'/> combinations of promotions and prizes</p>
                </div>
            </div>
            <div className='flex flex-row p-6 rounded-[20px] feature-card transition-transform transform hover:scale-105'>
                <div className='w-[64px] h-[64px] rounded-full bg-dimBlue flex justify-center items-center'>
                    <Image height={40} width={40} src={"/Shield.svg"}/>
                </div>
                <div className="flex-1 flex flex-col ml-3">
                    <h2 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">100% Secured</h2>
                    <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">We take proactive steps make sure <br className='sm:hidden'/> your information and transactions are secure.</p>
                </div>
            </div>
            <div className='flex flex-row p-6 rounded-[20px] feature-card transition-transform transform hover:scale-105'>
                <div className='w-[64px] h-[64px] rounded-full bg-dimBlue flex justify-center items-center'>
                    <Image height={40} width={40} src={"/Send.svg"}/>
                </div>
                <div className="flex-1 flex flex-col ml-3">
                    <h2 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">Balance Transfer</h2>
                    <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">A balance transfer credit card can save <br className='sm:hidden'/> you a lot of money in interest charges.</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Business