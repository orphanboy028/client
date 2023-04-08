import { createContext, useEffect, useState } from "react";
import {
  getUserBusinessDetails,
  updateBusinessProfile,
  updateLogo,
} from "../Actions/UserAuth/BusinessAction";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [productIMageFile, setproductIMageFile] = useState("");
  const [prductIMagePreview, setprductIMagePreview] = useState(null);
  const [loading, setloading] = useState(false);

  // Handel CHange for image
  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setprductIMagePreview(event.target.result);
      };
      reader.readAsDataURL(selectedFile);
      setproductIMageFile(selectedFile);
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

  return (
    <ProductContext.Provider
      value={{
        productIMageFile,
        setproductIMageFile,
        prductIMagePreview,
        setprductIMagePreview,

        handleImageChange,
        handelupdateImage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
