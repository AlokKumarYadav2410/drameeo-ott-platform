import { Search, Bell, Menu } from "lucide-react";
import logo from '../assets/profile-image.jpg'

const Header = ({ onMobileMenuClick, isMinimized }) => {
  return (
    <header
      className={`fixed top-0 right-0 left-0 ${isMinimized ? "lg:left-20" : "lg:left-64"
        } bg-(--primary-color)/20 backdrop-blur-xl z-40 px-4 md:px-8 py-4 flex items-center justify-between gap-3 border-b border-white/5 transition-all duration-300`}
    >
      <button
        onClick={onMobileMenuClick}
        className="lg:hidden text-white p-2 hover:bg-white/5 rounded-lg shrink-0"
      >
        <Menu className="w-6 h-6" />
      </button>

      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
          <input type="text"
            placeholder='Search for films, directors or actors...'
            className='w-full bg-[rgba(255,255,255,0.08)] backdrop-blur-xl text-white pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 rounded-xl border border-white/20 shadow-lg shadow-black/20 focus:outline-none focus:ring focus:ring-(--secondary-color) placeholder-gray-500 text-sm md:text-base'
          />
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4 shrink-0">
        <button className="relative p-2 text-gray-400 hover:text-white transition-colors hover:bg-white/5 rounded-full cursor-pointer">
          <Bell className="w-5 h-5 md:w-6 md:h-6" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[rgba(255,255,255,0.08)] flex items-center justify-center cursor-pointer ring-2 ring-white/10 relative hover:ring-[#ac8dd4] hover:bg-[rgba(255,255,255,0.15)] transition-all duration-300 shrink-0">
          <img
            src={logo}
            alt="User"
            className="w-full h-full rounded-full object-cover border hover:border-[rgba(255,255,255,0.15)] transition-all duration-300"
          />
          <span className='bg-red-500 w-2 h-2 rounded-full absolute top-0 right-0'></span>
        </div>
      </div>
    </header>
  );
};

export default Header;