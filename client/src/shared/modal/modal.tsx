import * as S from "./styles";
import type { ModalProps } from "./models";

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  if (isOpen) {
    return (
      <>
        <S.ModalOverlay onClick={onClose} />

        {isOpen && <S.ModalInner>{children}</S.ModalInner>}
      </>
    );
  }
};
