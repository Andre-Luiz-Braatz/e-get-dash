import {useState,FormEvent} from "react"
import {Modal} from '../../../../components/Modal';
import {ModalProps} from './interface'
import * as S from "./styles"
import closeImg from "../../../../assets/close.svg";
import {ModalNewProduct} from '../ModalNewProduct'

function onlyLettersAndSpaces(string:string) {
  const regex = /[a-zA-Z0-9]/;
  const result = regex.test(string)
  return result;
}

export function ModalNewCategory({open,onClose}:ModalProps) {
  const [openModalProduct,setOpenModalProduct] = useState(false)
  const [name,setName] = useState('')
  const [description,setDescription] = useState('')
  const onCloseModalProduct = () => setOpenModalProduct(false)
  const onSubmit = (event:FormEvent) => {
    event.preventDefault();    
    if(!onlyLettersAndSpaces(name) || !onlyLettersAndSpaces(description)) 
      return alert("Dados do formulario estão invalidos");
    setOpenModalProduct(true);
    onClose()
  }

  const validationDataForm =
     (!onlyLettersAndSpaces(name) || !onlyLettersAndSpaces(description))

  return (
    <>
      <ModalNewProduct open={openModalProduct} onClose={onCloseModalProduct}/>
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
          <h2>Cadastrar categoria</h2>
          <h3>Você precisa criar uma categoria para criar um produto!</h3>
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
          <button type="submit" disabled={validationDataForm}>Cadastrar</button>
        </S.Container>
      </Modal>
    </>
  )
}