import {useState,FormEvent,useEffect} from "react"
import {Modal} from '../../../../components/Modal';
import {ModalProps} from './interface'
import * as S from "./styles"
import closeImg from "../../../../assets/close.svg";
import {request} from '../../../../http'
import { useSelector, useDispatch } from "react-redux";
import { changeProduct } from "../../../../redux/productSlice";

function onlyLettersAndSpaces(string:string) {
  const regex = /[a-zA-Z0-9]/;
  const result = regex.test(string)
  return result;
}

export function ModalProduct({open,onClose, item}:ModalProps) {
  const user = useSelector((state:any) => state.user);
  const dispatch = useDispatch();

  const [name,setName] = useState(item.name)
  const [description,setDescription] = useState(item.description)
  const [value,setValue] = useState(item.value)
  const [stock,setStock] = useState(item.stock)
  const onSubmit = (event:FormEvent) => {
    event.preventDefault();    
    const validation = !onlyLettersAndSpaces(name) || !onlyLettersAndSpaces(description) || !onlyLettersAndSpaces(value) || !onlyLettersAndSpaces(stock)
    if(validation) 
      return alert("Dados do formulario estão invalidos");
      const data = {name,description,value,stock,category_id: item.category_id,
        user_id: user.data.id}
      request({type:'put',router: `product/${item.id}`,data},(res,error)=>{
        if(error) alert("Não foi possivel alterar o registro!");
        else {
          request({type:'get',router: `product`,data: {user_id: user.data.id}},(res,error)=>{
            if(error) alert("Não foi possivel pegar os produtos!");
            else dispatch(changeProduct(res.data))
          })
        }
        onClose()
      })    
  }
  const validationDataForm = (item.name === name && item.description === description &&
  item.value == value && item.stock == stock)

  useEffect(()=>{ 
    setName(item.name)
    setDescription(item.description)
    setValue(item.value)
    setStock(item.stock)
  },[open])

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
        <h2>Atualizar produto</h2>
        <input
          type="text"
          placeholder="Nome"
          onChange={(event) => setName(event.target.value.trim())}
          required
          name="name"
          value={name}
        />
        <input
          type="text"
          placeholder="Descrição"
          onChange={(event) => setDescription(event.target.value.trim())}
          required
          name="description"
          value={description}
        />
        <input
          type="number"
          placeholder="Valor"
          onChange={(event) => setValue(event.target.value.trim())}
          min={0}
          required
          name="value"
          value={value}
        />
        <input
          type="number"
          placeholder="Estoque"
          onChange={(event) => setStock(event.target.value.trim())}
          min={0}
          required
          name="stock"
          value={stock}
        />
        <button type="submit" disabled={validationDataForm}>Atualizar</button>
      </S.Container>
    </Modal>
  )
}