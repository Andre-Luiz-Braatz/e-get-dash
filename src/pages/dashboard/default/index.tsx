import * as S from "./styles";
import { useSelector, useDispatch } from "react-redux";

export function Default() {
  const user = useSelector((state:any) => state.user);

  return (
    <S.Container>Olá {user.data.email}</S.Container>
  );
}
