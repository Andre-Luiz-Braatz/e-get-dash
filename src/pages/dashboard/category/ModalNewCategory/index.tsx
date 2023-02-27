import {useState,FormEvent,useEffect} from "react"
import {Modal} from '../../../../components/Modal';
import {ModalProps} from './interface'
import * as S from "./styles"
import closeImg from "../../../../assets/close.svg";
import {request} from '../../../../http'
import { useSelector, useDispatch } from "react-redux";
import { changeProduct } from "../../../../redux/productSlice";
import { changeCategory } from "../../../../redux/categorySlice";

function onlyLettersAndSpaces(string:string) {
  const regex = /[a-zA-Z0-9]/;
  const result = regex.test(string)
  return result;
}

export function ModalNewProduct({open,onClose}:ModalProps) {
  const user = useSelector((state:any) => state.user);
  const categorys = useSelector((state:any) => state.category);
  const dispatch = useDispatch();

  const [name,setName] = useState('')
  const [description,setDescription] = useState('')
  const onSubmit = (event:FormEvent) => {
    event.preventDefault();    
    const validation = !onlyLettersAndSpaces(name) || !onlyLettersAndSpaces(description)
    if(validation) 
      return alert("Dados do formulario estão invalidos");
      const data = {name,description,user_id: user.data.id}
      request({type:'post',router: `category`,data},(res,error)=>{
        if(error) alert("Não foi possivel criar o registro!");
        else {
          request({type:'get',router: `category`,data: {user_id: user.data.id}},(res,error)=>{
            if(error) alert("Não foi possivel pegar as categorias!");
            else dispatch(changeCategory(res.data))
          })
        }
        onClose()
      })    
  }
  const validationDataForm =
     (!onlyLettersAndSpaces(name) || !onlyLettersAndSpaces(description))

  useEffect(()=>{ 
    setName('')
    setDescription('')
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
        <h2>Cadastrar produto</h2>
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
        <button type="submit" disabled={validationDataForm}>Atualizar</button>
      </S.Container>
    </Modal>
  )
}