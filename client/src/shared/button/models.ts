import { HTMLAttributes, ReactNode } from "react";

export type Variant = "transparent" | "secondary" | "danger";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: HTMLButtonElement["type"];
  variant?: Variant;
}
