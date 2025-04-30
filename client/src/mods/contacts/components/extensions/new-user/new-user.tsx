import * as S from "./styles";
import { DefaultButton } from "../../../../../shared/button/default-button";
import { DefaultTextField } from "../../../../../shared/default-text-field";
import { ToggleSwitch } from "../../../../../shared/toggle-switch/toggle-switch";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultValues } from "./data";
import { type Props, FormProps } from "./models";
import { fetchAddUser } from "../../../../../services/api/fetchAddUser";
import { useForm } from "react-hook-form";
import { addUserSchema } from "../../../../../shared/schemas/validate-schema";
import { ButtonsGroup } from "../../../../../shared/button-group/button-group";
import { CloseIcon } from "../../../../../assets/icons/close-icon";
import { useUsersContext } from "../../../../../shared/hooks";

export const NewUser = ({ onClose }: Props) => {
  const { register, handleSubmit, watch, formState } = useForm<FormProps>({
    defaultValues,
    resolver: zodResolver(addUserSchema),
  });
  const { refetch } = useUsersContext();
  const { errors } = formState;

  const handleFormSubmit = async (values: FormProps) => {
    const { DisplayName, Email, MFA_Mobile, AdminUser, BlockAccess, O365Email } = values;

    try {
      await fetchAddUser({
        DisplayName,
        Email,
        MFA_Mobile,
        AdminUser,
        BlockAccess,
        O365Email,
      });

      refetch();

      toast.success("New contact successfully added!");
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const adminUser = watch("AdminUser");

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(handleFormSubmit)}>
        <S.Content>
          <S.HeaderWrapp>
            <S.Header>Add user</S.Header>

            <DefaultButton onClick={onClose} variant="transparent">
              <CloseIcon />
            </DefaultButton>
          </S.HeaderWrapp>

          <S.FlexWrapp>
            <S.Label>Admin</S.Label>
            <ToggleSwitch {...register("AdminUser")} />
          </S.FlexWrapp>

          <S.Label>Full name</S.Label>
          <DefaultTextField placeholder="Type display name" {...register("DisplayName")} />

          <S.Label>Mobile Number</S.Label>
          <DefaultTextField placeholder="Type a number" {...register("MFA_Mobile")} />
          {errors.MFA_Mobile && <S.ErrorMessage>{errors.MFA_Mobile.message}</S.ErrorMessage>}

          <S.Label>Email</S.Label>
          <DefaultTextField placeholder="Type email address" {...register("Email")} />
          {errors.Email && <S.ErrorMessage>{errors.Email.message}</S.ErrorMessage>}

          <S.Label>Microsoft 365 Email</S.Label>
          <DefaultTextField placeholder="Type email address" {...register("O365Email")} />
          {errors.O365Email && <S.ErrorMessage>{errors.O365Email.message}</S.ErrorMessage>}

          {!adminUser && (
            <S.FlexWrapp>
              <S.Label>Block user</S.Label>
              <ToggleSwitch blocked {...register("BlockAccess")} />
            </S.FlexWrapp>
          )}

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
