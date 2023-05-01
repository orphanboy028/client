import axios from "axios";

export const UpdateProductMetaDescreption = async (data, token, slug) => {
  try {
    return await axios.patch(
      `http://127.0.0.1:5000/api/V1/industy/super-seo/Update-Product-Meta-Descreption/${slug}`,
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

export const UpdateProductKeywords = async (data, token, slug) => {
  try {
    return await axios.patch(
      `http://127.0.0.1:5000/api/V1/industy/super-seo/Update-Product-Meta-keywords/${slug}`,
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

export const UpdateMetaOgTitle = async (data, token, slug) => {
  try {
    return await axios.patch(
      `http://127.0.0.1:5000/api/V1/industy/super-seo/Update-Product-og-title/${slug}`,
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

export const UpdateMetaOgDescription = async (data, token, slug) => {
  try {
    return await axios.patch(
      `http://127.0.0.1:5000/api/V1/industy/super-seo/Update-Product-og-description/${slug}`,
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
