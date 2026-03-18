import React from 'react';
import background from '../../assets/background.png';

export default function Hero() {
  return (
    <section 
      // CHANGED: Removed min-h-screen. Added py-40 md:py-56 to scale with content.
      className="relative flex w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-40 md:py-56"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center justify-center px-4 text-center">
        
        {/* Main Heading */}
        <h1 className="max-w-4xl text-5xl font-light tracking-tight text-white md:text-7xl">
          Smart Way to <br />
          <span className="font-semibold">Manage </span>
          <span className="font-bold text-yellow-400">Waste</span>
        </h1>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-2 rounded-full bg-yellow-400 px-8 py-3 font-semibold text-black transition-all hover:bg-yellow-300">
            <span className="text-xl">🕒</span> Pickup now
          </button>
          <button className="rounded-full bg-white px-8 py-3 font-semibold text-gray-800 transition-all hover:bg-gray-100">
            Schedule Later
          </button>
        </div>

        {/* Connected Input Fields Container */}
        <div className="relative mx-auto mt-12 flex w-full max-w-lg flex-col gap-4">
          
          {/* The Connecting Dashed Line */}
          <div className="absolute bottom-6 left-[30px] top-6 z-0 border-l border-dashed border-black"></div>

          {/* Pickup Location Input */}
          <div className="relative z-10 w-full">
            <div className="absolute left-6 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-black"></div>
            <input 
              type="text" 
              placeholder="Pickup Location" 
              className="w-full rounded-full border-none bg-white py-4 pl-14 pr-12 text-gray-900 shadow-lg outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="absolute right-5 top-1/2 -translate-y-1/2 text-black transition-colors hover:text-gray-500">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Destination Input */}
          <div className="relative z-10 w-full">
            <div className="absolute left-6 top-1/2 h-3 w-3 -translate-y-1/2 border border-black bg-yellow-400"></div>
            <input 
              type="text" 
              placeholder="Destination" 
              className="w-full rounded-full border-none bg-white py-4 pl-14 pr-6 text-gray-900 shadow-lg outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
}