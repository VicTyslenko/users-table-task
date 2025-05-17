import * as S from "./styles";
import { Modal } from "../../../../../shared/modal/modal";
import { DefaultTextField } from "../../../../../shared/default-text-field";
import { NewUser } from "../new-user/new-user";
import { useState } from "react";
import { AddContactIcon } from "../../../../../assets/icons/add-contact";
import { DefaultButton } from "../../../../../shared/button/default-button";
import type { HeaderProps } from "./models";
import { DefaultDropdown } from "../../../../../shared/default-dropdown/default-dropdown";
import { FilterOptions } from "./models";
import { DropdownItem } from "../../../../../shared/default-dropdown/dropdown-item";
import { tableOptions } from "./data";

export const ContactsHeader = ({ searchValue, handleSearch }: HeaderProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const [option, setOption] = useState<FilterOptions>(FilterOptions.ALL);

  const handleClose = () => {
    setOpen(false);
  };

  const renderList = () => {
    return tableOptions.map((option) => <DropdownItem onClick={() => setOption(option.title)}>{option.title}</DropdownItem>);
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
      <DefaultDropdown itemsList={renderList()}>{option}</DefaultDropdown>

      {open && <Modal isOpen={open} children={<NewUser onClose={handleClose} />} onClose={handleClose} />}
    </S.HeaderWrapper>
  );
};
