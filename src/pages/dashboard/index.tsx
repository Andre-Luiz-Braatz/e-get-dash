import { Sidebar } from "../../components/Sidebar";
import { ControllerContent } from "./controller_content";
import * as S from "./styles";

export function Dashboard() {
  return (
    <S.Container>
      <Sidebar/>
      <ControllerContent/>
    </S.Container>
  );
}
