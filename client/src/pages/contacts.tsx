import * as S from "./styles";
import { UsersTable } from "../mods/contacts/components/contacts-table/table";
import { ContactsHeader } from "../mods/contacts/components/extensions/header/contacts-header";
import { useContacts } from "./hooks";
import { UsersContext } from "../shared/hooks";
import { Pagination } from "../mods/contacts/components/extensions/pagination/pagination";
import { useState } from "react";

export const Contacts = () => {
  const [searchContactValue, setSearchContactValue] = useState("");

  const { data, totalPages, refetch } = useContacts(searchContactValue);

  const handleSearch = (value: string) => {
    setSearchContactValue(value);
  };

  return (
    <UsersContext.Provider value={{ refetch }}>
      <S.Wrapper>
        <ContactsHeader handleSearch={handleSearch} searchValue={searchContactValue} />
        <UsersTable data={data} />
        <Pagination totalPages={totalPages} />
      </S.Wrapper>
    </UsersContext.Provider>
  );
};
