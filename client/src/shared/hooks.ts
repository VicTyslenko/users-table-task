import { createContext, useContext } from "react";

interface UsersContextProps {
  refetch: () => Promise<void>;
}

export const UsersContext = createContext<UsersContextProps | null>(null);

export const useUsersContext = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("useUsersContext must be used within a UsersProvider");
  }
  return context;
};
