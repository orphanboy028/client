import React, { useContext, useEffect, useState } from "react";
import style from "../css/AddProduct.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../../../ContaxtApi/ProductContextApi";

import Image from "next/image";
import { ProductFormContext } from "../../../ContaxtApi/ProductFormContextApi";
import BaisicDetailsForm from "./BaisicDetailsForm";

export default function ProductFormConponent() {
  const { handleImageChange, prductIMagePreview } = useContext(ProductContext);
  const {
    addButton,
    handelAddProductBox,
    buttonEnabled,
    handelTabselect,
    tabs,
  } = useContext(ProductFormContext);
  return (
    <div>
      <div className={style.Add_product_container}>
        {/* Back button box start */}
        <div>Back button box</div>
        {/* Back button box End */}
        {/* Two Buttons Tab start */}
        <div className={style.AddProductComponenet_outer_tabContainer}>
          <div class={style.AddProductComponenet_NavTab}>
            <div
              className={`${style.AddProductComponenet_tab_btn} ${style.tabActive}`}
              onClick={() => handelTabselect("baisc-details")}
            >
              <button>Basic Details</button>
            </div>
            <div className={style.AddProductComponenet_tab_btn}>
              <button
                disabled={buttonEnabled}
                onClick={() => handelTabselect("spacification")}
              >
                Specification details{" "}
              </button>
            </div>
          </div>
        </div>

        {/* Two Buttons Tab End */}

        {/* ---------Start--------- */}
        <div className={style.AddProductComponenet_Bascic_details_container}>
          {tabs === "baisc-details" ? (
            <>
              <BaisicDetailsForm />
            </>
          ) : null}

          {tabs === "spacification" ? (
            <>
              <h1> spacification</h1>
            </>
          ) : null}

          <div>Next</div>
        </div>
        {/* ------------End------------- */}
      </div>
    </div>
  );
}
