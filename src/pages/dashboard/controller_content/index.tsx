import * as S from "./styles";
import { FirstProduct } from "../first_product";
import { Default } from "../default";

export function ControllerContent() {
  const returnContent = () => {
    if(true) return <FirstProduct/>
    else return <Default/>
  }
  return (
    <S.Container>{returnContent()}</S.Container>
  );
}
