import * as S from "../new-contact/styles";

import { DefaultTextField } from "../../../../../shared/default-text-field";
import { DefaultButton } from "../../../../../shared/button";
import type { Props } from "./models";
import { useForm } from "react-hook-form";
import { CloseIcon } from "../../../../../assets/icons/close-icon";
import { zodResolver } from "@hookform/resolvers/zod";
import { editUserSchema } from "../../../../../shared/schemas/validate-schema";
import type { EditFormProps } from "./models";
import { ButtonsGroup } from "../../../../../shared/button-group/button-group";

export const EditContact = ({ onClose, values }: Props) => {
  const { register, handleSubmit, watch, formState } = useForm<EditFormProps>({
    defaultValues: values,
    resolver: zodResolver(editUserSchema),
  });

  const { errors } = formState;
  return (
    <S.Wrapper>
      <S.Form>
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

          <S.Label>Block Access</S.Label>
          <DefaultTextField type="number" placeholder="Set block access" {...register("BlockAccess", { valueAsNumber: true })} />
          {errors.BlockAccess && <S.ErrorMessage>{errors.BlockAccess.message}</S.ErrorMessage>}

          <S.Label>O365 Email</S.Label>
          <DefaultTextField placeholder="Type O365 email (optional)" {...register("O365Email")} />
          {errors.O365Email && <S.ErrorMessage>{errors.O365Email.message}</S.ErrorMessage>}

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
