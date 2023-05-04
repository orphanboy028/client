import { createContext, useEffect, useState } from "react";
import {
  getUserBusinessDetails,
  updateBusinessProfile,
  updateLogo,
  getBusinessDetailsBySlugAction,
} from "../Actions/UserAuth/BusinessAction";

export const BusinessContext = createContext();

export const BusinessContextProvider = ({ children }) => {
  const [Userbusiness, setUserbusiness] = useState({});
  const [file, setfile] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setloading] = useState(false);
  const [businessProfile, setbusinessProfile] = useState({});
  const [profileProduct, setprofileProduct] = useState([]);
  const [businessCompleteDetails, setbusinessCompleteDetails] = useState({});
  const [listedBusiness, setlistedBusiness] = useState([]);

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
    console.log(selectedFile);
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
      console.log(formData);
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

  // const getBusinessDetailsBySlug = async (slug) => {
  //   try {
  //     const result = await getBusinessDetailsBySlugAction(slug);
  //     const { business } = result.data;
  //     console.log(business);

  //     // Separate the rest of the data
  //     const restOfData = {
  //       CompanyName: business.CompanyName,
  //       GstNumber: business.GstNumber,
  //       LegalStatusofFirm: business.LegalStatusofFirm,
  //       NatureofBusiness: business.NatureofBusiness,
  //       PanNumber: business.PanNumber,
  //       TotalNumberofEmployees: business.TotalNumberofEmployees,
  //       createdAt: business.createdAt,
  //       slug: business.slug,
  //       updatedAt: business.updatedAt,
  //       website: business.website,
  //       id: business._id,
  //     };

  //     setbusinessProfile(restOfData);
  //     setprofileProduct(business.products);
  //   } catch (error) {
  //     return error;
  //   }
  // };

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
        businessProfile,
        profileProduct,
        listedBusiness,
        setlistedBusiness,
        businessCompleteDetails,
        setbusinessCompleteDetails,
      }}
    >
      {children}
    </BusinessContext.Provider>
  );
};
