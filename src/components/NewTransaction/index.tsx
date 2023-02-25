import {useState} from "react"
// import Modal from 'react-modal';
import {Modal} from '../Modal';
import {ModalProps} from './interface'
import {Button} from "../Button"
import * as S from "./styles"
import closeImg from "../../../assets/close.svg";
import incomeImg from "../../../assets/income.svg";
import outcomeImg from "../../../assets/outcome.svg";

export function NewTransaction({open,closeModal}:ModalProps) {
 
  return (
    <Modal
      open={open}
      onClose={closeModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={closeModal} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <S.Container >
        <h2>Cadastrar transação</h2>
        <input
          type="text"
          placeholder="Título"
          onChange={(event) => console.log(event.target.value)
          }
        />
        <input
          type="number"
          placeholder="Valor"
        />

        <S.TransactionTypeContainer>
          <S.RadioBox
            type="button"
            
            isActive={true}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </S.RadioBox>
          <S.RadioBox
            type="button"
            onClick={() => {
              console.log("withdraw");
              
            }}
            isActive={true}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </S.RadioBox>
        </S.TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          onChange={(event) => console.log(event.target.value)
          }
        />
        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  )
}

 // return(
  //   <Modal
  //     isOpen={open}
  //     contentLabel="edit user"
  //     overlayClassName="react-modal-overlay"
  //     className="react-modal-content"
  //   >
  //     <S.Title>Editar usúario</S.Title>
  //     <form>
  //       <input />
  //     </form>
  //     <Button
  //       onClick={closeModal}
  //       backgroundColor="transparent"
  //       textColor="blue"
  //       size="0.9rem"
  //       fontWeight="bold"
  //     >
  //       Fechar
  //     </Button>
  //     <Button
  //       onClick={closeModal}
  //       backgroundColor="transparent"
  //       textColor="blue"
  //       size="0.9rem"
  //       fontWeight="bold"
  //     >
  //       Salvar
  //     </Button>
  //   </Modal>

  // )