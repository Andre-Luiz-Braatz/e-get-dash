import { useState } from "react";
import { Button } from "../../../components/Button";
import * as S from "./styles";
import {ModalNewCategory} from './ModalNewCategory'

export function FirstProduct() {
  const [open,setOpen] = useState(false)
  const onChange = () => setOpen(true);
  const onClose = () => setOpen(false);
  

  return (
    <>
      <ModalNewCategory open={open} onClose={onClose}/>
      <S.Container>
        <Button
          onClick={onChange}
          backgroundColor={"background"}
          textColor="blue"
          fullHeight={true}
          fullWidth={true}
          fontWeight="bold"
          size="2rem"
        >
          Crie seu primeiro produto agora
        </Button>
      </S.Container>
    </>
  );
}
