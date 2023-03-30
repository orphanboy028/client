import React from "react";
import style from "./css/HomepageCategories.module.css";
import DcategoriseCards from "./Dekstop/DcategoriseCards";
import MSubCategoriesCard from "./Mobile/MSubCategoriesCard";

export default function HomePageCategories() {
  return (
    <div className={style.HomePageCategories_main_Container}>
      <div className={style.HomePageCategories_dekstop_View}>
        <DcategoriseCards />
        <DcategoriseCards />
      </div>
      <div className={style.HomePageCategories_mobile_view}>
        <MSubCategoriesCard />
        <MSubCategoriesCard />
      </div>
    </div>
  );
}
