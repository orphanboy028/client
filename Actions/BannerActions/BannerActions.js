import axios from "axios";

export const uploadHomePageSliderBanner = async (data, token) => {
  try {
    return await axios.post(
      "http://127.0.0.1:5000/api/V1/industy/super-admin/banners/upload-home-page-slider-banner",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    return error.response;
  }
};

export const getListHomeSliderBanner = async (token) => {
  try {
    return await axios.get(
      "http://127.0.0.1:5000/api/V1/industy/super-admin/banners/home-slider-list",
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    return error.response;
  }
};

export const updateStatus = async (data, token) => {
  try {
    return await axios.patch(
      "http://127.0.0.1:5000/api/V1/industy/super-admin/banners/update-home-slider-status",
      { id: data },
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    return error.response;
  }
};

export const InActivateStatus = async (data, token) => {
  try {
    return await axios.patch(
      "http://127.0.0.1:5000/api/V1/industy/super-admin/banners/in-activate-home-slider-status",
      { id: data },
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    return error.response;
  }
};
