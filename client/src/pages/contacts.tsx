import * as S from "./styles";
import { UsersTable } from "../mods/contacts/components/contacts-table/table";
import { ContactsHeader } from "../mods/contacts/components/extensions/header/contacts-header";
import { useContacts } from "./hooks";
import { UsersContext } from "../shared/hooks";
import { Pagination } from "../mods/contacts/components/extensions/pagination/pagination";

export const Contacts = () => {
  const { data, totalPages, refetch, handleSearch, searchContactValue } = useContacts();

console.log(data)
  

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
