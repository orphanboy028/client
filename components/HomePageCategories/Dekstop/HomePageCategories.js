import React from "react";
import style from "../css/HomePageCategories.module.css";
export default function HomePageCategories() {
  return (
    <>
      <div className={style.HomePageCategories_main_Container}>
        <div className={style.Categories_HeadigBox}>
          <h1>Electronics & Electrical</h1>
        </div>
        <div className={style.Categories_Main_container}>
          <div className={style.Categories_Main_container_ImageBox}>
            <div className={style.categorie_Badg}>Electronics & Electrical</div>
          </div>
          <div className={style.subCategories_container}>
            <div className={style.subCategories_Box}>
              <div className={style.SubCategoriesImageBox}>image</div>
              <div className={style.subCategories_NameBox}>
                Electric Tool Manufacturer
              </div>
              <div className={style.subCategories_Explor}>Explor Now</div>
            </div>
            <div className={style.subCategories_Box}>
              <div className={style.SubCategoriesImageBox}>image</div>
              <div className={style.subCategories_NameBox}>
                Electric Tool Manufacturer
              </div>
              <div className={style.subCategories_Explor}>Explor Now</div>
            </div>
            <div className={style.subCategories_Box}>
              <div className={style.SubCategoriesImageBox}>image</div>
              <div className={style.subCategories_NameBox}>
                Electric Tool Manufacturer
              </div>
              <div className={style.subCategories_Explor}>Explor Now</div>
            </div>
            <div className={style.subCategories_Box}>
              <div className={style.SubCategoriesImageBox}>image</div>
              <div className={style.subCategories_NameBox}>
                Electric Tool Manufacturer
              </div>
              <div className={style.subCategories_Explor}>Explor Now</div>
            </div>
            <div className={style.subCategories_Box}>
              <div className={style.SubCategoriesImageBox}>image</div>
              <div className={style.subCategories_NameBox}>
                Electric Tool Manufacturer
              </div>
              <div className={style.subCategories_Explor}>Explor Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
