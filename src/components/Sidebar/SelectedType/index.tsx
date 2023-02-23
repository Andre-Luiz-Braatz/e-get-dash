import { useState } from "react";
import { Button } from "../../Button";
import * as S from "./styles";

export function SelectedType() {
  const [type, setType] = useState("dashboard");
  const onChangeType = (type: string) => setType(type);
  return (
    <S.Nav>
      <Button
        onClick={() => onChangeType("dashboard")}
        backgroundColor={type === "dashboard" ? "background" : "transparent"}
        textColor="blue"
        fullHeight={true}
        fullWidth={true}
        size="1.2rem"
      >
        Dashboard
      </Button>
      <Button
        onClick={() => onChangeType("product")}
        backgroundColor={type === "product" ? "background" : "transparent"}
        textColor="blue"
        fullHeight={true}
        fullWidth={true}
        size="1.2rem"
      >
        Meus Produtos
      </Button>
      <Button
        onClick={() => onChangeType("affiliated")}
        backgroundColor={type === "affiliated" ? "background" : "transparent"}
        textColor="blue"
        fullHeight={true}
        fullWidth={true}
        size="1.2rem"
      >
        Afiliados
      </Button>
    </S.Nav>
  );
}
