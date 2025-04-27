import { Props } from "./models";
import * as S from "./styles";
export const DefaultButton = ({ children, type = "button", variant, ...props }: Props) => {
  return (
    <S.Button type={type} className="default-button" $variant={variant} {...props}>
      {children}
    </S.Button>
  );
};
