import React from "react";
import style from "./css/FeatureProduct.module.css";
import Image from "next/image";
import categoriesImage from "../../public/categories-images/Categories-Image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function FeaturedProducts({ products, title }) {
  console.log(products, title);
  return (
    <div>
      <div className={style.TrendingCategories_mainContainer}>
        <div className={style.title_Box}>
          <h3>{title}</h3>
        </div>
        <div className={style.TrendingCategories_Card_container}>
          {products.map((product, i) => {
            return (
              <>
                <div className={style.TrendingCategories_card_Box}>
                  <div className={style.TrendingCategories_CardImage_Box}>
                    {product && product.images && product.images[0] && (
                      <Image
                        src={`/product-feature-imges/${product.images[0].url}`}
                        alt={product.images[0].altText}
                        fill
                      />
                    )}
                  </div>
                  <div className={style.Feature_cardName}>
                    <h5>{product?.name} </h5>
                  </div>
                  <div className={style.FeatureProduct_PriceBox}>
                    <h5>
                      <span className={style.FeaturedProducts_PupeesIcon}>
                        <FontAwesomeIcon icon={faIndianRupeeSign} />
                      </span>
                      <span>{product?.price}</span>
                    </h5>
                  </div>
                  <div className={style.Card_BtnBox}>
                    <Link
                      href={`products/Product-details/${product?.slug}`}
                      className={style.Card_BtnBox_Link}
                      style={{ width: "100%" }}
                    >
                      <div>View</div>
                    </Link>
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
