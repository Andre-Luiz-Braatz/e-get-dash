import * as S from "./styles";
import { FirstProduct } from "../first_product";
import { Default } from "../default";
import { useLocation } from 'react-router-dom';

export function ControllerContent() {
  const location = useLocation();

  const returnContent = () => {    
    if(location.pathname === '/product') return <FirstProduct/>
    else return <Default/>
  }
  return (
    <S.Container>{returnContent()}</S.Container>
  );
}
