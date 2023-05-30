import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="text-gray-300">
          Desarrollado por Thomas Salduende &copy; {currentYear}
        </div>
        <a
          href="https://wa.me/3446476809"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white flex items-center"
        >
          <FaWhatsapp className="mr-1" />
          Contáctanos por WhatsApp
        </a>
      </div>
    </footer>
  );
};
