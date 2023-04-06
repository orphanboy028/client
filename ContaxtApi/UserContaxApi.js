import { createContext, useEffect, useState } from "react";
import { isAuth, getLoginCookies } from "../Actions/UserAuth/userAuth";
import { getAllUser } from "../Actions/adminAuth/SuperAdminActions";
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const token = getLoginCookies();
  const [loginUser, setloginUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [allusers, setallusers] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      const storedData = await isAuth();
      setloginUser(storedData);
      setLoading(false);
    };
    getUserData();
  }, []);

  const getusers = async () => {
    try {
      if (token !== undefined) {
        const result = await getAllUser(token);
        setallusers(result.data.allUsers);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{ loginUser, loading, allusers, getusers, token }}
    >
      {children}
    </UserContext.Provider>
  );
};
