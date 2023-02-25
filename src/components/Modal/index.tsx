import ReactModal from "react-modal";

interface ModalProps {
  onClose: () => void;
  open: boolean;
  children: JSX.Element | JSX.Element[] | string;
  overlayClassName?: string;
  className?: string;
}

ReactModal.setAppElement("#root");

export function Modal({
  onClose,
  open,
  children,
  overlayClassName,
  className,
}: ModalProps) {
  return (
    <ReactModal
      isOpen={open}
      onRequestClose={onClose}
      overlayClassName={overlayClassName}
      className={className}
    >
      <>{children}</>
    </ReactModal>
  );
}
