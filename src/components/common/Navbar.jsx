import React from 'react'
import Heading from './Heading'
import Button from './Button'

const Navbar = () => {
    return (
        <div className='w-full mt-5 flex justify-between  min-[520px]:flex-row flex-col-reverse min-[520px]:gap-0 gap-3  sm:px-3'>
            <div className='flex sm:gap-[11px] gap-2 min-[350px]:flex-row flex-col'>
                <Heading className={'sm:text-[24px] text-xl whitespace-nowrap '} >Ferrominera Orinoco</Heading>
                <Button className={'text-[#62C9CC] whitespace-nowrap hover:bg-[#62C9CC] hover:text-white transition-colors duration-200 cursor-pointer  bg-[#1D2A4D] py-2 px-4 rounded-[100px] '} >Iron producer</Button>
            </div>
            <div className='flex justify-end '>
                <Button className={'text-[#62C9CC] bg-[#1A2449]  max-w-[90px] w-full hover:bg-[#62C9CC] hover:text-white transition-colors duration-200 cursor-pointer py-3 px-[26px] '}>Back </Button>
            </div>
        </div>
    )
}

export default Navbar