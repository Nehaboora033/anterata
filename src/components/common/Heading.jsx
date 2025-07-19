import React from 'react'

const Heading = ({children,className}) => {
  return (
    <div className={`${className} font-normal`}>
      {children}
    </div>
  )
}

export default Heading