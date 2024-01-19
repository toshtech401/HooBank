import Image from 'next/image'
import React from 'react'

const Clients = () => {
  return (
    <div className='flex  my-4 w-[80%]'>
      <div className='flex justify-between items-center w-full flex-row'>
        <div>
        <Image height={100} width={200} src={"/airbnb.png"}/>
        </div>
        <div>
        <Image height={100} width={200} src={"/binance.png"}/>
        </div>
        <div>
        <Image height={100} width={200} src={"/coinbase.png"}/>

        </div>
        <div>
        <Image height={100} width={200} src={"/dropbox.png"}/>

        </div>
      </div>
    </div>
  )
}

export default Clients