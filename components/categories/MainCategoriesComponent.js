import React, { useContext, useEffect } from "react";
import style from "./css/MainCategories.module.css";
import Image from "next/image";
import banner from "../../public/banners-images/web-design.png";
import MainCategoriesCard from "./MainCategoriesCard";
import { categoriesContext } from "../../ContaxtApi/CategoriesContaxApi";

export default function MainCategoriesComponent() {
  const { allCategories, getCategories } = useContext(categoriesContext);

  console.log(allCategories);
  return (
    <div className={style.MainCategoriesComponent_MainContainer}>
      <div className={style.MainCategoriesComponent_Banner_Container}>
        <div className={style.MainCategoriesComponent_Banner_Box}>
          <Image src={banner} fill alt="Main-Categories page banner" />
        </div>
      </div>

      <div className={style.MainCategoriesComponent_mainContent}>
        {allCategories?.map((el, i) => {
          return (
            <MainCategoriesCard
              title={el.categoryName}
              subCategory={el.subCategory}
              slug={el.slug}
            />
          );
        })}
      </div>
    </div>
  );
}
