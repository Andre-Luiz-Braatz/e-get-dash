import styled from "styled-components";
import Modal from 'styled-react-modal'
import { ModalProps } from "./interface";

export const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: 1;
  transition : all 0.3s ease-in-out;`;