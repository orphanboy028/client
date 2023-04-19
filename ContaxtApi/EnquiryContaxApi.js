import { createContext, useEffect, useState } from "react";
import {
  creatEnquriy,
  getAllEnquies,
} from "../Actions/EnquiryActions/EnquiryActions";

import { useRouter } from "next/router";

export const EnquiryContext = createContext();

export const EnquiryContextProvider = ({ children }) => {
  const router = useRouter();
  const [allEnquiryes, setallEnquiryes] = useState([]);

  const sendEnqueries = async (formdata, token) => {
    try {
      const result = await creatEnquriy(formdata, token);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const enquesies = async (token) => {
    try {
      const result = await getAllEnquies(token);
      setallEnquiryes(result.data.allEnquiry);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <EnquiryContext.Provider value={{ allEnquiryes, sendEnqueries, enquesies }}>
      {children}
    </EnquiryContext.Provider>
  );
};
