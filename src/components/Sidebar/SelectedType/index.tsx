import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Button";
import { Line } from "../../Line.js";
import * as S from "./styles";

export function SelectedType() {
  const navigate = useNavigate()
  const [type, setType] = useState("dashboard");
  const onChangeType = (type: string) => {
    setType(type);
  }

  useEffect(()=>{
    if(type === 'product') navigate("/product")
    else if(type === 'category') navigate("/category")
    else navigate("/")
  },[type])

  return (
    <S.Nav>
      <Line backgroundColor="background"/>
      <Button
        onClick={() => onChangeType("dashboard")}
        backgroundColor={type === "dashboard" ? "background" : "transparent"}
        textColor="blue"
        fullHeight={true}
        fullWidth={true}
        size="1.3rem"
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
        size="1.3rem"
        fontWeight="bold"
      >
        Meus Produtos
      </Button>
      <Line backgroundColor="background"/>
      <Button
        onClick={() => onChangeType("category")}
        backgroundColor={type === "category" ? "background" : "transparent"}
        textColor="blue"
        fullHeight={true}
        fullWidth={true}
        size="1.3rem"
        fontWeight="bold"
      >
        Minhas Categorias
      </Button>
      <Line backgroundColor="background"/>
    </S.Nav>
  );
}
