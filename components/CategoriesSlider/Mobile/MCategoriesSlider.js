import React from "react";
import style from "../css/MCategoriesSlider.module.css";
import Image from "next/image";
import carengine from "../../../public/app-static-images/car-engine.jpg";

export default function MCategoriesSlider() {
  return (
    <div className={style.MCategoriesSlider_main_container}>
      <div className={style.MCategoriesSlider_card_boxes}>
        <div className={style.MCategoriesSlider_cardBox}>
          <div className={style.MCategoriesSlider_card_ImageBox}>
            <Image
              src={carengine}
              alt="categories-image"
              width={50}
              className={style.imageStyle}
            />
          </div>
          <div className={style.MCategoriesSlider_categoriesName}>
            Electronics & Electrical
          </div>
        </div>
      </div>
      <div className={style.MCategoriesSlider_card_boxes}>
        <div className={style.MCategoriesSlider_cardBox}>
          <div className={style.MCategoriesSlider_card_ImageBox}>
            <Image
              src={carengine}
              alt="categories-image"
              width={50}
              className={style.imageStyle}
            />
          </div>
          <div className={style.MCategoriesSlider_categoriesName}>
            Electronics & Electrical
          </div>
        </div>
      </div>
      <div className={style.MCategoriesSlider_card_boxes}>
        <div className={style.MCategoriesSlider_cardBox}>
          <div className={style.MCategoriesSlider_card_ImageBox}>
            <Image
              src={carengine}
              alt="categories-image"
              width={50}
              className={style.imageStyle}
            />
          </div>
          <div className={style.MCategoriesSlider_categoriesName}>
            Electronics & Electrical
          </div>
        </div>
      </div>

      <div className={style.MCategoriesSlider_card_boxes}>
        <div className={style.MCategoriesSlider_cardBox}>
          <div className={style.MCategoriesSlider_card_ImageBox}>
            <Image
              src={carengine}
              alt="categories-image"
              width={50}
              className={style.imageStyle}
            />
          </div>
          <div className={style.MCategoriesSlider_categoriesName}>
            Electronics & Electrical
          </div>
        </div>
      </div>

      <div className={style.MCategoriesSlider_card_boxes}>
        <div className={style.MCategoriesSlider_cardBox}>
          <div className={style.MCategoriesSlider_card_ImageBox}>
            <Image
              src={carengine}
              alt="categories-image"
              width={50}
              className={style.imageStyle}
            />
          </div>
          <div className={style.MCategoriesSlider_categoriesName}>
            Electronics & Electrical
          </div>
        </div>
      </div>

      <div className={style.MCategoriesSlider_card_boxes}>
        <div className={style.MCategoriesSlider_cardBox}>
          <div className={style.MCategoriesSlider_card_ImageBox}>
            <Image
              src={carengine}
              alt="categories-image"
              width={50}
              className={style.imageStyle}
            />
          </div>
          <div className={style.MCategoriesSlider_categoriesName}>
            Electronics & Electrical
          </div>
        </div>
      </div>
    </div>
  );
}
