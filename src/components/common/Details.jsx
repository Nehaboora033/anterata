import React from 'react'

const Details = ({ titleText, infoText, svg: Icon,className }) => {
    return (
        <div className={`max-w-[223px] w-full  py-[9.5px] flex gap-[10px] ${className}`}>
            <div className='flex items-center justify-center rounded-[8px] bg-[#62C9CC] h-[36px] w-[36px]'>
                <Icon />
            </div>
            <div>
                <p className='font-normal text-[14px] '>{titleText} </p>
                <p className='font-noraml text-[14px] text-[#8A8C9F]'>{infoText} </p>
            </div>
        </div>
    )
}

export default Details