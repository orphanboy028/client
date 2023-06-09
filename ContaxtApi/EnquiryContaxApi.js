import { createContext, useEffect, useState } from "react";
import {
  creatEnquriy,
  getAllEnquies,
  getrequestDetails,
  sendEnquiryAction,
  ListAllEnquiryRequestAction,
  SuperAdmingetrequestDetailsAction,
  ListOfCreatedEnquiresAction,
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
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCategories, setselectedCategories] = useState(null);
  const [togglesortFiilter, settogglesortFiilter] = useState("default");
  const [ListOfSentEnquiries, setListOfSentEnquiries] = useState([]);
  const [enquieDetails, setenquieDetails] = useState({});
  const [ApplyedUserDetails, setApplyedUserDetails] = useState([]);
  const [enquiedCreatedBy, setenquiedCreatedBy] = useState({});
  const [userEnquireList, setuserEnquireList] = useState([]);

  const handelToogleSort = (index) => {
    settogglesortFiilter(index);
  };

  // Clear Location
  const handelClearLocation = () => {
    setSelectedCity(null);
  };

  // Clear Categories
  const handelClearCategories = () => {
    setselectedCategories(null);
  };

  // offcancvas
  const [locationFillterShow, setlocationFillterShow] = useState(false);

  const handleCloseLocation = () => setlocationFillterShow(false);
  const handleShowLocation = () => {
    console.log("Select location click to open");
    setlocationFillterShow(true);
  };

  // OffCanvash for Categoties
  const [categoriesFillterShow, setcategoriesFillterShow] = useState(false);

  const handleCloseCategories = () => setcategoriesFillterShow(false);
  const handleShowCategories = () => setcategoriesFillterShow(true);

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
      // console.log(requestDetails);
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

  // ListAllEnquiryRequestAction
  const getListAllEnquiryRequestAction = async (token) => {
    try {
      const result = await ListAllEnquiryRequestAction(token);

      setListOfSentEnquiries(result.data.enqueiryRequest);
    } catch (error) {
      console.log(error.response);
    }
  };

  const SuperAdminrequestEnquiryDetails = async (slug, token) => {
    try {
      const result = await SuperAdmingetrequestDetailsAction(slug, token);

      const { requestDetails } = result.data;
      const { getEnquiy } = requestDetails;
      const { user } = requestDetails;
      // console.log(requestDetails);
      const enquiryDetails = {
        enquiry: requestDetails.enquiry,
        description: requestDetails.description,
        createdAt: requestDetails.createdAt,
        Seletedlefcategory: requestDetails.Seletedlefcategory,
      };
      setenquieDetails(enquiryDetails);
      setApplyedUserDetails(getEnquiy);
      setenquiedCreatedBy(user);
    } catch (error) {
      return error;
    }
  };

  const ListOfCreatedEnquires = async (token) => {
    try {
      const result = await ListOfCreatedEnquiresAction(token);
      setuserEnquireList(result.data.CreatedEnquires);
    } catch (error) {
      console.log(error);
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
        selectedCity,
        setSelectedCity,
        selectedCategories,
        setselectedCategories,
        locationFillterShow,
        handleCloseLocation,
        handleShowLocation,
        categoriesFillterShow,
        setcategoriesFillterShow,
        handleCloseCategories,
        handleShowCategories,
        handelClearLocation,
        handelClearCategories,
        togglesortFiilter,
        settogglesortFiilter,
        handelToogleSort,
        getListAllEnquiryRequestAction,
        ListOfSentEnquiries,
        SuperAdminrequestEnquiryDetails,
        enquieDetails,
        ApplyedUserDetails,
        enquiedCreatedBy,
        ListOfCreatedEnquires,
        userEnquireList,
      }}
    >
      {children}
    </EnquiryContext.Provider>
  );
};
