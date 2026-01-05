import React from 'react'
import heroImage from '../assets/profile-image.jpg'

import { Flame, Play, Download, MoreHorizontal } from 'lucide-react';

const HeroSection = ({ heroData }) => {
    return (
        <div className={`rounded-xl flex flex-col gap-10 relative overflow-hidden bg-cover bg-center w-full`} >
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-linear-to-r from-[#2c2c4c]/80 via-[#0f0f1e]/80 to-transparent"></div>
                <div className="absolute inset-0 bg-linear-to-t from-[#0f0f1e] via-transparent to-transparent"></div>
            </div>
            <div className="relative h-full flex flex-col p-4 sm:p-10 gap-4 sm:gap-6 overflow-hidden bg-cover bg-center">
                <div className="bg-orange-800/20 text-orange-500 flex items-center justify-center gap-2 w-fit px-2.5 py-1 md:px-3 md:py-1.5 mt-20 sm:mt-0 rounded-full text-sm border border-orange-500/50 shadow-lg shadow-black/30">
                    <Flame className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span className='text-xs md:text-sm font-semibold'>{heroData.badge}</span>
                </div>
                <div className='flex gap-2'>
                    {heroData.tags.map((tag, index) =>
                        <span
                            key={index}
                            className="bg-[rgba(75,75,75,0.24)] w-fit px-2.5 py-0.5 md:px-3 md:py-1 rounded-full text-gray-300 text-sm border border-white/20 font-medium shadow-lg shadow-black/30">
                            {tag}
                        </span>
                    )}
                </div>

                <div className='space-y-2 sm:space-y-4'>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-2xl">
                    {heroData.title}
                </h1>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-2 max-w-xl leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {heroData.description}
                </p>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-4">
                    <button className="flex items-center gap-2 bg-(--secondary-color) text-white px-4 py-1 sm:py-2 rounded-lg font-semibold text-lg cursor-pointer hover:scale-105 active:scale-95 shadow-lg shadow-[#ac8dd4]/30 transition-all duration-150">
                        <Play className="w-4 h-4 md:w-5 md:h-5 fill-white" />
                        <span className="hidden sm:inline cursor-pointer">Watch Now</span>
                        <span className="sm:hidden">Watch</span>
                    </button>
                    <button className="flex items-center gap-2 bg-[#20192b]/60 backdrop-blur-md cursor-pointer hover:bg-[#20192b]/80 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-sm md:text-base font-semibold transition-all border border-white/10">
                        <Download className="w-4 h-4 md:w-5 md:h-5" />
                        <span className="hidden sm:inline">Download</span>
                    </button>
                    <button className="flex items-center justify-center bg-[#20192b]/60 backdrop-blur-md cursor-pointer hover:bg-[#20192b]/80 text-white px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl font-semibold transition-all border border-white/10">
                        <MoreHorizontal className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                    <div className="gap-2 ml-auto self-end hidden lg:flex">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-600 rounded-full"></div>
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-600 rounded-full"></div>
                    </div>
                </div>
                <div className="flex gap-2 mt-2 lg:hidden">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-600 rounded-full"></div>
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-600 rounded-full"></div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
