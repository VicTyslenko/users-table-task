import type { Props } from "./models";
import * as S from "./styles";

export const DefaultTextField = ({ ...props }: Props) => {
  return (
    <S.InputWrapper>
      <S.Input {...props} />
    </S.InputWrapper>
  );
};
