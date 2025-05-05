import { useEffect, useState } from "react";
import type { ContactsProps } from "../shared/models";
import { fetchGetUsers } from "../services/api/fetchGetUsers";
import { useSearchParams } from "react-router-dom";

export const useContacts = (searchValue: string, pageSize: number = 10) => {
  const [data, setData] = useState<ContactsProps[]>([]);

  const [searchParameters, setSearchParameters] = useSearchParams();

  const step = Number(searchParameters.get("step") || 1);

  const fetchUsersData = async () => {
    try {
      const res = await fetchGetUsers();

      const allUsersData = res.data as ContactsProps[];

      setData(allUsersData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  useEffect(() => {
    setSearchParameters({ step: "1" });
  }, []);

  const filteredUsers = data.filter((user) => user.DisplayName.toLowerCase().includes(searchValue.toLowerCase()));

  const totalPages = Math.ceil(filteredUsers.length / pageSize);

  const paginatedData = filteredUsers.slice((step - 1) * pageSize, step * pageSize);

  return {
    data: paginatedData,
    totalPages,
    step,
    refetch: fetchUsersData,
  };
};
