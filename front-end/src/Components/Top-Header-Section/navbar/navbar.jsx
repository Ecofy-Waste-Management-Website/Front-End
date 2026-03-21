import React, { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Services', 'Contact us', 'Blog'];

  return (
    // CHANGED: Replaced 'relative' with 'absolute top-0 left-0 z-50'
    <div className='absolute top-0 left-0 z-50 flex justify-end md:justify-center w-full py-6 px-6 md:px-0'>
      <nav className="bg-[#096b1e] rounded-full flex items-center justify-center h-[52px] w-[52px] md:w-fit md:px-12 font-['Roboto'] font-medium text-[16px] transition-all duration-300 z-50">
        
        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 whitespace-nowrap">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setActiveLink(item)}
              className={`transition-colors duration-200 ${
                activeLink === item 
                  ? 'text-[#facc15]' 
                  : 'text-white hover:text-yellow-200'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button 
          className="md:hidden text-white hover:text-yellow-200 focus:outline-none flex items-center justify-center w-full h-full"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* MOBILE DROPDOWN MENU */}
      {isMobileMenuOpen && (
        <div className="absolute top-24 right-6 flex flex-col items-center bg-[#096b1e] w-[200px] rounded-2xl py-6 gap-6 md:hidden shadow-xl font-['Roboto'] font-medium text-[16px] z-40">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => {
                setActiveLink(item);
                setIsMobileMenuOpen(false);
              }}
              className={`transition-colors duration-200 ${
                activeLink === item 
                  ? 'text-[#facc15]' 
                  : 'text-white hover:text-yellow-200'
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;