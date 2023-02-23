import {useState} from "react"
import Modal from 'react-modal';
import {ModalProps} from './interface'
import {Button} from "../../Button"

export function ModalSettings({open,closeModal}:ModalProps) {
  return(
    <Modal
      isOpen={open}
      contentLabel="edit user"
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <div>Editar usúario</div>
      <form>
        <input />
      </form>
      <Button
        onClick={closeModal}
        backgroundColor="transparent"
        textColor="blue"
        size="0.9rem"
        fontWeight="bold"
      >
        Fechar
      </Button>
      <Button
        onClick={closeModal}
        backgroundColor="transparent"
        textColor="blue"
        size="0.9rem"
        fontWeight="bold"
      >
        Salvar
      </Button>
    </Modal>

  )
}