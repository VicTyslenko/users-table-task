import * as S from "../new-user/styles";

import { DefaultTextField } from "../../../../../shared/default-text-field";
import { DefaultButton } from "../../../../../shared/button";
import { fetchEditUser } from "../../../../../services/api/fetchEditUser";
import { useForm } from "react-hook-form";
import { CloseIcon } from "../../../../../assets/icons/close-icon";
import { zodResolver } from "@hookform/resolvers/zod";
import { editUserSchema } from "../../../../../shared/schemas/validate-schema";
import toast from "react-hot-toast";

import type { EditFormProps } from "../../../../../shared/models";
import { useUsersContext } from "../../../../../shared/hooks";
import { ButtonsGroup } from "../../../../../shared/button-group/button-group";
import { ToggleSwitch } from "../../../../../shared/toggle-switch/toggle-switch";

type Props = {
  onClose: () => void;
  values: EditFormProps;
};

export const EditUser = ({ onClose, values }: Props) => {
  const { register, handleSubmit, formState } = useForm<EditFormProps>({
    defaultValues: values,
    resolver: zodResolver(editUserSchema),
  });

  const { errors } = formState;

  const { refetch } = useUsersContext();

  const handleFormSubmit = async (newValues: EditFormProps) => {
    const id = values.UserID;

    try {
      await fetchEditUser(id, newValues);

      refetch();

      toast.success("User updated successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(handleFormSubmit)}>
        <S.Content>
          <S.HeaderWrapp>
            <S.Header>Edit user</S.Header>

            <DefaultButton onClick={onClose} variant="transparent">
              <CloseIcon />
            </DefaultButton>
          </S.HeaderWrapp>

          <S.Label>Full name</S.Label>
          <DefaultTextField placeholder="Type display name" {...register("DisplayName")} />

          {errors.DisplayName && <S.ErrorMessage>{errors.DisplayName.message}</S.ErrorMessage>}
          <S.Label>Mobile Number</S.Label>
          <DefaultTextField placeholder="Type mobile number" {...register("MFA_Mobile")} />

          {errors.MFA_Mobile && <S.ErrorMessage>{errors.MFA_Mobile.message}</S.ErrorMessage>}
          <S.Label>Email</S.Label>
          <DefaultTextField placeholder="Type email address" {...register("Email")} />
          {errors.Email && <S.ErrorMessage>{errors.Email.message}</S.ErrorMessage>}

          <S.Label>Microsoft 365 Email</S.Label>
          <DefaultTextField placeholder="Type email address" {...register("O365Email")} />
          {errors.O365Email && <S.ErrorMessage>{errors.O365Email.message}</S.ErrorMessage>}

          <S.FlexWrapp>
            <S.Label>Block user</S.Label>
            <ToggleSwitch blocked {...register("BlockAccess")} />
          </S.FlexWrapp>
          <ButtonsGroup>
            <DefaultButton variant="secondary" onClick={onClose}>
              Cancel
            </DefaultButton>
            <DefaultButton type="submit">Save</DefaultButton>
          </ButtonsGroup>
        </S.Content>
      </S.Form>
    </S.Wrapper>
  );
};
