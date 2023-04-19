import axios from "axios";

export const creatEnquriy = async (data, token) => {
  try {
    return await axios.post(
      "http://127.0.0.1:5000/api/V1/industy/enquiry/create-enquiry",
      data,
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

export const getAllEnquies = async (token) => {
  try {
    return await axios.get(
      "http://127.0.0.1:5000/api/V1/industy/enquiry/get-all-enquiry",

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
