import React from 'react'

const Stats = () => {
  return (
    <div className='flex justify-between sm:flex-col w-[80%] sm:w-full md:grid md:grid-cols-2 sm:px-[20px] sm:gap-[30px]'>
      <div className='flex items-center'>
        <h4 className="font-poppins font-semibold sm:text-[20px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">User Active</h4>
        <p className="font-poppins font-normal text-[15.45px] text-gradient uppercase ml-3">3800+</p>
      </div>
      <div className='flex items-center'>
        <h4 className="font-poppins font-semibold sm:text-[20px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">Trusted by Company</h4>
        <p className="font-poppins font-normal  text-[15.45px] text-gradient uppercase ml-3">230+</p>
      </div>
      <div className='flex items-center'>
        <h4 className="font-poppins font-semibold sm:text-[20px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">Transaction</h4>
        <p className="font-poppins font-normal text-[15.45px] text-gradient uppercase ml-3">$230M+</p>
      </div>
    </div>
  )
}

export default Stats