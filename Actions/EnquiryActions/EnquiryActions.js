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

export const getrequestDetails = async (slug, token) => {
  try {
    return await axios.get(
      `http://127.0.0.1:5000/api/V1/industy/sendenquiry/get-request-details/${slug}`,

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

// SEnd Enqueiry Action
export const sendEnquiryAction = async (data, slug, token) => {
  try {
    return await axios.post(
      `http://127.0.0.1:5000/api/V1/industy/sendenquiry/send-enquiry/${slug}`,
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

export const ListAllEnquiryRequestAction = async (token) => {
  try {
    return await axios.get(
      `http://127.0.0.1:5000/api/V1/industy/sendenquiry/List-All-Enquiry-Request`,

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

// getrequestDetails

export const SuperAdmingetrequestDetailsAction = async (slug, token) => {
  try {
    return await axios.get(
      `http://127.0.0.1:5000/api/V1/industy/sendenquiry/super-admin-get-request-details/${slug}`,

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
