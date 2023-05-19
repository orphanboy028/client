import React, { useContext, useEffect } from "react";

import style from "./css/LefCategories.module.css";
import Image from "next/image";
import banner from "../../public/banners-images/web-design.png";
import { categoriesContext } from "../../ContaxtApi/CategoriesContaxApi";
import { useRouter } from "next/router";
export default function LefCategoriesComponent() {
  const router = useRouter();
  const { slug } = router.query;
  const { getAllLeafCatgoriesAction, allsubLefCategories } =
    useContext(categoriesContext);

  //
  useEffect(() => {
    getAllLeafCatgoriesAction(slug);
  }, [slug]);

  console.log(allsubLefCategories);
  return (
    <>
      <div>
        <div className={style.MainCategoriesComponent_Banner_Container}>
          <div className={style.MainCategoriesComponent_Banner_Box}>
            <Image src={banner} fill alt="Main-Categories page banner" />
          </div>
        </div>

        <div className={style.lefCategories_Cards_Container}>
          {allsubLefCategories.map((el, i) => {
            return (
              <>
                <div className={style.LefeCategories_CardBox}>
                  <div className={style.lefcategoriesCard_Image}>
                    <Image src={banner} fill alt="lef-categories" />
                  </div>
                  <div className={style.lefTitle_Box}>
                    {" "}
                    {el.lefCategoryName}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
