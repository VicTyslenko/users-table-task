import { instance } from "./axios";

export const fetchDeleteUser = (id?: number) => instance.delete(`/users/${id}`);
