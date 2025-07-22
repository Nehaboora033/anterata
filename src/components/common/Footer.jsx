import React from 'react'
import Description from './../common/Description'
import { Social_Links } from '../../utils/helper';
import { Link } from 'react-router-dom';

const Footer = () => {
    const Year = new Date();
    return (
        <div className='bg-[#111131] py-[14px]'>
            <div className='max-w-[1148px] ml-[292px] mr-[92px] px-3'>
                <div className='flex justify-between items-center'>
                    <Description className={'text-[#B8B8C1]'}>© Copyright {Year.getFullYear()}  Pantera | All rights reserved.  </Description>
                    <div className='flex gap-4 '>
                        {Social_Links.map((item, index) => (
                            <div key={index} className='w-[44px] h-[44px] border border-[#62C9CC] group transition-all duration-200 hover:bg-[#62C9CC]   rounded-[50%] flex items-center justify-center cursor-pointer'>
                                <Link to={item.link} target='blank' className='text-[#62C9CC] group-hover:text-[#111131] transition-colors duration-200 ease-in-out' ><item.icon /></Link>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer