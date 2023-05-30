import React from 'react'
import { Modal } from '../Modal/Modal'
import { BotonConfirmar } from "../Botones/BotonConfirmar"
import { useParams } from 'react-router-dom';
import { DeleteComida } from '../../service/deleteComida';

export const EliminarComida = ({eliminar, handleClose}) => {
  const { id } = useParams()

  const handleDelete = () => {
    DeleteComida(id).then(window.location.reload(true))
  }
  return (
    eliminar ? 
    <Modal 
        title="Estas seguro que deseas eliminar?"
        isOpen={eliminar}
        onClose={handleClose}
    >
      <BotonConfirmar onCancel={handleClose} onConfirm={handleDelete} />
    </Modal>
    : null
  )
}

