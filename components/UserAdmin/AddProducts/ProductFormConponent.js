import React, { useContext, useEffect, useState } from "react";
import style from "../css/AddProduct.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../../../ContaxtApi/ProductContextApi";
import Link from "next/link";
import Button from "react-bootstrap/Button";
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
    setaddButton,
  } = useContext(ProductFormContext);

  const [isActiveButton1, setIsActiveButton1] = useState(true);
  const [isActiveButton2, setIsActiveButton2] = useState(false);

  const handleClickButton1 = () => {
    setIsActiveButton1(true);
    setIsActiveButton2(false);
  };

  const handleClickButton2 = () => {
    setIsActiveButton1(false);
    setIsActiveButton2(true);
  };

  return (
    <div>
      <div className={style.Add_product_container}>
        {/* Back button box start */}
        <div className={style.Back_btnBox} onClick={() => setaddButton(false)}>
          <Button variant="primary" style={{ letterSpacing: "0.1rem" }}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ color: "#ffffff", marginRight: "5px" }}
            />
            Back
          </Button>{" "}
        </div>
        {/* Back button box End */}
        {/* Two Buttons Tab start */}
        <div className={style.AddProductComponenet_outer_tabContainer}>
          <div class={style.AddProductComponenet_NavTab}>
            <div
              className={`${style.AddProductComponenet_tab_btn} ${
                isActiveButton1 ? `${style.tabActive}` : " "
              } `}
              // onClick={() => handelTabselect("baisc-details")}

              onClick={handleClickButton1}
            >
              <button>Basic Details</button>
            </div>
            <div
              className={`${style.AddProductComponenet_tab_btn} ${
                isActiveButton2 ? `${style.tabActive}` : " "
              } `}
            >
              <button
                disabled={buttonEnabled}
                // onClick={() => handelTabselect("spacification")}
                onClick={handleClickButton2}
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
        </div>
        {/* ------------End------------- */}
      </div>
    </div>
  );
}
