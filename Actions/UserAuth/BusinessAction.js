import axios from "axios";
import { API } from "../../config";

export const getUserBusinessDetails = async (token) => {
  try {
    const res = await axios.get(
      "http://127.0.0.1:5000/api/V1/industy/business/get-business-details",
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export const updateBusinessProfile = async (formdata, token) => {
  try {
    const res = await axios.patch(
      `${API}/api/V1/industy/business/update-business-profile`,
      formdata,
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export const updateLogo = async (formData, token) => {
  try {
    console.log(formData);
    const res = await axios.patch(
      "http://127.0.0.1:5000/api/V1/industy/business/update-logo",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

// Get user Business Details by slug

export const getBusinessDetailsBySlugAction = async (slug) => {
  try {
    const res = await axios.get(
      `http://127.0.0.1:5000/api/V1/industy/business/business-details/${slug}`,
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      }
    );

    return res;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export const getAllBusinessList = async () => {
  try {
    const res = await axios.get(
      "http://127.0.0.1:5000/api/V1/industy/business/business-lists",
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      }
    );

    return res;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};
