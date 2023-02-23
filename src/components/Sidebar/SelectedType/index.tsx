import { useState } from "react";
import { Button } from "../../Button";
import { Line } from "../../Line.js";
import * as S from "./styles";

export function SelectedType() {
  const [type, setType] = useState("dashboard");
  const onChangeType = (type: string) => setType(type);
  return (
    <S.Nav>
      <Line backgroundColor="background"/>
      <Button
        onClick={() => onChangeType("dashboard")}
        backgroundColor={type === "dashboard" ? "background" : "transparent"}
        textColor="blue"
        fullHeight={true}
        fullWidth={true}
        size="1.2rem"
        fontWeight="bold"
      >
        Dashboard
      </Button>
      <Line backgroundColor="background"/>
      <Button
        onClick={() => onChangeType("product")}
        backgroundColor={type === "product" ? "background" : "transparent"}
        textColor="blue"
        fullHeight={true}
        fullWidth={true}
        size="1.2rem"
        fontWeight="bold"
      >
        Meus Produtos
      </Button>
      <Line backgroundColor="background"/>
      <Button
        onClick={() => onChangeType("affiliated")}
        backgroundColor={type === "affiliated" ? "background" : "transparent"}
        textColor="blue"
        fullHeight={true}
        fullWidth={true}
        size="1.2rem"
        fontWeight="bold"
      >
        Afiliados
      </Button>
      <Line backgroundColor="background"/>
    </S.Nav>
  );
}
