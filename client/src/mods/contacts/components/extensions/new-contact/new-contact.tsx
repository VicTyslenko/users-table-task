import * as S from "./styles";
import { DefaultButton } from "../../../../../shared/button/default-button";
import { DefaultTextField } from "../../../../../shared/default-text-field";
import { instance } from "../../../../../services/api/axios";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultValues } from "./data";
import { type Props, FormProps } from "./models";
import { useForm } from "react-hook-form";
import { addUserSchema } from "../../../../../shared/schemas/validate-schema";
import { ButtonsGroup } from "../../../../../shared/button-group/button-group";

export const NewContact = ({ onClose }: Props) => {
  const { register, handleSubmit, watch, formState } = useForm<FormProps>({
    defaultValues,
    resolver: zodResolver(addUserSchema),
  });
  const { errors } = formState;

  const handleFormSubmit = async (values: FormProps) => {
    console.log(values);

    const { firstName, lastName, email, phoneNumber } = values;
    const displayName = `${firstName} ${lastName}`;

    try {
      const result = await instance.post("users/create-user", {
        DisplayName: displayName,
        Email: email,
        MFA_Mobile: phoneNumber,
      });
      toast.success("New contact successfully added!");
      onClose();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(handleFormSubmit)}>
        <S.Content>
          <S.HeaderWrapp>
            <S.Header>New Contact</S.Header>

            <DefaultButton onClick={onClose} variant="transparent">
              X
            </DefaultButton>
          </S.HeaderWrapp>

          <S.Label>First name</S.Label>
          <DefaultTextField placeholder="Type first name" {...register("firstName")} />
          {errors.firstName && <S.ErrorMessage>{errors.firstName.message}</S.ErrorMessage>}
          <S.Label>Last name</S.Label>
          <DefaultTextField placeholder="Type last name" {...register("lastName")} />
          {errors.lastName && <S.ErrorMessage>{errors.lastName.message}</S.ErrorMessage>}
          <S.Label>Number</S.Label>
          <DefaultTextField placeholder="Type a number" {...register("phoneNumber")} />
          {errors.phoneNumber && <S.ErrorMessage>{errors.phoneNumber.message}</S.ErrorMessage>}
          <S.Label>Email</S.Label>
          <DefaultTextField placeholder="Type email address" {...register("email")} />
          {errors.email && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}
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
