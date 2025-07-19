import React from 'react'

const Description = ({ className = '', children }) => {
  return (
    <div className={`text-[14px] font-normal ${className}`}>
      {children}
    </div>
  )
}

export default Description