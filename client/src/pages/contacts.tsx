import * as S from "./styles";
import { UsersTable } from "../mods/contacts/components/contacts-table/table";
import { ContactsHeader } from "../mods/contacts/components/extensions/header/contacts-header";
export const Contacts = () => {
  return (
    <S.Wrapper>
      <ContactsHeader />
      <UsersTable />
    </S.Wrapper>
  );
};
