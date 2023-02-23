import { Button } from "../../../components/Button";
import * as S from "./styles";

export function FirstProduct() {

  const onChange = () => console.log("create_product");
  

  return (
    <S.Container>
      <Button
        onClick={onChange}
        backgroundColor={"background"}
        textColor="blue"
        fullHeight={true}
        fullWidth={true}
        size="2rem"
      >
        Crie seu primeiro produto agora
      </Button>
    </S.Container>
  );
}
