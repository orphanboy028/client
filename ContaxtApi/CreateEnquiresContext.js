import { createContext, useEffect, useState } from "react";
import {
  ListOfCreatedEnquiresAction,
  getrequestDetails,
} from "../Actions/EnquiryActions/EnquiryActions";

import { useRouter } from "next/router";

export const CreateEnquireContext = createContext();

export const CreateEnquireProvider = ({ children }) => {
  const router = useRouter();
  const [enquireTitle, setenquireTitle] = useState("");
  const [userEnquireList, setuserEnquireList] = useState([]);
  const [enquireDetails, setenquireDetails] = useState("");
  const [enquireAppliedCmpaniesList, setenquireAppliedCmpaniesList] = useState(
    []
  );

  const handelSelectEnquire = (title) => {
    setenquireTitle(title);
  };

  const ListOfCreatedEnquires = async (token) => {
    try {
      const result = await ListOfCreatedEnquiresAction(token);
      setuserEnquireList(result.data.CreatedEnquires);
    } catch (error) {
      console.log(error);
    }
  };

  const getrequestDetailsAction = async (slug, token) => {
    try {
      const result = await getrequestDetails(slug, token);
      // console.log(result.data);
      const enquiyArray = result.data.requestDetails.getEnquiy;

      const { enquiry, description, updatedAt, createdAt } =
        result.data.requestDetails;

      const enquireData = {
        enquiry,
        description,
        updatedAt,
        createdAt,
      };

      setenquireDetails(enquireData);
      const extractedData = enquiyArray.map((enquiry) => {
        return {
          EnquiryMessage: enquiry.EnquiryMessage,
          enquiryTo: enquiry.enquiryTo,
          updatedAt: enquiry.updatedAt,
          user: enquiry.user,
        };
      });

      console.log(extractedData);
      setenquireAppliedCmpaniesList(extractedData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreateEnquireContext.Provider
      value={{
        enquireTitle,
        setenquireTitle,
        handelSelectEnquire,
        userEnquireList,
        setuserEnquireList,
        ListOfCreatedEnquires,
        getrequestDetailsAction,
        enquireDetails,
        enquireAppliedCmpaniesList,
      }}
    >
      {children}
    </CreateEnquireContext.Provider>
  );
};
