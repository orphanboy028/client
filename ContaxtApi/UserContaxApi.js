import { createContext, useEffect, useState } from "react";

import { isAuth } from "../Actions/UserAuth/userAuth";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [loginUser, setloginUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUserData = async () => {
      const storedData = await isAuth();
      setloginUser(storedData);
      setLoading(false);
    };
    getUserData();
  }, []);

  //   console.log(loginUser);

  return (
    <UserContext.Provider value={{ loginUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};
