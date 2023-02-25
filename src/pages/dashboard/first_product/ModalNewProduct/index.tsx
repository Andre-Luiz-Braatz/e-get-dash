import {useState,FormEvent} from "react"
import {Modal} from '../../../../components/Modal';
import {ModalProps} from './interface'
import * as S from "./styles"
import closeImg from "../../../../assets/close.svg";

function onlyLettersAndSpaces(string:string) {
  const regex = /[a-zA-Z0-9]/;
  const result = regex.test(string)
  return result;
}



export function ModalNewProduct({open,onClose}:ModalProps) {
  const [name,setName] = useState('')
  const [description,setDescription] = useState('')
  const [value,setValue] = useState('')
  const [stock,setStock] = useState('')
  const onSubmit = (event:FormEvent) => {
    event.preventDefault();    
    const validation = !onlyLettersAndSpaces(name) || !onlyLettersAndSpaces(description) || !onlyLettersAndSpaces(value) || !onlyLettersAndSpaces(stock)
    if(validation) 
      return alert("Dados do formulario estão invalidos");
    onClose()
  }
  const validationDataForm =
     (!onlyLettersAndSpaces(name) || !onlyLettersAndSpaces(description) || !onlyLettersAndSpaces(value) || !onlyLettersAndSpaces(stock))
  return (
    <Modal
      open={open}
      onClose={onClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <S.Container onSubmit={onSubmit}>
        <h2>Cadastrar produto</h2>
        <input
          type="text"
          placeholder="Nome"
          onChange={(event) => setName(event.target.value.trim())}
          required
          name="name"
        />
        <input
          type="text"
          placeholder="Descrição"
          onChange={(event) => setDescription(event.target.value.trim())}
          required
          name="description"
        />
        <input
          type="number"
          placeholder="Valor"
          onChange={(event) => setValue(event.target.value.trim())}
          min={0}
          required
          name="value"
        />
        <input
          type="number"
          placeholder="Estoque"
          onChange={(event) => setStock(event.target.value.trim())}
          min={0}
          required
          name="stock"
        />
        <button type="submit" disabled={validationDataForm}>Cadastrar</button>
      </S.Container>
    </Modal>
  )
}