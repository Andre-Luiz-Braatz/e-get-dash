import {useState,FormEvent,useEffect} from "react"
import * as S from "./styles";
import {request} from '../../http'
import md5 from 'md5'
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { changeUser } from "../../redux/userSlice";

function onlyLettersAndSpaces(string:string) {
  const regex = /[a-zA-Z0-9]/;
  const result = regex.test(string)
  return result;
}

export function Signin() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmit = (event:FormEvent) => {
    event.preventDefault();    
    if(!onlyLettersAndSpaces(password) || !onlyLettersAndSpaces(email)) 
      return alert("Dados do formulario estão invalidos");
    // dispatch(actions.get_user({email,password}));
    request({type:'get',router: 'signin',data: 
    {password: md5(password),email}},(res,error)=>{
      if(error) alert("Não foi possivel fazer o login!")
      else {
        dispatch(changeUser(res.data))
        navigate("/")
      }
    })
  }

  const validationDataForm =
  (!onlyLettersAndSpaces(password) || !onlyLettersAndSpaces(email))
  const user = useSelector((state:any) => state.user);
  
  return (
    <S.Container>
      <S.Form onSubmit={onSubmit}>
        <h1>Faça seu login</h1>
        <input
          type="text"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value.trim())}
          required
          name="email"
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value.trim())}
          required
          name="password"
        />
        <button type="submit" disabled={validationDataForm}>Entrar</button>
        <a href="/signup">Não tem conta? Cadastre agora!</a>
      </S.Form>
    </S.Container>
  );
}
