import Image from 'next/image'
import React from 'react'

const Clients = () => {
  return (
    <div className='flex  my-4 w-[80%]'>
      <div className='flex justify-between items-center gap-6 sm:grid sm:grid-cols-2 w-full flex-row'>
        <div className='client'>
        <Image height={100} width={200} src={"/airbnb.png"} className='object-contain cursor-pointer hover:scale-110 transition ease-linear duration-200 hover:text-cyan-400'/>
        </div>
        <div className='client'>
        <Image height={100} width={200} src={"/binance.png"} className='object-contain cursor-pointer hover:scale-110 transition ease-linear duration-200 hover:text-cyan-400'/>
        </div>
        <div className='client'>
        <Image height={100} width={200} src={"/coinbase.png"} className='object-contain cursor-pointer hover:scale-110 transition ease-linear duration-200 hover:text-cyan-400'/>

        </div>
        <div className='client'>
        <Image height={100} width={200} src={"/dropbox.png"} className='object-contain cursor-pointer hover:scale-110 transition ease-linear duration-200 hover:text-cyan-400'/>

        </div>
      </div>
    </div>
  )
}

export default Clients