import {useState} from "react"
import {Modal} from '../../Modal';
import {ModalProps} from './interface'
import * as S from "./styles"
import closeImg from "../../../assets/close.svg";

export function ModalSettings({open,closeModal}:ModalProps) {
 
  return (
    <Modal
      open={open}
      onClose={closeModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={closeModal} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <S.Container >
        <h2>Atualizar informações</h2>
        <input
          type="text"
          placeholder="Nome"
          onChange={(event) => console.log(event.target.value)}
        />
        <input
          type="text"
          placeholder="Avatar"
          onChange={(event) => console.log(event.target.value)}
        />
        <button type="submit">Atualizar</button>
      </S.Container>
    </Modal>
  )
}