import { useEffect, useState } from "react";
import { Settings, LogOut, Menu, Tv, ListCollapse } from "lucide-react";
import { menuItems, libraryItems } from "../../data/sidebarData";
import SidebarItem from "./SidebarItem";
import SidebarTooltip from "./SidebarTooltip";

const Sidebar = ({ isMinimized, onToggle, isMobile, setTooltip }) => {
  // const [tooltip, setTooltip] = useState({
  //   visible: false,
  //   label: "",
  //   top: 0,
  // });

  const showTooltip = (e, label) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({
      visible: true,
      label,
      top: rect.top + rect.height / 2,
    });
  };

  const hideTooltip = () => {
    setTooltip(prev => ({ ...prev, visible: false }));
  };

  return (
    <div className={`${isMinimized && !isMobile ? 'w-20 p-3' : 'w-64 p-5'} bg-[rgba(255,255,255,0.03)] backdrop-blur-2xl h-screen fixed rounded-r-2xl left-0 top-0 flex flex-col z-50 overflow-y-auto overflow-x-hidden  border-r border-white/10 shadow-md shadow-white/20 transition-all duration-300`}>
      
      {/* Logo */}
      <div className={`flex items-center ${isMinimized && !isMobile ? 'justify-center' : 'justify-between'} mb-5 shrink-0`}>
        {isMinimized && !isMobile ? (
          <div className="w-10 h-10 bg-(--secondary-color) rounded-lg flex items-center justify-center shrink-0">
            <Tv className="w-5 h-5 text-white" />
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-(--secondary-color) rounded-lg flex items-center justify-center shrink-0">
                <Tv className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-semibold text-white whitespace-nowrap">
                Drameeo
              </span>
            </div>
            <button
              onClick={onToggle}
              className="text-gray-400 hover:text-white transition-all duration-300 shrink-0 cursor-pointer self-center"
            >
              {/* <Menu className="w-5 h-5" /> */}
              <ListCollapse className="w-5 h-5 rotate-180" />
            </button>
          </>
        )}
      </div>

      <nav className="overflow-y-auto overflow-x-hidden">
        {menuItems.map(item => (
          <SidebarItem
            key={item.label}
            {...item}
            isMinimized={isMinimized}
            isMobile={isMobile}
            onHover={(e) => showTooltip(e, item.label)}
            onLeave={hideTooltip}
          />
        ))}

        <div className="border-b border-white/10 my-4"></div>

        {libraryItems.map(item => (
          <SidebarItem
            key={item.label}
            {...item}
            isMinimized={isMinimized}
            isMobile={isMobile}
            onHover={(e) => showTooltip(e, item.label)}
            onLeave={hideTooltip}
          />
        ))}

        <div className="border-b border-white/10 my-4"></div>
      </nav>

      <div>
        <SidebarItem
          icon={Settings}
          label="Settings"
          isMinimized={isMinimized}
          isMobile={isMobile}
          onHover={(e) => showTooltip(e, "Settings")}
          onLeave={hideTooltip}
        />

        <SidebarItem
          icon={LogOut}
          label="Logout"
          isMinimized={isMinimized}
          isMobile={isMobile}
          onHover={(e) => showTooltip(e, "Logout")}
          onLeave={hideTooltip}
        />
      </div>

     {/* <SidebarTooltip
  {...tooltip}
  visible={tooltip.visible && isMinimized && !isMobile}
/> */}

      {isMinimized && !isMobile && (
        <button
          onClick={onToggle}
          className="mt-4 w-full flex items-center justify-center py-3 text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          {/* <Menu className="w-5 h-5" /> */}
          <ListCollapse className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Sidebar;
