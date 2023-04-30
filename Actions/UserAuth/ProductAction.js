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
      `http://127.0.0.1:5000/api/V1/industy/product/update-product-spacification/${slug}`,
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

export const updateOnlyProductImage = async (formData, token, slug) => {
  try {
    console.log(formData);
    console.log(slug);
    return await axios.patch(
      `http://127.0.0.1:5000/api/V1/industy/product/feature-image/update-product-image/${slug}`,
      formData,
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

export const updateBiasieDetails = async (data, token, slug) => {
  console.log(data);
  try {
    return await axios.patch(
      `http://127.0.0.1:5000/api/V1/industy/product/update-prodcut-baise-details/${slug}`,
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

export const deActivateProduct = async (data, token) => {
  try {
    return await axios.patch(
      `http://127.0.0.1:5000/api/V1/industy/product/deactive-product/`,
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

export const ActivateProduct = async (data, token) => {
  try {
    return await axios.patch(
      `http://127.0.0.1:5000/api/V1/industy/product/active-product/`,
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

export const DeleteProduct = async (data, token) => {
  try {
    console.log(data);
    return await axios.delete(
      "http://127.0.0.1:5000/api/V1/industy/product/delete-product/",

      {
        data,
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

export const SendSingleproductEnqiires = async (data, token, slug) => {
  try {
    console.log("data", data);
    return await axios.patch(
      `http://127.0.0.1:5000/api/V1/industy/product/Send-Single-product-Enqiires/${slug}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export const productEnquires = async (token) => {
  try {
    const res = await axios.get(
      `http://127.0.0.1:5000/api/V1/industy/product/user-product-Enquires/`,

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

export const SingleproductEnquires = async (token, slug) => {
  try {
    const res = await axios.get(
      `http://127.0.0.1:5000/api/V1/industy/product/user-single-product-Enquires/${slug}`,

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
