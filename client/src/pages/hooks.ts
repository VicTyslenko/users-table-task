import { instance } from "../services/api/axios";
import { useEffect, useState } from "react";
import type { ContactsProps } from "../shared/models";

export const useContacts = (searchValue: string) => {
  const [data, setData] = useState<ContactsProps[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<ContactsProps[]>([]);

  useEffect(() => {
    try {
      const fetchUsersData = async () => {
        const res = await instance.get("/users");

        const data = res.data as ContactsProps[];

        setData(data);
      };
      fetchUsersData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    const filteredData = data.filter((user) => {
      return user.DisplayName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    });
    setFilteredUsers(filteredData);
  }, [data, searchValue]);

  return { data: filteredUsers };
};
