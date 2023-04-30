import React, { useContext, useEffect, useState } from "react";
import style from "../css/AddProduct.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../../../ContaxtApi/ProductContextApi";
import Form from "react-bootstrap/Form";
import Image from "next/image";
import ListPostedProduct from "./ListPostedProduct";
import { ProductFormContext } from "../../../ContaxtApi/ProductFormContextApi";
import ProductFormConponent from "./ProductFormConponent";

export default function AddProductComponenet() {
  const { handleImageChange, prductIMagePreview } = useContext(ProductContext);
  const {
    addButton,
    handelAddProductBox,
    buttonEnabled,
    handelTabselect,
    tabs,
  } = useContext(ProductFormContext);

  return (
    <>
      <div className={style.AddProductComponenet_container}>
        {addButton ? (
          <>
            <ProductFormConponent />
          </>
        ) : (
          <>
            <div className={style.product_List_container}>
              <div className={style.addButton_container}>
                <button onClick={handelAddProductBox}>Add Product</button>
              </div>

              <ListPostedProduct />
            </div>
          </>
        )}
      </div>
    </>
  );
}
