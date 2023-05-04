import React from "react";
import style from "./css/LefCategories.module.css";
import Image from "next/image";
import banner from "../../public/banners-images/web-design.png";

export default function LefCategoriesComponent() {
  return (
    <>
      <div>
        <div className={style.MainCategoriesComponent_Banner_Container}>
          <div className={style.MainCategoriesComponent_Banner_Box}>
            <Image src={banner} fill alt="Main-Categories page banner" />
          </div>
        </div>

        <div className={style.lefCategories_Cards_Container}>
          {[1, 2, 34, , 5, 6, 7, 8, 9, 10, 11].map(() => {
            return (
              <>
                <div className={style.LefeCategories_CardBox}>
                  <div className={style.lefcategoriesCard_Image}>
                    <Image src={banner} fill alt="lef-categories" />
                  </div>
                  <div className={style.lefTitle_Box}>LefCategories Name</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
