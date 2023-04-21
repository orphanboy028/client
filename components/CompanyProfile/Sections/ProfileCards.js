import React from "react";
import style from "../css/ProfileCards.module.css";
import productImage from "../../../public/product-feature-imges/user-64318e457993fb3620054341-1681332947449.jpeg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

export default function ProfileCards({ items }) {
  return (
    <>
      <div className={style.ProfileCards_container}>
        {items.map((product, i) => {
          return (
            <>
              <div className={style.ProfileCards_card_box}>
                <div className={style.ProfileCards_card_box_ImageBox}>
                  <Image src={productImage} alt="Product-image" width={100} />
                </div>
                <div>
                  <h3>{product?.name}</h3>
                </div>
                <div className={style.ProfileCards_categoriesBox}>
                  <p>Leak testing</p>
                </div>
                <div className={style.ProfileCards_PriceBox}>
                  <span>
                    <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                  </span>
                  <span>1500</span>
                </div>
                <div className={style.ProfileCards_cardBtn_box}>
                  <div className={style.ProfileCards_btn}>View Details</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
