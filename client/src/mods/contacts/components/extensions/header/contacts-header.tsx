import * as S from "./styles";
import { Modal } from "../../../../../shared/modal/modal";
import { DefaultTextField } from "../../../../../shared/default-text-field";
import { NewContact } from "../new-contact/new-contact";
import { useState } from "react";
import { AddContactIcon } from "../../../../../assets/icons/add-contact";
import { DefaultButton } from "../../../../../shared/button/default-button";
import type { HeaderProps } from "./models";

export const ContactsHeader = ({ searchValue, handleSearch }: HeaderProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <S.HeaderWrapper>
      <DefaultButton className="add-button" onClick={() => setOpen(true)}>
        <AddContactIcon /> Add
      </DefaultButton>
      <DefaultTextField
        placeholder="search contacts"
        className="header-input"
        onChange={(event) => handleSearch(event.target.value)}
        value={searchValue}
      />
      {open && <Modal isOpen={open} children={<NewContact onClose={handleClose} />} onClose={handleClose} />}
    </S.HeaderWrapper>
  );
};
