import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import style from "./css/SubCategories.module.css";
import Image from "next/image";
import banner from "../../public/banners-images/web-design.png";
import SubCategoriesCard from "./SubCategoriesCard";
import { categoriesContext } from "../../ContaxtApi/CategoriesContaxApi";
export default function SubCategoriesComponent() {
  const router = useRouter();
  const { slug } = router.query;
  const { getSubCategoriesByMainCategoriesAction, allMainSubCategories } =
    useContext(categoriesContext);

  useEffect(() => {
    getSubCategoriesByMainCategoriesAction(slug);
  }, [slug]);

  console.log(allMainSubCategories);
  return (
    <div className={style.MainCategoriesComponent_MainContainer}>
      <div className={style.MainCategoriesComponent_Banner_Container}>
        <div className={style.MainCategoriesComponent_Banner_Box}>
          <Image src={banner} fill alt="Main-Categories page banner" />
        </div>
      </div>

      <div className={style.MainCategoriesComponent_mainContent}>
        {allMainSubCategories.map((el, i) => {
          return (
            <SubCategoriesCard
              title={el.subCategoryName}
              lefCategory={el.lefCategory}
              slug={el.slug}
            />
          );
        })}
      </div>
    </div>
  );
}
