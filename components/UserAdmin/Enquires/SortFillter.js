import React, { useContext, useEffect, useState } from "react";
import style from "../css/sortFillter.module.css";
import { EnquiryContext } from "../../../ContaxtApi/EnquiryContaxApi";

export default function SortFillter() {
  const { togglesortFiilter, settogglesortFiilter, handelToogleSort } =
    useContext(EnquiryContext);

  return (
    <>
      <div className={style.SortFillter_bar_container}>
        <div className={style.SortFillter_inner_container}>
          <div
            className={`${style.SortFillter_defaultBox} ${
              togglesortFiilter === "default" ? style.SortFillter_activeBox : ""
            }`}
            onClick={() => handelToogleSort("default")}
          >
            Default
          </div>
          <div
            className={`${style.SortFillter_recentBox} ${
              togglesortFiilter === "recent" ? style.SortFillter_activeBox : ""
            }`}
            onClick={() => handelToogleSort("recent")}
          >
            Recent
          </div>
        </div>
      </div>
    </>
  );
}
