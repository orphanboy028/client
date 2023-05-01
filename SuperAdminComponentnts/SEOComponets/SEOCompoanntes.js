import React, { useContext, useEffect } from "react";
import style from "../css/SEOComponent.module.css";
import SEOProductListTable from "./SEOProductListTable";
import { ProductContext } from "../../ContaxtApi/ProductContextApi";

export default function SEOCompoanntes() {
  const { SuperAdmingetAllProductsAction, allProductForSEO } =
    useContext(ProductContext);

  useEffect(() => {
    SuperAdmingetAllProductsAction();
  }, []);

  return (
    <>
      <div className={style.SEOCompoanntes_main_Container}>
        <div className={style.SEOCompoanntes_stats_Container}>
          <h1>Stats</h1>
        </div>

        <div className={style.SEOCompoanntes_ProductList_container}>
          <SEOProductListTable />
        </div>
      </div>
    </>
  );
}
