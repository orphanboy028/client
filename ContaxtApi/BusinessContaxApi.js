import { createContext, useEffect, useState } from "react";
import {
  getUserBusinessDetails,
  updateBusinessProfile,
} from "../Actions/UserAuth/BusinessAction";

export const BusinessContext = createContext();

export const BusinessContextProvider = ({ children }) => {
  const [Userbusiness, setUserbusiness] = useState({});

  const handelChnage = (e) => {
    console.log("on Chnage");

    setUserbusiness((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // GET BUSINESS DETAILS
  const getBusinessDetails = async (token) => {
    try {
      const result = await getUserBusinessDetails(token);

      setUserbusiness(result.data.details.businessDetails);
    } catch (error) {
      console.log(error.response);
    }
  };

  // UPDATE BUSINESS DETAILS

  const updateBusiness = async (formdata, token) => {
    try {
      const result = await updateBusinessProfile(formdata, token);
      return result;
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <BusinessContext.Provider
      value={{
        getBusinessDetails,
        Userbusiness,
        setUserbusiness,
        handelChnage,
        updateBusiness,
      }}
    >
      {children}
    </BusinessContext.Provider>
  );
};
