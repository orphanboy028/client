import React from "react";
import style from "./css/TrandingCategories.module.css";
import Image from "next/image";
import categoriesImage from "../../public/categories-images/Categories-Image.jpg";

export default function TrendingCategories() {
  return (
    <div>
      <div className={style.TrendingCategories_mainContainer}>
        <div className={style.title_Box}>
          <h3>Trending Categories</h3>
        </div>
        <div className={style.TrendingCategories_Card_container}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(() => {
            return (
              <>
                <div className={style.TrendingCategories_card_Box}>
                  <div className={style.TrendingCategories_CardImage_Box}>
                    <Image
                      src={categoriesImage}
                      alt="Categories-image"
                      width={100}
                    />
                  </div>
                  <div className={style.TrendingCategories_cardName}>
                    <h5>Inverters & Ups Equipment </h5>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
