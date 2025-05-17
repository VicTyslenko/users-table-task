import { HTMLAttributes, ReactNode } from "react";

export interface DefaultDropdownProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  itemsList: ReactNode[];
}
