import * as S from "./styles";
import { DefaultButton } from "../../../../../shared/button/default-button";
import { DefaultTextField } from "../../../../../shared/default-text-field";
import { instance } from "../../../../../services/api/axios";
import toast from "react-hot-toast";
import { defaultValues } from "./data";
import { type Props, FormProps } from "./models";
import { useForm } from "react-hook-form";
import { ButtonsGroup } from "../../../../../shared/button-group/button-group";

export const NewContact = ({ onClose }: Props) => {
  const { register, handleSubmit, watch } = useForm<FormProps>({
    defaultValues,
  });

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

            <DefaultButton onClick={onClose} className="close-button">
              X
            </DefaultButton>
          </S.HeaderWrapp>

          <S.Label>First name</S.Label>
          <DefaultTextField placeholder="Type first name" {...register("firstName")} />
          <S.Label>Last name</S.Label>
          <DefaultTextField placeholder="Type last name" {...register("lastName")} />
          <S.Label>Number</S.Label>
          <DefaultTextField placeholder="Type a number" {...register("phoneNumber")} />
          <S.Label>Email</S.Label>
          <DefaultTextField placeholder="Type email address" {...register("email")} />
          <ButtonsGroup>
            <DefaultButton className="cancel-button" onClick={onClose}>
              Cancel
            </DefaultButton>
            <DefaultButton type="submit">Save</DefaultButton>
          </ButtonsGroup>
        </S.Content>
      </S.Form>
    </S.Wrapper>
  );
};
