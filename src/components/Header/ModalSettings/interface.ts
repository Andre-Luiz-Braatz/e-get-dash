export interface ModalProps {
  open: boolean;
  user: {email:string,avatar:string};
  closeModal: () => void;
}
