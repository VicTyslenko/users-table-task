import { Props } from "./models";
import * as S from "./styles";
export const DefaultButton = ({ children, type = "button", ...props }: Props) => {
  return (
    <S.Button type={type} className="default-button" {...props}>
      {children}
    </S.Button>
  );
};
