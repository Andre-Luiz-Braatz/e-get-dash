import * as S from "./styles";
import { Avatar } from "./Avatar";
import settingsImg from "../../assets/settings.png";
import { Button } from "../Button";

export function Header() {
  const handleSettings = () => console.log("handleSettings");

  return (
    <S.Header>
      <Avatar />
      <S.Name>{"{{nome}}"}</S.Name>
      <Button onClick={handleSettings} size="27.5px">
        <img src={settingsImg} alt="settings" />
      </Button>
    </S.Header>
  );
}
