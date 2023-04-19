import React, { useContext, useState } from "react";
import style from "../css/Tabs.module.css";
import { AppUtilsContext } from "../../../ContaxtApi/AppUtilsContaxApi";

export default function Tabs() {
  const { toggleState, setToggleState, toggleTab } =
    useContext(AppUtilsContext);

  return (
    <>
      <div className={style.Tabs_container}>
        <div
          className={`${toggleState === 1 ? style.activeTab : style.tabBox}`}
          onClick={() => toggleTab(1)}
        >
          Home
        </div>
        <div
          className={`${toggleState === 2 ? style.activeTab : style.tabBox}`}
          onClick={() => toggleTab(2)}
        >
          About Us
        </div>
        <div
          className={`${toggleState === 3 ? style.activeTab : style.tabBox}`}
          onClick={() => toggleTab(3)}
        >
          Products
        </div>
        <div
          className={`${toggleState === 4 ? style.activeTab : style.tabBox}`}
          onClick={() => toggleTab(4)}
        >
          Contact Us
        </div>
      </div>
    </>
  );
}
