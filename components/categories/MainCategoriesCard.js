import React from "react";
import style from "./css/MainCategories.module.css";
import Image from "next/image";
import banner from "../../public/banners-images/web-design.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndustry, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function MainCategoriesCard({ title, slug, subCategory }) {
  return (
    <div className={style.MainCategoriesCard_container}>
      <div className={style.MainCategoriesCard_Box}>
        <div className={style.card_mainIcon_Box}>
          <div className={style.maincategores_TitleBox}>{title}</div>
          <Link href={`/categories/sub-categories/${slug}`}>
            <div className={style.MainCategeories_IconBox}>
              <FontAwesomeIcon icon={faIndustry} style={{ color: "#89c0d2" }} />
            </div>
          </Link>
        </div>

        <div className={style.SuCategories_Container}>
          {subCategory.map((sub, i) => {
            return (
              <>
                <div className={style.SubCategories_cardBox}>
                  <div className={style.subCatgories_ImageBox}>
                    <Image
                      src={banner}
                      fill
                      alt="Main-Categories page banner"
                    />
                  </div>
                  <div className={style.subCatgories_TitleBox}>
                    {sub.subCategoryName}
                  </div>
                  <div className={style.lefCategories_ListBox}>
                    {sub.lefCategory.map((lef, i) => {
                      return (
                        <>
                          <Link
                            href={""}
                            style={{
                              textDecoration: "none",
                              fontSize: "1.2rem",
                            }}
                          >
                            {lef.lefCategoryName}
                          </Link>
                        </>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}

          <Link
            href={`/categories/sub-categories/${slug}`}
            className={style.Go_ToLink}
          >
            <div className={style.SubCategories_Static_Card}>
              <div className={style.subCategories_Arrow_IconBox}>
                <FontAwesomeIcon icon={faChevronRight} />
              </div>

              <p>All Sub Categories</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
