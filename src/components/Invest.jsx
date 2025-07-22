import React from 'react'
import Details from './common/Details'
import { Dollar, Question } from '../utils/icon'
import Button from './common/Button'
import Input from './common/Input'
import { Invest_Data } from '../utils/helper'



const Invest = () => {
  return (
    <>
      {/* <div className='flex justify-end '><Button className={'text-[#62C9CC] hover:text-white hover:bg-[#62C9CC] transition-colors duration-200 ease-in-out cursor-pointer px-[26.5px] py-4 bg-[#1A2449] mb-[12px]'}>Back</Button></div> */}
      <div className='max-w-[360px] relative text-white border border-[#243E61]  rounded-[10px] py-[18px] px-[16px] bg-custom-gradient' >
        <Details svg={Question} titleText={"Enter Amount to Invest"} infoText={"Invest"} className={'mb-[18px]'} />
        <Input svg={Dollar} className='' placeholderText={'USD'} inputclass={'bg-[#233E64] py-3 pl-4 pr-[10px] w-full rounded-[8px]'} />

        <div className='my-5'>
          {Invest_Data.map((item, index) => (
            <div key={index} className=''>
              <div className='flex justify-between mb-[10px] mt-[10px] '>
                <p className='font-normal text-[14px]'>{item.title}</p>
                <p className='font-normal text-[14px]'>{item.value} </p>
              </div>
              <div className='bg-[#607A96] w-[328px] h-[1.4px]'></div>
            </div>
          ))}
        </div>
        <Button className={'bg-[#62C9CC] py-3 px-4 w-full hover:outline outline-[#62C9CC] hover:bg-transparent hover:text-[#62C9CC]  transition-all duration-200 cursor-pointer'}>Invest now </Button>

        <div className='size-[120px] bg-[#62C9CC] blur-4xl   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
      </div>
    </>

  )
}

export default Invest