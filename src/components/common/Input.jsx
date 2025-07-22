import React from 'react'

const Input = ({ placeholderText, inputclass, svg: Icon }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholderText}
        className={`text-[14px] font-normal text-[#BDBDC8]  pl-10 ${inputclass}`}
      />

      <span className="absolute  top-1/2 -translate-y-1/2 right-3 ">
        {/* {children} */}
        <Icon className='cursor-pointer hover:scale-110' />
      </span>
    </div>
  )
}

export default Input