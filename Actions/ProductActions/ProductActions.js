import axios from "axios";

export const getAllProductsAction = async () => {
  try {
    const res = await axios.get(
      `http://127.0.0.1:5000/api/V1/industy/product/`,

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

export const getSeachProductsAction = async (q) => {
  console.log("get seacrh action ", q);
  try {
    const res = await axios.get(
      `http://127.0.0.1:5000/api/V1/industy/product/search?q=${q}`,

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

export const getSingleProductsAction = async (slug) => {
  try {
    console.log(slug);
    const res = await axios.get(
      `http://127.0.0.1:5000/api/V1/industy/product/single-product/${slug}`,

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
