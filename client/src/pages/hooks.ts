import { useEffect, useState } from "react";
import type { ContactsProps } from "../shared/models";
import { fetchGetUsers } from "../services/api/fetchGetUsers";

export const useContacts = (searchValue: string) => {
  const [data, setData] = useState<ContactsProps[]>([]);

  const [filteredUsers, setFilteredUsers] = useState<ContactsProps[]>([]);

  const fetchUsersData = async () => {
    try {
      const res = await fetchGetUsers();

      const data = res.data as ContactsProps[];

      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  useEffect(() => {
    const filteredData = data.filter((user) => {
      return user.DisplayName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    });
    setFilteredUsers(filteredData);
  }, [data, searchValue]);

  return { data: filteredUsers, refetch: fetchUsersData };
};
