import * as S from "./styles";
import { DefaultButton } from "../../../../../shared/button";
import { InfoIcon } from "../../../../../assets/icons/info-icon";
import { DangerIcon } from "../../../../../assets/icons/danger-icon";

type Props = {
  onClose: () => void;
};
export const AccessWarning = ({ onClose }: Props) => {
  return (
    <S.Wrapper>
      <S.MessageWrapp>
        <InfoIcon />
        <S.Message>You don't have access to edit admin</S.Message>
      </S.MessageWrapp>

      <DefaultButton onClick={onClose}>Close</DefaultButton>
    </S.Wrapper>
  );
};
