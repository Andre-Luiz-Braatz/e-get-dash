import {useState,FormEvent} from "react"
import * as S from "./styles";
import { useSelector,useDispatch } from "react-redux";
import { changeUser } from "../../redux/userSlice";
import {request} from '../../http'
import md5 from 'md5'
import { useNavigate } from "react-router-dom";

function onlyLettersAndSpaces(string:string) {
  const regex = /[a-zA-Z0-9]/;
  const result = regex.test(string)
  return result;
}

export function Signup() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmit = (event:FormEvent) => {
    event.preventDefault();    
    if(!onlyLettersAndSpaces(password) || !onlyLettersAndSpaces(email)) 
      return alert("Dados do formulario estão invalidos");
    request({type:'post',router: 'signup',data: 
    {password: md5(password),email}},(res,error)=>{
      if(error) alert("Não foi possivel fazer o registro!")
      else {
        dispatch(changeUser(res.data))
        navigate("/")
      }
    })
  }

  const validationDataForm =
  (!onlyLettersAndSpaces(password) || !onlyLettersAndSpaces(email))

  return (
    <S.Container>
      <S.Form onSubmit={onSubmit}>
        <h1>Cadastre sua conta</h1>
        <input
          type="text"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value.trim())}
          required
          name="email"
        />
        <input
          type="text"
          placeholder="Senha"
          onChange={(event) => setPassword(event.target.value.trim())}
          required
          name="password"
        />
        <button type="submit" disabled={validationDataForm}>Cadastrar</button>
        <a href="/signin">Já tem conta?</a>
      </S.Form>
    </S.Container>
  );
}
