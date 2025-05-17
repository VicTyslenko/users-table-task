import * as S from "./styles";
import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const DropdownItem = ({ children, ...props }: Props) => {
  return <S.Item {...props}>{children}</S.Item>;
};
