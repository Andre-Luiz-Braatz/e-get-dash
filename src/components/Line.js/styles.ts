import styled from "styled-components";
import {LineProps} from "./interface"

export const Line = styled.hr<LineProps>`
  height: 3px;
  border: 0;
  background: ${props => `var(--${props.backgroundColor})`};
  width: 100%;
`
