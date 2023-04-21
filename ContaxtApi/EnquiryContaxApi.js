import { createContext, useEffect, useState } from "react";
import {
  creatEnquriy,
  getAllEnquies,
  getrequestDetails,
  sendEnquiryAction,
} from "../Actions/EnquiryActions/EnquiryActions";

import { useRouter } from "next/router";

export const EnquiryContext = createContext();

export const EnquiryContextProvider = ({ children }) => {
  const router = useRouter();
  const [allEnquiryes, setallEnquiryes] = useState([]);
  const [enquireyInfo, setenquireyInfo] = useState({});
  const [applyedUsers, setapplyedUsers] = useState([]);
  const [enquireyPostedUser, setenquireyPostedUser] = useState({});
  const [isUserApplied, setIsUserApplied] = useState(false);

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

  const requestEnquiryDetails = async (slug, token) => {
    try {
      const result = await getrequestDetails(slug, token);
      // console.log(result.data);
      const { requestDetails } = result.data;
      const { getEnquiy } = requestDetails;
      const { user } = requestDetails;
      console.log(requestDetails);
      const enquiryDetails = {
        enquiry: requestDetails.enquiry,
        description: requestDetails.description,
        createdAt: requestDetails.createdAt,
        Seletedlefcategory: requestDetails.Seletedlefcategory,
      };
      setenquireyInfo(enquiryDetails);
      setapplyedUsers(getEnquiy);
      setenquireyPostedUser(user);
    } catch (error) {
      return error;
    }
  };

  const applyOnEnquirey = async (data, slug, token) => {
    try {
      const result = await sendEnquiryAction(data, slug, token);
      return result;
    } catch (error) {
      return error.response;
    }
  };

  return (
    <EnquiryContext.Provider
      value={{
        allEnquiryes,
        sendEnqueries,
        enquesies,
        requestEnquiryDetails,
        enquireyInfo,
        applyedUsers,
        isUserApplied,
        setIsUserApplied,
        enquireyPostedUser,
        applyOnEnquirey,
      }}
    >
      {children}
    </EnquiryContext.Provider>
  );
};