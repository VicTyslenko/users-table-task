import * as S from "./styles";
import { UsersTable } from "../mods/contacts/components/contacts-table/table";
import { ContactsHeader } from "../mods/contacts/components/extensions/header/contacts-header";
import { useContacts } from "./hooks";
import { UsersContext } from "../shared/hooks";

import { useState } from "react";

export const Contacts = () => {
  const [searchContactValue, setSearchContactValue] = useState("");

  const { data, refetch } = useContacts(searchContactValue);
console.log(data)
  const handleSearch = (value: string) => {
    setSearchContactValue(value);
  };

  return (
    <UsersContext.Provider value={{ refetch }}>
      <S.Wrapper>
        <ContactsHeader handleSearch={handleSearch} searchValue={searchContactValue} />
        <UsersTable data={data} />
      </S.Wrapper>
    </UsersContext.Provider>
  );
};
