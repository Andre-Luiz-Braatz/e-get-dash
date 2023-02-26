import {useState,useEffect} from "react"
import {Modal} from '../../Modal';
import {ModalProps} from './interface'
import * as S from "./styles"
import closeImg from "../../../assets/close.svg";

export function ModalSettings({open,closeModal,user}:ModalProps) {
  const [email,setEmail] = useState(user.email)
  const [avatar,setAvatar] = useState(user.avatar)
 
  useEffect(()=>{ 
      setEmail(user.email)
      setAvatar(user.avatar)
  },[open])

  const handleEmail = (data:string) => {
    setEmail(data)
  }
  const handleAvatar = (data:string) => {
    setAvatar(data)
  }

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
          placeholder="Email"
          value={email}
          onChange={(event) => handleEmail(event.target.value)}
        />
        <input
          type="text"
          placeholder="Avatar"
          value={avatar}
          onChange={(event) => handleAvatar(event.target.value)}
        />
        <button type="submit">Atualizar</button>
      </S.Container>
    </Modal>
  )
}