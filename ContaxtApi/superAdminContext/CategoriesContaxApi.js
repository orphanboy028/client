import { createContext, useEffect, useState } from "react";
import { createCategory } from "../../Actions/adminAuth/SuperAdminCategoriesAction";

export const SuperAdminCategoriesContext = createContext();

export const SuperAdminCategoriesContextProvider = ({ children }) => {
  const [imagePreview, setimagePreview] = useState(null);
  const [categotiesImageFile, setcategotiesImageFile] = useState("");

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setimagePreview(event.target.result);
      };
      reader.readAsDataURL(selectedFile);
      setcategotiesImageFile(selectedFile);
      console.log(categotiesImageFile);
    }
  };

  const createCategoryAction = async (token, inputdata) => {
    try {
      console.log(inputdata);
      const formData = new FormData();
      formData.append("categoryImage", categotiesImageFile);
      formData.append("categoryName", inputdata.categoryName);
      formData.append("categoryIcon", inputdata.categoryIcon);

      console.log(formData);
      const result = await createCategory(token, formData);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SuperAdminCategoriesContext.Provider
        value={{
          imagePreview,
          setimagePreview,
          categotiesImageFile,
          setcategotiesImageFile,
          handleImageChange,
          createCategoryAction,
        }}
      >
        {children}
      </SuperAdminCategoriesContext.Provider>
    </>
  );
};
