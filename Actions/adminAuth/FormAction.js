import axios from "axios";

export const getForm = async (formName) => {
  try {
    const res = await axios.get(
      `http://127.0.0.1:5000/api/V1/industy/form/formdata/`,

      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
        params: {
          formName: formName,
        },
      }
    );

    return res;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};
