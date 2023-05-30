import logo from '../../assets/logo-filter.png';
import React, { useState, useContext } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';

import { AppContext } from '../../context/AppContext'
import { Modal } from "../Modal/Modal"
import { BotonConfirmar } from '../Botones/BotonConfirmar'

export const NavBarUser = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { removeAuth } = useContext(AppContext)
  const [openSesion, setOpenSesion] = useState(false)

  const handleClose = () => setOpenSesion(false);
  const handleOpen = () => setOpenSesion(true);

  const handleCerrarSesion = () => {
    removeAuth()
  }

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
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              onClick={toggleMenu}
            >
              <HiMenu className="h-6 w-6" />
            </button>
          </div>
          <div className={`md:flex ${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-end w-full md:w-auto`}>
            <div className="md:ml-4">
              <button
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={handleOpen}
              >
                <FaSignOutAlt className="inline-block mr-1" />
                Salir
              </button>
              {
                openSesion ? 
                <Modal title='Desea Cerrar Sesion?' isOpen={openSesion} onClose={handleClose}>
                    <BotonConfirmar onCancel={handleClose} onConfirm={handleCerrarSesion} />
                </Modal>
                : null
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};


