import React from 'react'

const SideBarLeft = () => {
    return (
        <div className="flex flex-col gap-4 p-5 min-h-screen bg-[rgba(255,255,255,0.08)] backdrop-blur-xl border border-white/20 rounded-xl shadow-lg shadow-black/20">
            {/* Header */}
            <div className="flex justify-between items-center gap-10 mb-2">
                <div className="flex gap-3 items-center">
                    <i class="ri-tv-line text-2xl bg-(--secondary-color)/60 text-black px-2 py-1 rounded-md"></i>
                    <h1 className="text-2xl font-bold text-white">Drameeo</h1>
                </div>
                <i className="ri-menu-line text-2xl self-end text-white/70 cursor-pointer"></i>
            </div>

            {/* Menu Items */}
            <div className="flex gap-4 items-center text-white/80 hover:text-(--secondary-color) transition cursor-pointer">
                <i className="ri-home-8-fill text-2xl"></i>
                <p className="text-lg">Home</p>
            </div>

            <div className="flex gap-4 items-center text-white/70 hover:text-(--secondary-color) transition cursor-pointer">
                <i className="ri-compass-3-line text-2xl"></i>
                <p className="text-lg">Explore</p>
            </div>

            <div className="flex gap-4 items-center text-white/70 hover:text-(--secondary-color) transition cursor-pointer">
                <i className="ri-database-2-line text-2xl"></i>
                <p className="text-lg">Genres</p>
            </div>

            <div className="flex gap-4 items-center text-white/70 hover:text-(--secondary-color) transition cursor-pointer">
                <i className="ri-bookmark-line text-2xl"></i>
                <p className="text-lg">Favourites</p>
            </div>

            <div className="border-t border-white/10"></div>
            <div className="flex gap-4 items-center text-white/70 hover:text-(--secondary-color) transition cursor-pointer">
                <i className="ri-play-large-fill text-2xl"></i>
                <p className="text-lg">Continue Watching</p>
            </div>
            <div className="flex gap-4 items-center text-white/70 hover:text-(--secondary-color) transition cursor-pointer">
                <i className="ri-time-line text-2xl"></i>
                <p className="text-lg">Recently Added</p>
            </div>
            <div className="flex gap-4 items-center text-white/70 hover:text-(--secondary-color) transition cursor-pointer">
                <i className="ri-folder-open-line text-2xl"></i>
                <p className="text-lg">My Collections</p>
            </div>
            <div className="flex gap-4 items-center text-white/70 hover:text-(--secondary-color) transition cursor-pointer">
                <i className="ri-download-2-line text-2xl"></i>
                <p className="text-lg">Downloads</p>
            </div>
            <div className="border-t border-white/10"></div>
            <div className="flex gap-4 items-center text-white/70 hover:text-(--secondary-color) transition cursor-pointer">
                <i className="ri-settings-5-line text-2xl"></i>
                <p className="text-lg">Settings</p>
            </div>

            <div className="flex gap-4 mt-auto items-center text-white/70 hover:text-(--secondary-color) transition cursor-pointer">
                <i className="ri-logout-box-r-line text-2xl"></i>
                <p className="text-lg">Logout</p>
            </div>
        </div>
    )
}

export default SideBarLeft
