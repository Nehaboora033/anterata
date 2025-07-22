import React from 'react'

const Data = ({svg: Icon,titleText,className=''}) => {
  return (
      <div className={`${className} text-[#B8B9C5] flex items-center group hover:bg-[#62C9CC] cursor-pointer `}>
          <Icon className={ 'group-hover:text-white'} />
          <span className='group-hover:text-white'>{titleText}</span>
    </div>
  )
}

export default Data