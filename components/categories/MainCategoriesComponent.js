import React from "react";
import style from "./css/MainCategories.module.css";
import Image from "next/image";
import banner from "../../public/banners-images/web-design.png";
import MainCategoriesCard from "./MainCategoriesCard";

export default function MainCategoriesComponent() {
  return (
    <div className={style.MainCategoriesComponent_MainContainer}>
      <div className={style.MainCategoriesComponent_Banner_Container}>
        <div className={style.MainCategoriesComponent_Banner_Box}>
          <Image src={banner} fill alt="Main-Categories page banner" />
        </div>
      </div>

      <div className={style.MainCategoriesComponent_mainContent}>
        <MainCategoriesCard />
      </div>
    </div>
  );
}
