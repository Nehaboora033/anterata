import React from 'react'
import Heading from './common/Heading'
import Description from './common/Description'
import Detail from './common/Detail'
import { PDF, Sales } from '../utils/icon'


const AboutCompany = () => {
    return (
        <div className='max-w-[740px] p-[20px] bg-[#151940] rounded-[10px]'>
            <Heading className='text-white text-xl  mb-[15px] '>About company</Heading>

            <Description className=''>Dictum sit lobortis hendrerit morbi leo amet sapien ipsum blandit. </Description>
            <Description className='text-[#8A8C9F] max-w-[690px] mt-2 mb-[7px]'>Arcu fringilla tincidunt mauris ut risus massa ipsum. Metus adipiscing sed leo pharetra sed. Ut nulla libero vel ipsum adipiscing purus posuere. Dui pulvinar id enim tristique habitasse lobortis. Aliquam et et orci ultrices interdum rhoncus arcu mi quis. Arcu fringilla tincidunt mauris ut risus massa ipsum. Metus adipiscing sed leo pharetra sed. Ut nulla libero vel ipsum adipiscing purus posuere. Dui pulvinar id enim tristique habitasse lobortis. Aliquam et et orci ultrices interdum rhoncus arcu mi quis. </Description>
            <div className='flex gap-4'>
                <Detail titleText={'Sales report'} infoText={'2022-2023'} svg={Sales} />
                <Detail titleText={'Orinoco Ferrominera wag...'} infoText={'2022-2023'} svg={PDF} />
            </div>
        </div>
    )
}

export default AboutCompany