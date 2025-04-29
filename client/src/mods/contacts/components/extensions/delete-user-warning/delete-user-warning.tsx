import { DefaultButton } from "../../../../../shared/button";
import { DangerIcon } from "../../../../../assets/icons/danger-icon";
import { ButtonsGroup } from "../../../../../shared/button-group/button-group";
import * as S from "./styles";
import { useUsersContext } from "../../../../../shared/hooks";
import { fetchDeleteUser } from "../../../../../services/api/fetchDeleteUser";
import toast from "react-hot-toast";

type Props = {
  userId: number;
  closeModal: () => void;
};

export const DeleteUserWarning = ({ userId, closeModal }: Props) => {
  const { refetch } = useUsersContext();

  const handleDeleteUser = async () => {
    try {
      await fetchDeleteUser(userId);

      refetch();

      toast.success("User has been deleted!");

      closeModal();
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
        <DefaultButton variant="secondary" onClick={closeModal}>
          Cancel
        </DefaultButton>
        <DefaultButton variant="danger" onClick={handleDeleteUser}>
          Delete
        </DefaultButton>
      </ButtonsGroup>
    </S.Wrapper>
  );
};
