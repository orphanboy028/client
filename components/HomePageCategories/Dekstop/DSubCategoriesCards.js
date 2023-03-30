import Image from "next/image";
import React from "react";
import style from "../css/HomepageCategories.module.css";
import cateImage from "../../../public/app-static-images/Home-categories/electric-tool.jpg";

export default function DSubCategoriesCards() {
  return (
    <>
      <div className={style.subCategories_CardBox}>
        <div className={style.DSubCategoriesCards_ImageBox}>
          <Image src={cateImage} alt="sub-categories-images" width={250} />
        </div>
        <div className={style.DSubCategoriesCards_nameBox}>
          <h1>Electric and electronic</h1>
        </div>
        <div className={style.DSubCategoriesCards_ExploreBox}>
          <h1>Explore Now</h1>
        </div>
      </div>
    </>
  );
}
