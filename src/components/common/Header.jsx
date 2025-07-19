import React from 'react'
import logo from './../../assets/png/logo.png'
import Input from './Input'
import { Notification, SearchIcon } from '../../utils/icon'



const Header = () => {
  return (
    <div className='max-w-[1440px] mx-auto p-3 w-full bg-[#14163D] border-[#1D2B4E] border-b flex items-center justify-between '>
      <img src={logo} alt="logo" className='w-[94px] h-[16px]' />
      <div className='max-w-[401px] w-full'>
        <Input placeholderText={'Search for Assets'} svg={SearchIcon} inputclass={'py-[9px] relative max-w-[401px] w-full pl-[23px] pl-[10px] bg-[#222448] rounded-[44px]'} />
        {/* <SearchIcon className={'cursor-pointer hover:scale-105'} /> */}
        {/* </Input> */}
      </div>
      <div className=''>
        <Notification />
      </div>
    </div>
  )
}

export default Header