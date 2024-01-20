import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex w-[80%] justify-between mt-[40px] py-4 sm:flex-col md:grid md:grid-cols-2 sm:gap-5'>
        <div>
            <Image height={100} width={200} src={"/logo.svg"}/>
            <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[312px]'>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className='flex flex-col gap-2'>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">Usefull Links</h4>
            <ul>
                <li className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer'>Content</li>
                <li className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer'>How it Works</li>
                <li className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer'>Create</li>
                <li className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer'>Explore</li>
                <li className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer'>Terms & Services</li>
            </ul>
        </div>
        <div className='flex flex-col gap-2'>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">Community</h4>
            <ul>
                <li className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer'>Help Center</li>
                <li className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer'>Partners</li>
                <li className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer'>Suggestions</li>
                <li className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer'>Blog</li>
                <li className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer'>Newsletters</li>
            </ul>
        </div>
        <div className='flex flex-col gap-2'>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">Partner</h4>
            <ul>
                <li className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer'>Our Partner</li>
                <li className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer'>Become a Partner</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer