import { useEffect, useState } from "react";
import type { ContactsProps } from "../shared/models";
import { fetchGetUsers } from "../services/api/fetchGetUsers";

export const useContacts = (searchValue: string, pageSize: number = 10) => {
  const [data, setData] = useState<ContactsProps[]>([]);
  const [step, setStep] = useState(1);

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
    setStep(1);
  }, [searchValue]);

  const filteredUsers = data.filter((user) => user.DisplayName.toLowerCase().includes(searchValue.toLowerCase()));

  const totalPages = Math.ceil(filteredUsers.length / pageSize);

  const paginatedData = filteredUsers.slice((step - 1) * pageSize, step * pageSize);

  return {
    data: paginatedData,
    totalPages,
    step,
    setStep,
    refetch: fetchUsersData,
  };
};
