import * as S from "./styles";
import { Modal } from "../../../../../shared/modal/modal";
import { DefaultTextField } from "../../../../../shared/default-text-field";
import { NewUser } from "../new-user/new-user";
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
      <DefaultButton onClick={() => setOpen(true)}>
        <AddContactIcon /> Add
      </DefaultButton>

      <DefaultTextField
        withIcon
        placeholder="search contacts"
        className="header-input"
        onChange={(event) => handleSearch(event.target.value)}
        value={searchValue}
      />

      {open && <Modal isOpen={open} children={<NewUser onClose={handleClose} />} onClose={handleClose} />}
    </S.HeaderWrapper>
  );
};
