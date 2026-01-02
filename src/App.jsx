import React from 'react'
import SideBarLeft from './Components/SideBar/SideBarLeft'
import Navbar from './Components/Navbar/Navbar'
import MainContainer from './Components/MainContainer/MainContainer'

const App = () => {
  return (
    <div className='flex gap-8 w-full bg-(--primary-color) min-h-screen p-4 text-white'>
      <SideBarLeft />
      <div className='flex-1 flex flex-col gap-4'>
        {/* Main Content */}
        <Navbar />
        <MainContainer />
      </div>
    </div>
  )
}

export default App
