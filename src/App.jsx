import React from 'react'
import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import SidebarTooltip from './components/Sidebar/SidebarTooltip.jsx';
import MobileMenu from './components/MobileMenu.jsx';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import ContinueWatching from './components/ContinueWatching.jsx';
import YouMightLike from './components/YouMightLike.jsx';
import { heroData, continueWatchingData, youMightLikeData } from './data/allData';

const App = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  function handleMobileMenuToggle() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function handleSidebarToggle() {
    setIsSidebarMinimized(!isSidebarMinimized);
  }

  const [tooltip, setTooltip] = useState({
    visible: false,
    label: "",
    top: 0,
  });


  return (
    <div className='bg-(--primary-color) min-h-screen'>
      <div className='hidden lg:block'>
        <Sidebar
          isMinimized={isSidebarMinimized}
          onToggle={handleSidebarToggle}
          isMobile={false}
          setTooltip={setTooltip}
        />

        {tooltip.visible && isSidebarMinimized && !isMobileMenuOpen && (
          <SidebarTooltip
            {...tooltip}
          />
        )}
      </div>

      <div className='lg:hidden'>
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={handleMobileMenuToggle}
        />
      </div>

      <div className={`${isSidebarMinimized ? "lg:ml-20" : "lg:ml-64"
        } min-h-screen transition-all duration-300`}
      >
        <Header
          onMobileMenuClick={handleMobileMenuToggle}
          isMinimized={isSidebarMinimized}
        />

        <main className="pt-20 md:pt-24 px-4 md:px-8 pb-8 space-y-6 md:space-y-8">
          <HeroSection heroData={heroData} />
          <ContinueWatching continueWatchingData={continueWatchingData} />
          <YouMightLike youMightLikeData={youMightLikeData} />
        </main>
      </div>
    </div>
  )
}

export default App
