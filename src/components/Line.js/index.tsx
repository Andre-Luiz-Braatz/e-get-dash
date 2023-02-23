import * as S from "./styles";
import {LineProps} from "./interface"

export function Line({backgroundColor}:LineProps) {
  
  return (<S.Line backgroundColor={backgroundColor}/>);
}
