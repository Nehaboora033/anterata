import { useState } from 'react'
import './App.css'
import Header from './components/common/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/common/Footer'
import SideNavBar from './components/common/SideNavBar'
import RightSideBar from './components/common/RightSideBar'
import Button from './components/common/Button'

function App() {


  return (
    <div className="h-screen bg-[#12123A] text-white flex flex-col">
      {/* Fixed Header */}
      <div className="z-10">
        <Header />
      </div>

      {/* Main Content Layout */}
      <div className="flex-1 flex overflow-hidden md:gap-6 pl-3 ">
        {/* Sidebar */}
        <aside className="">
          <SideNavBar />
        </aside>

        {/* Scrollable Center and Right Section */}
        <div className="my-[10px] gap-3 flex  flex-1 w-full pr-3 ">
          {/* Scrollable Center Content Area */}
          <main className="flex-1 overflow-y-auto ">
            <Outlet />
          </main>

          {/* Scrollable Right Sidebar */}
          {/* <div className='flex flex-col'> */}
            {/* <div className='flex justify-end '><Button className={'text-[#62C9CC] hover:text-white hover:bg-[#62C9CC] transition-colors duration-200 ease-in-out cursor-pointer px-[26.5px] py-4 bg-[#1A2449] mb-[12px]'}>Back</Button></div> */}
            {/* <aside className="overflow-y-auto">
              <RightSideBar />
            </aside> */}
          {/* </div> */}
        </div>
      </div>

      {/* Fixed Footer */}
      <div className="z-10">
        <Footer />
      </div>
    </div>
  )
}

export default App