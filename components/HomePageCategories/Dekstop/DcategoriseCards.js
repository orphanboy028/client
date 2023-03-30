import Image from "next/image";
import React from "react";
import style from "../css/HomepageCategories.module.css";
import cateImage from "../../../public/app-static-images/Home-categories/electric-tool.jpg";
import DSubCategoriesCards from "./DSubCategoriesCards";

export default function DcategoriseCards() {
  return (
    <div className={style.DcategoriseCards_main_continaer}>
      <div className={style.DcategoriseCards_categories_Title}>
        <h1>Eletronic and electricals</h1>
      </div>
      <div className={style.DcategoriseCards_innerBox}>
        <div className={style.DcategoriseCards_main_ImageBox}>
          <Image
            src={cateImage}
            width={250}
            height={250}
            alt="Categorise-image"
            className={style.categoriesImageStyle}
          />
        </div>
        <div className={style.categoriesCard_container}>
          <DSubCategoriesCards />
          <DSubCategoriesCards />
          <DSubCategoriesCards />
          <DSubCategoriesCards />
          <DSubCategoriesCards />
        </div>
      </div>
    </div>
  );
}
