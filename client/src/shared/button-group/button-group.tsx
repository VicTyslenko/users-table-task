import type { Props } from "./models";
import * as S from "./styles";
export const ButtonsGroup = ({ children, ...props }: Props) => {
  return (
    <S.ButtonsWrapper className="buttons-group" {...props}>
      {children}
    </S.ButtonsWrapper>
  );
};
