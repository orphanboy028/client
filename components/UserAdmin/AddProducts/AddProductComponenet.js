import React, { useContext, useEffect, useState } from "react";
import style from "../css/AddProduct.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../../../ContaxtApi/ProductContextApi";
import Form from "react-bootstrap/Form";
import Image from "next/image";

export default function AddProductComponenet() {
  const { handleImageChange, prductIMagePreview } = useContext(ProductContext);

  return (
    <>
      <div className={style.AddProductComponenet_container}>
        {/* Back button box start */}
        <div>Back button box</div>
        {/* Back button box End */}
        {/* Two Buttons Tab start */}
        <div className={style.AddProductComponenet_outer_tabContainer}>
          <div class={style.AddProductComponenet_NavTab}>
            <div
              className={`${style.AddProductComponenet_tab_btn} ${style.tabActive}`}
            >
              Basic Details
            </div>
            <div className={style.AddProductComponenet_tab_btn}>
              Specification details
            </div>
          </div>
        </div>

        {/* Two Buttons Tab End */}

        {/* ---------Start--------- */}
        <div className={style.AddProductComponenet_Bascic_details_container}>
          <div
            className={style.AddProductComponenet_basic_details_innderContainer}
          >
            <div className={style.AddProductComponenet_imageContainer}>
              <div className={style.AddProductComponenet_imageBox}>
                <input
                  type="file"
                  id="FileInput"
                  onChange={handleImageChange}
                />
                {!prductIMagePreview && (
                  <>
                    <FontAwesomeIcon
                      icon={faCamera}
                      size="4x"
                      style={{ color: "#fff" }}
                    />
                    <label htmlFor="FileInput" class="file-input-label">
                      Uplod Product Image{" "}
                    </label>
                  </>
                )}
                {prductIMagePreview && (
                  <>
                    <div className={style.product_Feature_ImageBox}>
                      <Image
                        src={prductIMagePreview}
                        layout="responsive"
                        width={300}
                        height={300}
                        alt="Product-feature-image"
                        className={style.product_featureImageStyle}
                      />
                    </div>
                  </>
                )}
              </div>
              {prductIMagePreview && (
                <>
                  <div className={` ${style.chnage_btnBox}`}>
                    <button> Chnage image</button>
                  </div>
                </>
              )}
            </div>

            <div className={style.AddProductComponenet_formContainer}>
              <div className={style.AddProductComponenet_inner_FormContainer}>
                <form>
                  <div
                    className={`${style.fromInput_fullWidth_Box} ${style.inputBox}`}
                  >
                    <label>Product/Service Name</label>
                    <input
                      type="text"
                      placeholder="Enter Your Product Name"
                      className={style.input_bootstrap_form_control_style}
                    />
                  </div>
                  <div
                    className={`${style.fromInput_twoColoumBox} ${style.inputBox}`}
                  >
                    <div className={style.form_Column_first}>
                      <label>Price</label>
                      <input
                        type="text"
                        placeholder="Enter Your Product Price"
                        className={style.input_bootstrap_form_control_style}
                      />
                    </div>
                    <div className={style.form_Column_first}>
                      <label>Unit</label>
                      <input
                        type="text"
                        placeholder="Enter Your Product Price"
                        className={style.input_bootstrap_form_control_style}
                      />
                    </div>
                  </div>

                  <div
                    className={`${style.fromInput_fullWidth_Box} ${style.inputBox}`}
                  >
                    <label>Product/Service Description</label>
                    <textarea
                      rows="6"
                      cols="70"
                      className={`${style.input_bootstrap_form_control_style}`}
                    />
                  </div>

                  <div className={style.product_basic_btnBox}>
                    <button>Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div>Next</div>
        </div>
        {/* ------------End------------- */}
      </div>
    </>
  );
}
