import React from 'react'

const Button = ({ children, className }) => {
  return (
    <button className={`${className} rounded-[8px]`}>{children} </button>
  )
}

export default Button