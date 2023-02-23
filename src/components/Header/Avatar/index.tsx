import * as S from "./styles";
import userImg from "../../../assets/user.png";

export function Avatar() {
  return (
    <S.Container>
      <img src={userImg} alt="User" />
    </S.Container>
  );
}
