import styled from "styled-components";
import { ButtonProps } from "./interface";

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => `var(--${props.backgroundColor})`};
  transition: all 0.3s linear;
  border: none;
  padding: 0.3rem;
  height: ${(props) => (props.fullHeight ? "100%" : "")};
  width: ${(props) => (props.fullWidth ? "100%" : "")};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.size};
  color: ${(props) => `var(--${props.textColor})`};
  img {
    height: ${(props) => props.size};
    width: ${(props) => props.size};
  }
`;
