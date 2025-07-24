        import React from 'react'
import Heading from './common/Heading'
import Description from './common/Description'
import { PDF, Sales } from '../utils/icon'
import Details from './common/Details'

const AboutCompany = () => {
    return (
        <div className=' p-[20px] bg-[#151940] rounded-[10px] '>
            <Heading className='text-white text-xl  mb-[15px] '>About company</Heading>
            <Description className=''>Dictum sit lobortis hendrerit morbi leo amet sapien ipsum blandit. </Description>
            <Description className='text-[#8A8C9F] min-[550px]:max-w-[690px] w-full mt-2 mb-[7px]'>Arcu fringilla tincidunt mauris ut risus massa ipsum. Metus adipiscing sed leo pharetra sed. Ut nulla libero vel ipsum adipiscing purus posuere. Dui pulvinar id enim tristique habitasse lobortis. Aliquam et et orci ultrices interdum rhoncus arcu mi quis. Arcu fringilla tincidunt mauris ut risus massa ipsum. Metus adipiscing sed leo pharetra sed. Ut nulla libero vel ipsum adipiscing purus posuere. Dui pulvinar id enim tristique habitasse lobortis. Aliquam et et orci ultrices interdum rhoncus arcu mi quis. </Description>
            <div className='flex min-[550px]:gap-4 min-[520px]:flex-row flex-col  '>
                <Details titleText={'Sales report'} infoText={'2022-2023'} svg={Sales} />
                <Details titleText={'Orinoco Ferrominera wag...'} infoText={'2022-2023'} svg={PDF} />
            </div>
        </div>
    )
}

export default AboutCompany