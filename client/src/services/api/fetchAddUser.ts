import { instance } from "./axios";

type ParamsProps = {
  DisplayName: string;
  Email: string;
  MFA_Mobile: string;
  AdminUser: boolean;
  BlockAccess: boolean;
  O365Email: string;
};
export const fetchAddUser = (params: ParamsProps) => instance.post("/users/create-user", params);
