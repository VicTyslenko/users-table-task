import { instance } from "../../../../../services/api/axios";
import { DefaultButton } from "../../../../../shared/button";
import * as S from "./styles";
type Props = {
  userId: number;
  closeModal: () => void;
};
export const DeleteUserWarning = ({ userId, closeModal }: Props) => {
  const handleDeleteUser = async () => {
    try {
      // const result = await instance.delete(`/users/${userId}`);

      // console.log(result);
      closeModal();
      console.log(userId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.Wrapper>
      are you sure?
      <DefaultButton onClick={handleDeleteUser}>Yes</DefaultButton>
    </S.Wrapper>
  );
};
