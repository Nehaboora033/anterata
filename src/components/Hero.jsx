import React from 'react'
import Heading from './common/Heading'
import Button from './common/Button'
import Description from './common/Description'
import { Hero_Card } from '../utils/helper'

const Hero = () => {
  return (
    <div className='min-[1340px]:max-w-[740px] w-full'>
      {/* <div className='flex gap-[11px] '>
        <Heading className='text-[24px] '>Ferrominera Orinoco </Heading>
        <Button className={'text-[#62C9CC] bg-[#1D2A4D] hover:text-white hover:bg-[#62C9CC] transition-colors duration-200 ease-in-out  cursor-pointer rounded-[100px] py-2 px-4 '}>Iron producer</Button>
      </div> */}
      <div className='flex gap-4 mb-5 mx-2 min-[540px]:flex-row flex-col  '>
        {Hero_Card.map((item, index) => (
          <div className='min-[1340px]:max-w-[236px] w-full py-[21px] px-[14px] hover:outline outline-[#62C9CC] cursor-pointer rounded-[10px] flex flex-col justify-center  bg-[#151940]' key={index}>
            <Heading className={'text-[#62C9CC] text-[16px] min-[800px]:text-[18px] min-[930px]:text-[24px]'}>{item.title} </Heading>
            <Description className='text-[#B9BAC6] text-start'>{item.info} </Description>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Hero