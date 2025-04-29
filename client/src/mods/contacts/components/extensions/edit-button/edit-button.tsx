import { EditIcon } from "../../../../../assets/icons";
import { DefaultButton } from "../../../../../shared/button";
import { Modal } from "../../../../../shared/modal";
import { EditUser } from "../edit-user/edit-user";
import { AccessWarning } from "../access-warning-modal/access-warning-modal";
import { EditButtonProps } from "../../../../../shared/models";

import { useState } from "react";

type Props = {
  values: EditButtonProps;
};

export const EditButton = ({ values }: Props) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const renderModalContent = () => {
    const { AdminUser, ...valuesForEdit } = values;

    return AdminUser ? <AccessWarning onClose={handleClose} /> : <EditUser onClose={handleClose} values={valuesForEdit} />;
  };

  return (
    <>
      <DefaultButton
        variant="transparent"
        onClick={() => {
          setOpen(true);
        }}
      >
        <EditIcon />
      </DefaultButton>
      {open && <Modal isOpen={open} onClose={handleClose} children={renderModalContent()} />}
    </>
  );
};
