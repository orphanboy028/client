import React from "react";
import style from "../css/HomepageCategories.module.css";
import MSubCategoriesCards from "./MSubCategoriesCards";
import cateImage from "../../../public/app-static-images/Home-categories/electric-tool.jpg";
import Image from "next/image";

export default function MSubCategoriesCard() {
  return (
    <>
      <div className={style.MSubCategoriesCard_main_container}>
        <div className={style.McategoriseCards_categories_Title}>
          <h1>Eletronic and electricals</h1>
        </div>
        <div className={style.MSubCategoriesCard_inner_container}>
          <div className={style.MSubCategoriesCard_ImageBox}>
            <Image
              src={cateImage}
              width={100}
              alt="categories-Image"
              className={style.McategoriesImage}
            />
          </div>
          <div className={style.MSubCategoriesCard_Card_Container}>
            <MSubCategoriesCards />
            <MSubCategoriesCards />
          </div>
        </div>
        <div>Read more</div>
      </div>
    </>
  );
}
