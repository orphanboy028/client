import React from "react";
import style from "./css/FeatureProduct.module.css";
import Image from "next/image";
import categoriesImage from "../../public/categories-images/Categories-Image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

export default function FeaturedProducts() {
  return (
    <div>
      <div className={style.TrendingCategories_mainContainer}>
        <div className={style.title_Box}>
          <h3>Featured Products</h3>
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
                  <div className={style.FeatureProduct_PriceBox}>
                    <h5>
                      <span className={style.FeaturedProducts_PupeesIcon}>
                        <FontAwesomeIcon icon={faIndianRupeeSign} />
                      </span>
                      <span>1500</span>
                    </h5>
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
