import { EditIcon } from "../../../../../assets/icons";
import { DefaultButton } from "../../../../../shared/button";
import { Modal } from "../../../../../shared/modal";
import { EditContact } from "../edit-contact/edit-contact";
import type { EditFormProps } from "../../../../../shared/models";
import { AccessWarning } from "../access-warning-modal/access-warning-modal";

import { useState } from "react";

type Props = {
  values: EditFormProps;
};

export const EditButton = ({ values }: Props) => {
  const role = values.IsOSPAdmin;

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const renderModalContent = () => (role ? <AccessWarning onClose={handleClose} /> : <EditContact onClose={handleClose} values={values} />);

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
