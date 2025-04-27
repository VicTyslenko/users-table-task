import type { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & { withIcon?: boolean };
