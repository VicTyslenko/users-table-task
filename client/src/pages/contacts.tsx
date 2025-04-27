import * as S from "./styles";
import { UsersTable } from "../mods/contacts/components/contacts-table/table";
import { ContactsHeader } from "../mods/contacts/components/extensions/header/contacts-header";
import { useContacts } from "./hooks";

import { useState } from "react";

export const Contacts = () => {
  const [searchContactValue, setSearchContactValue] = useState("");

  const { data } = useContacts(searchContactValue);

  const handleSearch = (value: string) => {
    setSearchContactValue(value);
  };

  return (
    <S.Wrapper>
      <ContactsHeader handleSearch={handleSearch} searchValue={searchContactValue} />
      <UsersTable data={data} />
    </S.Wrapper>
  );
};
