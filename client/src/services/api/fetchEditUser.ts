import { instance } from "./axios";
import { EditFormProps } from "../../shared/models";

export const fetchEditUser = (id: number, params: EditFormProps) => instance.put(`/users/edit-user/${id}`, params);
