import axios from "axios";

export const createCategory = async (token, data) => {
  try {
    const res = await axios.post(
      "http://127.0.0.1:5000/api/V1/industy/categories/main-categorie",
      data,
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
