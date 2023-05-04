import React from "react";
import style from "../css/MainCategories.module.css";
import MainCategoriesTable from "./MainCategoriesTable";
import MainCategoriesForm from "./MainCategoriesForm";
export default function AdminMainCategioriesComponent() {
  return (
    <>
      <div className={style.AdminMainCategioriesComponent_main_Container}>
        <div className={style.categories_stats_container}>Stats</div>

        <div className={style.Categories_Form_container}>
          <MainCategoriesForm />
        </div>
        <div className={style.Categories_list_RenderBox}>
          <MainCategoriesTable />
        </div>
      </div>
    </>
  );
}
