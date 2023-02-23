import { SelectedType } from "./SelectedType";
import { Header } from "../Header";
import * as S from "./styles";

export function Sidebar() {
  return (
    <S.Container>
      <Header />
      <SelectedType />
    </S.Container>
  );
}
