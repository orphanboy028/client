import { createContext, useEffect, useState } from "react";
import {
  UpdateProductMetaDescreption,
  UpdateProductKeywords,
  UpdateMetaOgTitle,
  UpdateMetaOgDescription,
} from "../Actions/SEOActions/seoActions";

export const SEOContaxt = createContext();

export const SEOContextProvider = ({ children }) => {
  const [refreshSEOUpdate, setrefreshSEOUpdate] = useState(false);

  const UpdateProductMetaDescreptionAction = async (data, token, slug) => {
    try {
      const result = await UpdateProductMetaDescreption(data, token, slug);
      return result;
    } catch (error) {
      return error.response;
    }
  };

  const UpdateProductKeywordsAction = async (data, token, slug) => {
    try {
      const result = await UpdateProductKeywords(data, token, slug);
      return result;
    } catch (error) {
      return error.response;
    }
  };

  const UpdateMetaOgTitleAction = async (data, token, slug) => {
    try {
      const result = await UpdateMetaOgTitle(data, token, slug);
      return result;
    } catch (error) {
      return error.response;
    }
  };

  const UpdateMetaOgDescriptionAction = async (data, token, slug) => {
    try {
      const result = await UpdateMetaOgDescription(data, token, slug);
      return result;
    } catch (error) {
      return error.response;
    }
  };

  return (
    <SEOContaxt.Provider
      value={{
        refreshSEOUpdate,
        setrefreshSEOUpdate,
        UpdateProductMetaDescreptionAction,
        UpdateProductKeywordsAction,
        UpdateMetaOgTitleAction,
        UpdateMetaOgDescriptionAction,
      }}
    >
      {children}
    </SEOContaxt.Provider>
  );
};
