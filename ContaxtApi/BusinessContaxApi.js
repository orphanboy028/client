import { createContext, useEffect, useState } from "react";
import {
  getUserBusinessDetails,
  updateBusinessProfile,
  updateLogo,
} from "../Actions/UserAuth/BusinessAction";

export const BusinessContext = createContext();

export const BusinessContextProvider = ({ children }) => {
  const [Userbusiness, setUserbusiness] = useState({});
  const [file, setfile] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setloading] = useState(false);

  const handelChnage = (e) => {
    console.log("on Chnage");

    setUserbusiness((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Handel CHange for image
  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
      };
      reader.readAsDataURL(selectedFile);
      setfile(selectedFile);
    }
  };

  const handelupdateImage = async (token) => {
    try {
      const formData = new FormData();
      formData.append("photo", file);

      const result = await updateLogo(formData, token);
      return result;
    } catch (error) {
      console.log(error.response);
    }
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
        file,
        setfile,
        imagePreview,
        setImagePreview,
        handleImageChange,
        handelupdateImage,
      }}
    >
      {children}
    </BusinessContext.Provider>
  );
};
