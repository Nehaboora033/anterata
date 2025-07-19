import { useState } from 'react'
import './App.css'
import Header from './components/common/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/common/Footer'
import SideNavBar from './components/common/SideNavBar'

function App() {
  

  return (
    <div className="flex min-h-screen flex-col bg-[#12123A] text-white">
      <Header />
      <div className="flex flex-1 ">
        <SideNavBar />
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
