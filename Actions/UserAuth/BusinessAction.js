import axios from "axios";

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
      "http://127.0.0.1:5000/api/V1/industy/business/update-business-profile",
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
