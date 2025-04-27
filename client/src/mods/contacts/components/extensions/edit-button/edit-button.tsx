import { EditIcon } from "../../../../../assets/icons";
import { DefaultButton } from "../../../../../shared/button";
import { Modal } from "../../../../../shared/modal";
import { EditContact } from "../edit-contact/edit-contact";
import type { ContactsProps } from "../../../../../shared/models";
import { AccessWarning } from "../access-warning.tsx/access-warning";
import { useState } from "react";

type Props = {
  values: ContactsProps;
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
          console.log(values);
        }}
      >
        <EditIcon />
      </DefaultButton>
      {open && <Modal isOpen={open} onClose={handleClose} children={renderModalContent()} />}
    </>
  );
};
