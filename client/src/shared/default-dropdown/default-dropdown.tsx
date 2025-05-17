import * as S from "./styles";
import { DropdownItem } from "./dropdown-item";
import { ArrrowDown } from "../../assets/icons/arrow-down";
import { ArrowUp } from "../../assets/icons/arrow-up";
import { DefaultDropdownProps } from "./models";
import { useState } from "react";

export const DefaultDropdown = ({ children, itemsList, ...props }: DefaultDropdownProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleMenu = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <>
      <S.Wrapper {...props}>
        <S.ActionButton onClick={handleToggleMenu}>{children}</S.ActionButton>
        {isActive && <S.OptionsWrapper onClick={handleToggleMenu}>{itemsList}</S.OptionsWrapper>}
      </S.Wrapper>
    </>
  );
};
