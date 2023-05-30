import logo from '../../../assets/logo-filter.png';
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <div className="flex items-center justify-start w-[140px]">
            <a href="#" className="">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              onClick={toggleMenu}
            >
              <HiMenu className="h-6 w-6" />
            </button>
          </div>
          <div className={`md:flex ${isOpen ? 'flex' : 'hidden'} items-center md:flex-col`}>
            <div className="ml-10 md:ml-0 md:mt-0 flex items-baseline space-x-4">
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
              <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                <FaWhatsapp className="inline-block mr-1" />
               WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
