import axios from "axios";

export const getAllUser = async (token) => {
  try {
    const res = await axios.get(
      "http://127.0.0.1:5000/api/V1/industy/super-admin/all-users",
      {
        headers: {
          "Content-Type": "application/json",
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
