import axios from "axios";

export const getAllProductsAction = async () => {
  try {
    console.log("get all product");
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
  console.log("searchAction");
  try {
    const res = await axios.get(
      `http://127.0.0.1:5000/api/V1/industy/product/search?${q}`,

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

export const SuperAdminproductEnquires = async (token) => {
  console.log("super-admin action");
  try {
    const res = await axios.get(
      `http://127.0.0.1:5000/api/V1/industy/product/super-admin-product-Enquires/`,

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
