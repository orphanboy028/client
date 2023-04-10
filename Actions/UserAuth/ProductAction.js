import axios from "axios";

export const createProduct = async (data, token) => {
  try {
    return await axios.post(
      "http://127.0.0.1:5000/api/V1/industy/product/create-Product",
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

export const getUserProducts = async (token, userId) => {
  try {
    const res = await axios.get(
      `http://127.0.0.1:5000/api/V1/industy/product/user-products/`,

      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        params: {
          userId: userId,
        },
      }
    );

    return res;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export const getUserSingleProduct = async (token, slug) => {
  try {
    const res = await axios.get(
      `http://127.0.0.1:5000/api/V1/industy/product/get-user-single-product/`,

      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        params: {
          slug: slug,
        },
      }
    );

    return res;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export const updateProductSpacfification = async (data, token, slug) => {
  console.log(data);
  try {
    return await axios.patch(
      `http://127.0.0.1:5000/api/V1/industy/product/update-product-spacification/?slug=${slug}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    return error.response;
  }
};
