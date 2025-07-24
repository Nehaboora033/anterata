import React, { useState } from 'react'
import { SideBar_Data, Sidebar_DownData } from '../../utils/helper'
import { NavLink, useLocation } from 'react-router-dom'
import Description from './../common/Description'

const SideNavBar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className='hidden min-[1070px]:w-[270px] w-[240px]  py-[14px] pl-[28px] pr-[18px] h-full bg-[#14163D] border-[#1D2B4E] border-r md:flex flex-col justify-between '>
      <div>
        {SideBar_Data.map((item, index) => (
          <NavLink to={item.link} onClick={() => setActiveIndex(index)} key={index} className={`flex items-center gap-3 mb-2 group py-[10px] px-4  hover:bg-[#222448] hover:rounded-[4px] ${activeIndex === index ? 'bg-[#62C9CC] rounded-[4px]' : ''} `}>
            <item.icon className={`text-[#B8B9C5] group-hover:text-white transition-colors duration-200 ${activeIndex === index ? 'text-white' : ''}`} />
            <Description className={`text-[#B8B9C5] group-hover:text-white ${activeIndex === index ? 'text-white ' : ''}`}>{item.name}</Description>
          </NavLink>
        ))}
      </div>
      <div>

        {/* hepl or logout data */}
        {Sidebar_DownData.map((item, index) => (
          <div key={index} className='flex items-center cursor-pointer gap-3 mb-2 py-[10px] group px-4 hover:bg-[#222448] hover:rounded-[4px]'>
            <div>
              <item.icon className="text-[#B8B9C5] group-hover:text-white transition-colors duration-200" />
            </div>
            <Description className={`text-[#B8B9C5] group-hover:text-white transition-colors duration-200 `}>{item.name} </Description>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideNavBar