import { HTMLAttributes, ReactNode } from "react";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: HTMLButtonElement["type"];
}
