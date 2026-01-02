import React from 'react'
import heroImage from '../../assets/profile-image.jpg'

const HeroSection = () => {
    return (
        <div className={`rounded-xl flex flex-col p-8 gap-10 relative overflow-hidden bg-cover bg-center w-full border border-white/20`} style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="bg-[rgba(75,75,75,0.5)] w-fit px-4 py-2 rounded-full text-white text-sm border border-white/20 font-semibold shadow-lg shadow-black/30">
                <p><span>🔥</span> Now Trending</p>
            </div>
            <div className='flex flex-col gap-4 mt-5'>
                <div className='flex gap-2'>
                    <div className="bg-[rgba(75,75,75,0.5)] w-fit px-4 py-2 rounded-full text-white text-sm border border-white/20 font-semibold shadow-lg shadow-black/30">
                        <p>Drama</p>
                    </div>
                    <div className="bg-[rgba(75,75,75,0.5)] w-fit px-4 py-2 rounded-full text-white text-sm border border-white/20 font-semibold shadow-lg shadow-black/30">
                        <p>Fantasy</p>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col gap-2 text-white shadow-black/30'>
                    <h2 className='text-6xl font-semibold'>Dimensional Kids on an Adventure</h2>
                    <p>When two curious kids stumble into a hidden portal they travel across magical dimensions while trying to find their way back home...</p>
                </div>
            </div>

            <div className='flex items-center gap-2'>
                <button className='bg-(--secondary-color) px-4 py-2 rounded-lg text-black font-semibold text-lg cursor-pointer active:scale-95 transition-all duration-150'><i className="ri-play-large-fill text-lg"></i> Watch Now</button>
                <i className="ri-download-2-line text-2xl py-2 px-4 bg-[rgba(90,90,90,0.45)] backdrop-blur-sm rounded-lg shadow-lg shadow-black/30"></i>
                <p className='text-center text-2xl py-2 px-4 bg-[rgba(90,90,90,0.45)] backdrop-blur-sm rounded-lg shadow-lg shadow-black/30'>...</p>
            </div>
        </div>
    )
}

export default HeroSection
