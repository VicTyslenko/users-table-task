import { TrashIcon } from "../../../../../assets/icons/trash-icon";
import { DefaultButton } from "../../../../../shared/button";
import { Modal } from "../../../../../shared/modal";
import { useState } from "react";
import { DeleteUserWarning } from "../delete-user-warning/delete-user-warning";
import * as S from "./styles";

type Props = {
  id?: number;
  disabled?: boolean;
};

export const DeleteButton = ({ id, disabled }: Props) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <S.Wrapper>
      <DefaultButton disabled={disabled} onClick={() => setOpen(true)} variant="transparent">
        <TrashIcon />
      </DefaultButton>

      {open && <Modal children={<DeleteUserWarning userId={id} closeModal={handleClose} />} isOpen={open} onClose={handleClose} />}
    </S.Wrapper>
  );
};
