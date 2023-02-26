import {useState,FormEvent} from "react"
import * as S from "./styles";

function onlyLettersAndSpaces(string:string) {
  const regex = /[a-zA-Z0-9]/;
  const result = regex.test(string)
  return result;
}

export function Signup() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')

  const onSubmit = (event:FormEvent) => {
    event.preventDefault();    
    if(!onlyLettersAndSpaces(name) || !onlyLettersAndSpaces(email)) 
      return alert("Dados do formulario estão invalidos");
  }

  const validationDataForm =
  (!onlyLettersAndSpaces(name) || !onlyLettersAndSpaces(email))

  return (
    <S.Container>
      <S.Form onSubmit={onSubmit}>
        <h1>Cadastre sua conta</h1>
        <input
          type="text"
          placeholder="Nome"
          onChange={(event) => setName(event.target.value.trim())}
          required
          name="name"
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value.trim())}
          required
          name="email"
        />
        <button type="submit" disabled={validationDataForm}>Cadastrar</button>
        <a href="/signin">Já tem conta?</a>
      </S.Form>
    </S.Container>
  );
}
