import { createContext, useEffect, useState } from "react";
import {
  getAllCategories,
  getSubCategoriesByMainCategories,
  getAllLeafCatgories,
} from "../Actions/categories/CategoriesAction";

import { useRouter } from "next/router";

export const categoriesContext = createContext();

export const CategriesContextProvider = ({ children }) => {
  const router = useRouter();
  const [allCategories, setallCategories] = useState([]);
  const [allMainSubCategories, setallMainSubCategories] = useState([]);
  const [allsubLefCategories, setallsubLefCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  // GET ALL CATEGORIES
  const getCategories = async () => {
    try {
      const result = await getAllCategories();
      setallCategories(result.data.allCategories);
    } catch (error) {
      console.log(error.response);
    }
  };

  const getSubCategoriesByMainCategoriesAction = async (slug) => {
    try {
      const result = await getSubCategoriesByMainCategories(slug);
      setallMainSubCategories(result.data.subCatList);
    } catch (error) {
      console.log(error.response);
    }
  };

  const getAllLeafCatgoriesAction = async (slug) => {
    try {
      const result = await getAllLeafCatgories(slug);
      setallsubLefCategories(result.data.getAll);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <categoriesContext.Provider
      value={{
        allCategories,
        getCategories,
        getSubCategoriesByMainCategoriesAction,
        allMainSubCategories,
        getAllLeafCatgoriesAction,
        allsubLefCategories,
      }}
    >
      {children}
    </categoriesContext.Provider>
  );
};
