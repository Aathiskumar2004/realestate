import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative sticky top-0 z-50 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-orange-100/50 px-6 md:px-10 py-3 text-slate-800 shadow-sm">
      
      <div className="flex flex-col items-center cursor-pointer group">
        <svg
          className="h-9 w-9 text-orange-600 group-hover:scale-105 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        <span className="text-xs font-bold tracking-wider text-orange-600 mt-1">
          MYBRAND
        </span>
      </div>

      <ul className="hidden md:flex gap-3 list-none m-0 p-0 items-center">
        <li>
          <a href="#home" className="text-orange-600 font-semibold text-sm px-4 py-2 rounded-lg hover:text-orange-600 hover:bg-orange-50/80 transition-all duration-300">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-orange-600 font-semibold text-sm px-4 py-2 rounded-lg hover:text-orange-600 hover:bg-orange-50/80 transition-all duration-300">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="text-orange-600 font-semibold text-sm px-4 py-2 rounded-lg hover:text-orange-600 hover:bg-orange-50/80 transition-all duration-300">
            Services
          </a>
        </li>
        <li>
          <a href="#contact" className="text-orange-600 font-semibold text-sm px-4 py-2 rounded-lg hover:text-orange-600 hover:bg-orange-50/80 transition-all duration-300">
            Contact
          </a>
        </li>
      </ul>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block md:hidden text-orange-600 hover:text-orange-500 focus:outline-none transition-colors duration-200"
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-orange-100 px-6 py-4 shadow-md md:hidden">
          <ul className="flex flex-col gap-4 list-none m-0 p-0">
            <li>
              <a
                href="#home"
                onClick={() => setIsOpen(false)} 
                className="block text-orange-600 font-semibold text-sm py-2 px-3 rounded-lg hover:text-orange-600 hover:bg-orange-50/80 transition-all"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="block text-orange-600 font-semibold text-sm py-2 px-3 rounded-lg hover:text-orange-600 hover:bg-orange-50/80 transition-all"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={() => setIsOpen(false)}
                className="block text-orange-600 font-semibold text-sm py-2 px-3 rounded-lg hover:text-orange-600 hover:bg-orange-50/80 transition-all"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block text-orange-600 font-semibold text-sm py-2 px-3 rounded-lg hover:text-orange-600 hover:bg-orange-50/80 transition-all"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;