import React, { useState } from 'react'
import logo from './../../assets/png/logo.png'
import Input from './Input'
import { Arrow, Logout, Notification, Profile, SearchIcon, Setting } from '../../utils/icon'
import Data from './Data'
import profileimg from './../../assets/png/profileimg.png'



const Header = () => {
  const [rotated, setRotated] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen((prev) => !prev);
    setRotated((prev) => !prev); // <-- add this line to rotate the arrow
  };



  return (
    <div className='max-w-[1440px] mx-auto p-3 w-full bg-[#14163D] border-[#1D2B4E] border-b flex items-center justify-between '>
      <img src={logo} alt="logo" className='w-[94px] h-[16px] cursor-pointer hover:scale-105' />
      <div className='max-w-[401px] w-full'>
        <Input placeholderText={'Search for Assets'} svg={SearchIcon} inputclass={'py-[9px] relative max-w-[401px] w-full pl-[23px] pl-[10px] bg-[#222448] rounded-[44px]'} />
        {/* <SearchIcon className={'cursor-pointer hover:scale-105'} /> */}
        {/* </Input> */}
      </div>
  
      <div className='flex gap-4 items-center'>
       
        

        
          <Notification className={'cursor-pointer'} />
        <div className=' relative text-left rounded-[33px] bg-[#222448] flex gap-[9px] items-center p-2 pr-[12px] '>
          <img src={profileimg} alt="image" />
          <button className='flex gap-[15px] cursor-pointer items-center' onClick={toggleDropdown}  >
            <span className='font-normal text-base text-white'>Jhon Doe</span>
            <Arrow className={`transition-all duration-500 ${rotated?'rotate-180':'rotate-0'}`}/>
          </button>
        </div>
          {/* Dropdown menu */}
          {open && (
          <div className="absolute top-[8%] right-[12px] mt-2 w-44 origin-top-right rounded-md bg-[#222448] shadow-lg   z-50">
              <div className="p-2 text-sm text-gray-700">
              <Data titleText={'Profile'} svg={Profile} className='gap-[8px] px-4 py-2 rounded-[10px]' />
              <Data titleText={'Setting'} svg={Setting} className='gap-[8px] px-4 py-2 rounded-[10px]' />
              <Data titleText={'Logout'} svg={Logout} className='gap-[8px] px-4 py-2 rounded-[10px] ' />
              </div>
            </div>
          )}
       

       
      </div>
    </div>
  )
}

export default Header