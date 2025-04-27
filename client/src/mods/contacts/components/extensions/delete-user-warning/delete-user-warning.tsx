import { instance } from "../../../../../services/api/axios";
import { DefaultButton } from "../../../../../shared/button";
import { DangerIcon } from "../../../../../assets/icons/danger-icon";
import { ButtonsGroup } from "../../../../../shared/button-group/button-group";
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
      <S.IconWrapp>
        <DangerIcon />
      </S.IconWrapp>
      <S.Title>Danger</S.Title>
      <S.Desription>Are you sure you want to delete this user?</S.Desription>

      <ButtonsGroup>
        <DefaultButton variant="secondary" onClick={closeModal}>Cancel</DefaultButton>
        <DefaultButton  onClick={handleDeleteUser}>Yes</DefaultButton>
      </ButtonsGroup>
    </S.Wrapper>
  );
};
