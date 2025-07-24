import React from 'react'
import Invest from '../Invest'
import CompanyGallery from '../CompanyGallery'

const RightSideBar = () => {
  return (
    <div className='min-[1340px]:w-[360px] flex max-lg:flex-col min-[1340px]:flex-col gap-6'>
      <Invest />
      <CompanyGallery />
    </div>
  )
}

export default RightSideBar