import {useState} from "react"
import * as S from "./styles";
import { Avatar } from "./Avatar";
import settingsImg from "../../assets/settings.png";
import { Button } from "../Button";
import { ModalSettings } from "./ModalSettings"

export function Header() {
  const [open,setOpen] = useState(false)
  const handleSettings = () => setOpen(!open);
  const closeModal = () => setOpen(false);

  return (
    <>
    <ModalSettings open={open} closeModal={closeModal}/>
    <S.Header>
      <Avatar />
      <S.Name>{"{{nome}}"}</S.Name>
      <Button onClick={handleSettings} size="27.5px">
        <img src={settingsImg} alt="settings" />
      </Button>
    </S.Header>
    </>
  );
}
