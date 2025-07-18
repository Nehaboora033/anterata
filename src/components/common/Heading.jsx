import React, { Children } from 'react'

const Heading = ({Children}) => {
  return (
    <div className={`font-medium`}>{Children} </div>
  )
}

export default Heading