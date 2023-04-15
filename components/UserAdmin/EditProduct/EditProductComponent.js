import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import style from "../css/AddProduct.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../../../ContaxtApi/ProductContextApi";

import Image from "next/image";
import { ProductFormContext } from "../../../ContaxtApi/ProductFormContextApi";
// import BaisicDetailsForm from "./BaisicDetailsForm";
import BaisicDetailsForm from "../AddProducts/BaisicDetailsForm";
import SpacificationComponnent from "./SpacificationComponnent";
import BasicDeatilsComponent from "./BasicDeatilsComponent";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";

export default function EditProductComponent() {
  const router = useRouter();
  const { slug } = router.query;
  const { handleImageChange, prductIMagePreview, singleUserProduct } =
    useContext(ProductContext);
  const { token, loginUser } = useContext(UserContext);
  const {
    addButton,
    handelAddProductBox,
    buttonEnabled,
    handelTabselect,
    tabs,
    handleClickButton2,
    handleClickButton1,
    isActiveButton1,
    isActiveButton2,
  } = useContext(ProductFormContext);

  useEffect(() => {
    singleUserProduct(token, slug);
  }, [slug]);

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
              className={`${style.AddProductComponenet_tab_btn} ${
                isActiveButton1 ? `${style.tabActive}` : " "
              } `}
              onClick={() => handleClickButton1("baisc-details")}
            >
              <button>Basic Details</button>
            </div>
            <div
              className={`${style.AddProductComponenet_tab_btn} ${
                isActiveButton2 ? `${style.tabActive}` : " "
              } `}
            >
              <button
                disabled={false}
                onClick={() => handleClickButton2("spacification")}
              >
                Specification details
              </button>
            </div>
          </div>
        </div>

        {/* Two Buttons Tab End */}

        {/* ---------Start--------- */}
        <div className={style.AddProductComponenet_Bascic_details_container}>
          {tabs === "baisc-details" ? (
            <>
              {/* <BaisicDetailsForm /> */}
              <BasicDeatilsComponent />
            </>
          ) : null}

          {tabs === "spacification" ? (
            <>
              <SpacificationComponnent />
            </>
          ) : null}

          <div>Next</div>
        </div>
        {/* ------------End------------- */}
      </div>
    </div>
  );
}
