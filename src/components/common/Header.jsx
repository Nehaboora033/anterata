import React, { useState } from 'react'
import logo from './../../assets/png/logo.png'
import Input from './Input'
import { Arrow, Logout, Notification, Profile, SearchIcon, Setting } from '../../utils/icon'
import Data from './Data'
import profileimg from './../../assets/png/profileimg.png'
import Hamburger from 'hamburger-react'
import { SideBar_Data, Sidebar_DownData } from './../../utils/helper'
import { NavLink } from 'react-router-dom'
import Description from './Description'



const Header = () => {
  const [rotated, setRotated] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleDropdown = () => {
    setOpen((prev) => !prev);
    setRotated((prev) => !prev); // <-- add this line to rotate the arrow
  };
  return (
    <div className='max-w-[1440px] mx-auto p-3 w-full bg-[#14163D] border-[#1D2B4E] border-b flex items-center justify-between '>
      <img src={logo} alt="logo" className='w-[94px] h-[16px] cursor-pointer hover:scale-105' />
      <div className='max-w-[401px] w-full'>
        <Input placeholderText={'Search for Assets'} svg={SearchIcon} inputclass={'py-[9px]  sm:flex hidden max-w-[401px] relative max-w-[401px] w-full pl-[23px] pr-[10px] bg-[#222448] rounded-[44px]'} />
        {/* <SearchIcon className={'cursor-pointer hover:scale-105'} /> */}
        {/* </Input> */}
      </div>
      <div className='flex sm:gap-4 gap-2 items-center'>
        <Notification className={'cursor-pointer w-[24px] h-[24px]'} />
        <div className=' relative text-left rounded-[100%] sm:rounded-[33px] bg-[#222448]  cursor-pointer flex gap-[9px] items-center p-2 md:pr-[12px]' onClick={toggleDropdown}>
          <img src={profileimg} alt="image" className='w-[35px] h-[35px] flex-shrink-0' />
          <button className='md:flex gap-[15px]  items-center hidden'   >
            <span className='font-normal text-base text-white'>Jhon Doe</span>
            <Arrow className={`transition-all duration-500 ${rotated ? 'rotate-180' : 'rotate-0'}`} />
          </button>
        </div>
        {/* Dropdown menu */}
        {open && (
          <div className="absolute top-[8%] right-[12px] mt-2 w-44 origin-top-right rounded-md bg-[#222448] shadow-lg   z-50">
            <div className="p-2 text-sm text-gray-700">
              <Data titleText={'Profile'} svg={Profile} className='gap-[8px] px-4 py-2 rounded-[10px] hover:bg-[#62C9CC]' />
              <Data titleText={'Setting'} svg={Setting} className='gap-[8px] px-4 py-2 rounded-[10px] hover:bg-[#62C9CC]' />
              <Data titleText={'Logout'} svg={Logout} className='gap-[8px] px-4 py-2 rounded-[10px] hover:bg-[#62C9CC]' />
            </div>
          </div>
        )}
      </div>



      {/* hamburger */}
      <div className="md:hidden">
        <Hamburger toggled={isOpen} toggle={setisOpen} />
      </div>

      {/* Mobile Sidebar — place this after header layout (NOT inside the flex row) */}
      <div
        className={`
    fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-[#1A2449] z-50 p-4 md:hidden
    transform transition-transform duration-700 ease-in-out
    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
  `}
      >
        {/* hamburger inside to close */}
        <div className="flex justify-end mb-4">
          <Hamburger toggled={isOpen} toggle={setisOpen} />
        </div>

        {/* Sidebar content */}
        {SideBar_Data.map((item, index) => (
          <NavLink
            to={item.link}
            onClick={() => {
              setActiveIndex(index);
              setisOpen(false);
            }}
            key={index}
            className={`flex items-center gap-3 mb-2 group py-[10px] px-4 hover:bg-[#222448] hover:rounded-[4px] ${activeIndex === index ? 'bg-[#62C9CC] rounded-[4px]' : ''
              }`}
          >
            <item.icon
              className={`text-[#B8B9C5] group-hover:text-white transition-colors duration-200 ${activeIndex === index ? 'text-white' : ''
                }`}
            />
            <Description className={`text-[#B8B9C5] group-hover:text-white ${activeIndex === index ? 'text-white' : ''
              }`}>
              {item.name}
            </Description>
          </NavLink>
        ))}

        {Sidebar_DownData.map((item, index) => (
          <div
            key={index}
            className="flex items-center cursor-pointer gap-3 mb-2 py-[10px] group px-4 hover:bg-[#222448] hover:rounded-[4px]"
          >
            <item.icon className="text-[#B8B9C5] group-hover:text-white transition-colors duration-200" />
            <Description className="text-[#B8B9C5] group-hover:text-white transition-colors duration-200">
              {item.name}
            </Description>
          </div>
        ))}
      </div>


    </div>
  )
}

export default Header