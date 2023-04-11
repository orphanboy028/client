import { createContext, useEffect, useState } from "react";
import { getAllCategories } from "../Actions/categories/CategoriesAction";

import { useRouter } from "next/router";

export const categoriesContext = createContext();

export const CategriesContextProvider = ({ children }) => {
  const router = useRouter();
  const [allCategories, setallCategories] = useState({});

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

  return (
    <categoriesContext.Provider value={{ allCategories, getCategories }}>
      {children}
    </categoriesContext.Provider>
  );
};
