import { createContext, useContext, useEffect, useState } from "react";
import useApi from "../hooks/useApi";


const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const changeEmail = () => {
    setUser((prev) => {
      return { ...prev, email: "aryangurau143@gmail.com" };
    });
  };
  const { data } = useApi({ url: "https://dummyjson.com/user/1" });

  useEffect(() => {
    if (data) {
      const { firstName, lastName, email } = data;
      const info = {
        name: firstName.concat(" ", lastName),
        email,
      };
      setUser(info);
    }
  }, [data]);
  return (
    <UserContext.Provider value={{ user, setUser, changeEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContextHook = () => {
  const userData = useContext(UserContext);
  if (userData === null)
    throw new Error("User Context is used outside boundary");

  return userData;
};
