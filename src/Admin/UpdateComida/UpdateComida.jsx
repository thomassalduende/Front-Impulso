import { Modal } from "../Modal/Modal"
import { FormUpdate } from "../FormUpdate/FormUpdate"


export const UpdateComida = ({openUpdate, handleCloseUpdate}) => {
  return (
    openUpdate ? 
    <Modal
        title="Modificar Comida"
        isOpen={openUpdate}
        onClose={handleCloseUpdate}
    >
        <FormUpdate/>
    </Modal>
    : null
  )
}

