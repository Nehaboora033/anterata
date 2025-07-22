import { useState } from 'react'
import './App.css'
import Header from './components/common/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/common/Footer'
import SideNavBar from './components/common/SideNavBar'
import RightSideBar from './components/common/RightSideBar'

function App() {


  return (
    <div className="h-screen bg-[#12123A] text-white flex flex-col">
      {/* Fixed Header */}
      <div className="z-10">
        <Header />
      </div>

      {/* Main Content Layout */}
      <div className="flex-1 flex overflow-hidden gap-6 ">
        {/* Sidebar */}
        <aside className="">
          <SideNavBar />
        </aside>

        {/* Scrollable Center and Right Section */}
        <div className="my-[10px] gap-3 flex flex-1 w-full pr-4">
          {/* Scrollable Center Content Area */}
          <main className="flex-1 overflow-y-auto ">
            <Outlet />
          </main>

          {/* Scrollable Right Sidebar */}
          <aside className="overflow-y-auto">
            <RightSideBar />
          </aside>
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


// < div className = "flex min-h-screen flex-col bg-[#12123A] text-white" >
//     <Header />
//     <div className="flex flex-1 ">
//       <SideNavBar />
//       <main className="flex-1 p-4 overflow-y-auto ">
//         <Outlet />
//       </main>
//       <RightSideBar/>
//     </div>
//     <Footer />
//   </div >