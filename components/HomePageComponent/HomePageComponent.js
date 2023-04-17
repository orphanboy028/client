import React from "react";
import TrendingCategories from "./TrendingCategories";
import FeaturedProducts from "./FeaturedProducts";
import style from "./css/HomePageComponent.module.css";
import EnqueryForm from "../../utilsComponents/EnqueryForm";

export default function HomePageComponent() {
  return (
    <>
      <div className={style.HomePageComponent_section_box}>
        <TrendingCategories />
      </div>
      <div className={style.HomePageComponent_section_box}>
        <FeaturedProducts />
      </div>
      <div className={style.HomePageComponent_section_box}>
        <EnqueryForm />
      </div>
    </>
  );
}
