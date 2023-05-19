import axios from "axios";
import { API } from "../../config";

// Get all categories
export const getAllCategories = async () => {
  try {
    const res = await axios.get(
      `${API}/api/V1/industy/categories/get-all-categories`,
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

// Get all categories
export const getSubCategoriesByMainCategories = async (slug) => {
  try {
    const res = await axios.get(
      `${API}/api/V1/industy/categories/get-main-subcategories-list/${slug}`,
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

export const getAllLeafCatgories = async (slug) => {
  try {
    const res = await axios.get(
      `${API}/api/V1/industy/categories/get-sub-lef-categories/${slug}`,
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
