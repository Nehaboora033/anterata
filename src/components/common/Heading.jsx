import React from 'react'

const Heading = ({ children, className }) => {
  return (
    <div className={`${className} font-medium `}>
      {children}
    </div>
  )
}

export default Heading