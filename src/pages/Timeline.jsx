import React from 'react'
import AboutCompany from '../components/AboutCompany'
import Hero from '../components/Hero'
import HowIts from '../components/HowIts'
import RightSideBar from '../components/common/RightSideBar'
import Navbar from '../components/common/Navbar'


const Timeline = () => {
  return (
    <>
      <Navbar />

      <div className='flex mt-4 min-[1340px]:flex-row flex-col min-[1340px]:gap-5 gap-6 justify-between '>
        <div>
          <Hero />
          <HowIts />
          <AboutCompany />
        </div>
        <div className=''>
          <RightSideBar />
        </div>
      </div>
    </>
  )
}

export default Timeline