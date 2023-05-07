import { createContext, useEffect, useState } from "react";
import {
  uploadHomePageSliderBanner,
  getListHomeSliderBanner,
  updateStatus,
  InActivateStatus,
} from "../../Actions/BannerActions/BannerActions";

export const BannerContext = createContext();

export const BannerContextProvider = ({ children }) => {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [loading, setloading] = useState(false);
  const [SlidersImageFiles, setSlidersImageFiles] = useState([]);
  const [homePageSliders, sethomePageSliders] = useState([]);

  const getListHomeSliderBannerAction = async (token) => {
    try {
      const result = await getListHomeSliderBanner(token);

      sethomePageSliders(result.data.bannerLists);
      return result;
    } catch (error) {
      return error.response;
    }
  };

  const handleImageAdd = (event, index) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImagePreviews = [...imagePreviews];
        newImagePreviews[index] = event.target.result;
        setImagePreviews(newImagePreviews);
      };
      reader.readAsDataURL(selectedFile);
      setSlidersImageFiles([...SlidersImageFiles, selectedFile]);
    }
  };

  const handleImageRemove = (index) => {
    const newImagePreviews = [...imagePreviews];
    newImagePreviews.splice(index, 1);
    setImagePreviews(newImagePreviews);
    const newImageFiles = [...SlidersImageFiles];
    newImageFiles.splice(index, 1);
    setSlidersImageFiles(newImageFiles);
  };
  const uploadHomePageSliderBannerAction = async (inputdata, token) => {
    try {
      const formData = new FormData();
      SlidersImageFiles.forEach((file) => {
        formData.append("Silderimages", file);
      });

      formData.append("clientName", inputdata.clientName);
      formData.append("bannderDetails", inputdata.bannderDetails);

      const result = await uploadHomePageSliderBanner(formData, token);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const updateStatusAction = async (data, token) => {
    try {
      const result = await updateStatus(data, token);
      return result;
    } catch (error) {
      return error.response;
    }
  };

  const InActivateStatusAction = async (data, token) => {
    try {
      const result = await InActivateStatus(data, token);
      return result;
    } catch (error) {
      return error.response;
    }
  };

  return (
    <>
      <BannerContext.Provider
        value={{
          imagePreviews,
          setImagePreviews,
          SlidersImageFiles,
          setSlidersImageFiles,
          handleImageRemove,
          handleImageAdd,
          uploadHomePageSliderBannerAction,
          getListHomeSliderBannerAction,
          homePageSliders,
          updateStatusAction,
          InActivateStatusAction,
          loading,
          setloading,
        }}
      >
        {children}
      </BannerContext.Provider>
    </>
  );
};
