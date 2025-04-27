import type { Props } from "./models";
import * as S from "./styles";
import { SearchIcon } from "../../assets/icons/search-icon";

export const DefaultTextField = ({ withIcon, ...props }: Props) => {
  return (
    <S.InputWrapper>
      <S.Input {...props} />
      {withIcon && <SearchIcon />}
    </S.InputWrapper>
  );
};
