import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around items-center p-3 w-full'>
        <Image height={150} width={150} src={"logo.svg"}/>
        <ul className='flex gap-5 text-white'>
            <li>Home</li>
            <li>About Us</li>
            <li>Features</li>
            <li>Solution</li>
        </ul>
    </div>
  )
}

export default Navbar