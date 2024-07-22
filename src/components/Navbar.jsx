import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-white w-full pt-2 ${isScrolled ? 'fixed top-0 z-50 shadow-lg' : 'relative'}`}>
      <div className="max-w-6xl mx-auto px-4 py-4 md:py-0">
        <div className="flex justify-between items-center gap-3">
          <a href='#'>
            <img
              src="https://backoffice.samarashop.uz/media/Information/logo_Samara_qizil_hCpCbXK.png"
              alt="Samara"
              className="h-14"
            />
          </a>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="relative font-bold text-xs lg:text-sm text-gray-800 hover:text-red-500 py-6 px-3 underline-animation">Asosiy</a>
            <a href="#" className="relative font-bold text-xs lg:text-sm text-gray-800 hover:text-red-500 py-6 px-3 underline-animation">Tovarlar</a>
            <a href="#" className="relative font-bold text-xs lg:text-sm text-gray-800 hover:text-red-500 py-6 px-3 underline-animation">Afzalliklar</a>
            <a href="#" className="relative font-bold text-xs lg:text-sm text-gray-800 hover:text-red-500 py-6 px-3 underline-animation">Yangiliklar</a>
            <a href="#" className="relative font-bold text-xs lg:text-sm text-gray-800 hover:text-red-500 py-6 px-3 underline-animation">Aloqa</a>
          </div>
          <a href='#' className="md:flex md:bg-[#D50100] text-white font-semibold items-center gap-1 md:px-6 md:py-3 rounded-md button-animation">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="relative z-10 size-8 md:size-4 text-gray-500 md:text-current">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <span className='hidden md:block'>Mahsulotlaringiz</span>
          </a>
          <button className="md:hidden flex items-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 7.5h16.5m-16.5 7.5h16.5" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4">
            <a href="#" className="relative font-bold text-xs lg:text-sm text-gray-800 hover:text-red-500 py-2 px-3 underline-animation">Asosiy</a>
            <a href="#" className="relative font-bold text-xs lg:text-sm text-gray-800 hover:text-red-500 py-2 px-3 underline-animation">Tovarlar</a>
            <a href="#" className="relative font-bold text-xs lg:text-sm text-gray-800 hover:text-red-500 py-2 px-3 underline-animation">Afzalliklar</a>
            <a href="#" className="relative font-bold text-xs lg:text-sm text-gray-800 hover:text-red-500 py-2 px-3 underline-animation">Yangiliklar</a>
            <a href="#" className="relative font-bold text-xs lg:text-sm text-gray-800 hover:text-red-500 py-2 px-3 underline-animation">Aloqa</a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
