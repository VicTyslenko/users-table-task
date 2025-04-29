import { instance } from "./axios";

export const fetchGetUsers = () => instance.get("/users");
