import React from "react";
import style from "../css/HomepageCategories.module.css";
import nextIcon from "../../../public/app-static-images/Home-categories/next.png";
import Image from "next/image";
export default function MSubCategoriesCards() {
  return (
    <>
      <div className={style.MSubCategoriesCards_ListContainer}>
        <div className={style.MSubCategoriesCards_subLists}>
          <div className={style.MSub_NameBox}>Electronic and Electrical</div>
          <div className={style.MSub_IconBox}>
            <Image src={nextIcon} width={30} alt="next-icon" />
          </div>
        </div>
        <div className={style.MSubCategoriesCards_subLists}>
          <div className={style.MSub_NameBox}>Name</div>
          <div className={style.MSub_IconBox}>
            <Image src={nextIcon} width={30} alt="next-icon" />
          </div>
        </div>
      </div>
    </>
  );
}
