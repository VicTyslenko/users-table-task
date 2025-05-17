import { useEffect, useState } from "react";
import type { ContactsProps } from "../shared/models";
import { fetchGetUsers } from "../services/api/fetchGetUsers";
import { useSearchParams } from "react-router-dom";

export const useContacts = () => {
  const [data, setData] = useState<ContactsProps[]>([]);
  const [searchParameters, setSearchParameters] = useSearchParams();
  const [searchContactValue, setSearchContactValue] = useState("");

  const [pageSize, setPageSize] = useState<number>(10);
  const step = Number(searchParameters.get("step") || 1);

  const handleSearch = (value: string) => {
    setSearchContactValue(value);
  };

  const fetchUsersData = async () => {
    try {
      const response = await fetchGetUsers();

      const allUsersData = response.data as ContactsProps[];

      setData(allUsersData);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredUsers = data.filter((user) => user.DisplayName.toLowerCase().includes(searchContactValue.toLowerCase()));

  const totalPages = Math.ceil(filteredUsers.length / pageSize);


  
  const paginatedData = filteredUsers.slice((step - 1) * pageSize, step * pageSize);

  useEffect(function setMediaQuery() {
    const currentHeight = window.innerHeight;
    if (currentHeight <= 800) {
      setPageSize(10);
    }
  }, []);

  useEffect(function getAllUsers() {
    fetchUsersData();
  }, []);

  useEffect(function resetPagination() {
    setSearchParameters({ step: "1" });
  }, []);

  return {
    data: paginatedData,
    totalPages,
    step,
    refetch: fetchUsersData,
    searchContactValue,
    handleSearch,
  };
};
