"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);


  return (
   <div className='w-full'>
      <div className='flex justify-around items-center p-3 w-full'>
        <Image height={150} width={150} src={"logo.svg"}/>
        <ul className='flex gap-5 text-white sm:hidden'>
          <li className='font-poppins font-normal cursor-pointer text-[20px] hover:text-secondary text-dimWhite'>Home</li>
          <li className='font-poppins font-normal cursor-pointer text-[20px] hover:text-secondary text-dimWhite'>About Us</li>
          <li className='font-poppins font-normal cursor-pointer text-[20px] hover:text-secondary text-dimWhite'>Features</li>
          <li className='font-poppins font-normal cursor-pointer text-[20px] hover:text-secondary text-dimWhite'>Solution</li>
        </ul>
        <button className='hidden sm:block rounded-xl bg-blue-gradient p-2 text-black' onClick={() => setToggle(!toggle)}>
          {
            toggle?  <RxCross1 /> :  <IoIosMenu /> 
          }
        </button>
      </div>
      <div className={`${!toggle ? "hidden" : "flex"} gap-[30px] p-3 bg-black-gradient absolute top-20 right-0 mx-1 my-2 min-w-[150px] rounded-xl sidebar`}>
        <ul className='flex justify-end items-start flex-1 flex-col'>
          <li className='font-poppins font-normal cursor-pointer text-[16px] text-dimWhite'>Home</li>
          <li className='font-poppins font-normal cursor-pointer text-[16px] text-dimWhite'>About Us</li>
          <li className='font-poppins font-normal cursor-pointer text-[16px] text-dimWhite'>Features</li>
          <li className='font-poppins font-normal cursor-pointer text-[16px] text-dimWhite'>Solution</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar