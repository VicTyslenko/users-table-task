import * as S from "./styles";

import { type InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & { blocked?: boolean };

export const ToggleSwitch = ({ blocked, ...props }: Props) => {
  return (
    <S.ToggleSwitch blocked={blocked} className="toggle-switch_wrapper">
      <input className="toggle-switch_checkbox" type="checkbox" {...props} />

      <S.Slider className="toggle-switch_slider" />
    </S.ToggleSwitch>
  );
};
