import { AccessIcon } from "../../../../../assets/icons/access-icon";
import { BlockedIcon } from "../../../../../assets/icons/blocked-icon";
import * as S from "./styles";

export const AccessCell = (access: number) => {
  return (
    <S.Wrapper>
      {!access ? (
        <>
          <AccessIcon />
          <span>Active</span>
        </>
      ) : (
        <>
          <BlockedIcon />
          <span>Blocked</span>
        </>
      )}
    </S.Wrapper>
  );
};
