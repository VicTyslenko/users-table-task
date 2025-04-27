import * as S from "./styles";
import type { ContactsProps } from "../../../../shared/models";
import { StatusActive } from "../../../../assets/icons";
import { StatusInactive } from "../../../../assets/icons";
import { TestingStatus } from "../../../../assets/icons";
import { Statuses } from "./models";

type Props = {
  contact: ContactsProps;
};

export const Name = ({ contact }: Props) => {
  const renderStatus = () => {
    const status = contact.Status;
    switch (status) {
      case Statuses.ACTIVE:
        return <StatusActive />;

      case Statuses.INACTIVE:
        return <StatusInactive />;

      case Statuses.TESTING:
        return <TestingStatus />;
    }
  };
  return (
    <S.Cell>
      <S.StatusWrapp>{renderStatus()}</S.StatusWrapp>
      <S.Name>{contact.DisplayName}</S.Name>
    </S.Cell>
  );
};
