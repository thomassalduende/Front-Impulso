import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { Formulario } from "./Fomulario"


export const Agregar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  return (
    <>
    <div className="flex justify-center mt-2 mb-4">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={handleOpenModal}>
        Agregar comida
      </button>
    </div>
    {
        isModalOpen ? 
        <Modal title="Agregar Comida" isOpen={handleOpenModal} onClose={handleCloseModal}>
            <Formulario/>
        </Modal>
        : null
    }

    </>
  )
}
