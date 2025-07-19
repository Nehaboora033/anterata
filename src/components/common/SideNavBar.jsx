import React from 'react'
import { SideBar_Data, Sidebar_DownData } from '../../utils/helper'
import { NavLink } from 'react-router-dom'
import Description from './../common/Description'

const SideNavBar = () => {
  return (
    <div className='w-[272px] py-[14px] pl-[28px] pr-[18px] h-[691px] bg-[#14163D] border-[#1D2B4E] border-r flex flex-col justify-between '>
      <div>
        {SideBar_Data.map((item, index) => (
          <NavLink to={item.link} key={index} className='flex items-center gap-3 mb-2 group py-[10px] px-4  hover:bg-[#62C9CC] hover:rounded-[4px] '>
            <item.icon className="text-[#B8B9C5] group-hover:text-white transition-colors duration-200" />
            <Description className='text-[#B8B9C5] group-hover:text-white'>{item.name}</Description>
          </NavLink>
        ))}
      </div>

      <div>
        {Sidebar_DownData.map((item,index)=>(
          <div key={index} className='flex items-center gap-3 mb-2 py-[10px] group px-4 hover:bg-[#62C9CC] hover:rounded-[4px]'>
            <div className=''>
              <item.icon className="text-[#B8B9C5] group-hover:text-white transition-colors duration-200" />
            </div> 
            <Description className='text-[#B8B9C5] group-hover:text-white transition-colors duration-200 '>{item.name} </Description>
        </div>
        ))}
      </div>

    </div>
  )
}

export default SideNavBar