import React from "react";
import style from "../css/DCategoriesSlider.module.css";
import carengine from "../.././../public/app-static-images/car-engine.jpg";
import Image from "next/image";
export default function DCategoriesSlider() {
  return (
    <>
      <div className={style.DCategoriesSlider_main_Container}>
        <div className={style.DCategoriesSlider_boxes}>
          <div className={style.DCategoriesSlider_cardBox}>
            <div className={style.DCategoriesSlider_Card_imageBox}>
              <Image
                src={carengine}
                alt="Car-engine"
                width={50}
                height={50}
                className={style.categoriesImage}
              />
            </div>
            <div className={style.categoriesName}>Electronics & Electrical</div>
          </div>
        </div>

        <div className={style.DCategoriesSlider_boxes}>
          <div className={style.DCategoriesSlider_cardBox}>
            <div className={style.DCategoriesSlider_Card_imageBox}>
              <Image
                src={carengine}
                alt="Car-engine"
                width={50}
                height={50}
                className={style.categoriesImage}
              />
            </div>
            <div className={style.categoriesName}>Building & Construction</div>
          </div>
        </div>

        <div className={style.DCategoriesSlider_boxes}>
          <div className={style.DCategoriesSlider_cardBox}>
            <div className={style.DCategoriesSlider_Card_imageBox}>
              <Image
                src={carengine}
                alt="Car-engine"
                width={50}
                height={50}
                className={style.categoriesImage}
              />
            </div>
            <div className={style.categoriesName}>Industrial Supplies</div>
          </div>
        </div>

        <div className={style.DCategoriesSlider_boxes}>
          <div className={style.DCategoriesSlider_cardBox}>
            <div className={style.DCategoriesSlider_Card_imageBox}>
              <Image
                src={carengine}
                alt="Car-engine"
                width={50}
                height={50}
                className={style.categoriesImage}
              />
            </div>
            <div className={style.categoriesName}>Electronics & Electrical</div>
          </div>
        </div>

        <div className={style.DCategoriesSlider_boxes}>
          <div className={style.DCategoriesSlider_cardBox}>
            <div className={style.DCategoriesSlider_Card_imageBox}>
              <Image
                src={carengine}
                alt="Car-engine"
                width={50}
                height={50}
                className={style.categoriesImage}
              />
            </div>
            <div className={style.categoriesName}>
              Industrial Plants & Machinery
            </div>
          </div>
        </div>

        <div className={style.DCategoriesSlider_boxes}>
          <div className={style.DCategoriesSlider_cardBox}>
            <div className={style.DCategoriesSlider_Card_imageBox}>
              <Image
                src={carengine}
                alt="Car-engine"
                width={50}
                height={50}
                className={style.categoriesImage}
              />
            </div>
            <div className={style.categoriesName}>Food & Beverages</div>
          </div>
        </div>

        <div className={style.DCategoriesSlider_boxes}>
          <div className={style.DCategoriesSlider_cardBox}>
            <div className={style.DCategoriesSlider_Card_imageBox}>
              <Image
                src={carengine}
                alt="Car-engine"
                width={50}
                height={50}
                className={style.categoriesImage}
              />
            </div>
            <div className={style.categoriesName}>Packaging Machines</div>
          </div>
        </div>

        <div className={style.DCategoriesSlider_boxes}>
          <div className={style.DCategoriesSlider_cardBox}>
            <div className={style.DCategoriesSlider_Card_imageBox}>
              <Image
                src={carengine}
                alt="Car-engine"
                width={50}
                height={50}
                className={style.categoriesImage}
              />
            </div>
            <div className={style.categoriesName}>
              Mechanical Parts & Spares
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
