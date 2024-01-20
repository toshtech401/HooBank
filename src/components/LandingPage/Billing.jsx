import Image from 'next/image'
import React from 'react'

const Billing = () => {
  return (
    <div className='flex md:flex-row sm:flex-col-reverse sm:py-16 py-6 justify-between w-[80%] gap-[40px]'>
        <div>
            <Image height={100} width={500} src={"/bill.png"} className="w-[100%] h-[100%] relative z-[5]"/>
        </div>
        <div className='flex justify-center items-start flex-1 flex-col'>
            <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>
                Easily control your <br className="sm:hidden" /> billing &
                invoicing
            </h2>
            <p className='max-w-[470px] sm:w-full mt-5 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]'>
                Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
                aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
                placerat.
            </p>
            <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                <Image height={100} width={100} src={"/apple.svg"} className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"/>
                <Image height={100} width={100} src={"/google.svg"} className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"/>
            </div>
        </div>
    </div>
  )
}

export default Billing