import React from "react";
import style from "./css/SubCategories.module.css";
import Image from "next/image";
import banner from "../../public/banners-images/web-design.png";
import SubCategoriesCard from "./SubCategoriesCard";

export default function SubCategoriesComponent() {
  return (
    <div className={style.MainCategoriesComponent_MainContainer}>
      <div className={style.MainCategoriesComponent_Banner_Container}>
        <div className={style.MainCategoriesComponent_Banner_Box}>
          <Image src={banner} fill alt="Main-Categories page banner" />
        </div>
      </div>

      <div className={style.MainCategoriesComponent_mainContent}>
        <SubCategoriesCard />
      </div>
    </div>
  );
}
