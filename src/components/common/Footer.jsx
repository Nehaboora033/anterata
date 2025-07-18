import React from 'react'
import Description from './../common/Description'
import { Social_Links } from '../../utils/helper';

const Footer = () => {
    const Year = new Date();
  return (
      <div className='bg-[#111131] py-[14px]'>
          <div className='max-w-[1148px] ml-[292px] mr-[92px] px-3'>
              <div className='flex justify-between items-center'>
                  <Description className={'text-[#B8B8C1]'}>© Copyright ${Year.getFullYear()}  Pantera | All rights reserved.  </Description>
                  <div className='flex gap-4 '>
                      {Social_Links.map((item, index) => (
                          <div key={index} className='w-[44px] h-[44px] border border-[#62C9CC] rounded-[50%] flex items-center justify-center'>
                              <a href={item.link} target='blank'><item.icon/></a>
                          </div>
                      ))}
                  </div>
              </div>
          
              </div>
      </div>
  )
}

export default Footer