import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import style from "../css/AddProduct.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../../../ContaxtApi/ProductContextApi";
import Form from "react-bootstrap/Form";
import Image from "next/image";
import { ProductFormContext } from "../../../ContaxtApi/ProductFormContextApi";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";

export default function BasicDeatilsComponent() {
  const { token, loginUser } = useContext(UserContext);
  const {
    handleImageChange,
    prductIMagePreview,
    CreateBasicProduct,
    usersingleProduct,
  } = useContext(ProductContext);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });

  const onSubmit = async () => {};

  return (
    <div className={style.AddProductComponenet_basic_details_innderContainer}>
      <div className={style.AddProductComponenet_imageContainer}>
        <div className={style.AddProductComponenet_imageBox}>
          <input type="file" id="FileInput" onChange={handleImageChange} />
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              className={`${style.fromInput_fullWidth_Box} ${style.inputBox}`}
            >
              <label>Product/Service Name</label>
              <input
                type="text"
                placeholder="Enter Your Product Name"
                name="name"
                defaultValue={usersingleProduct?.name}
                className={style.input_bootstrap_form_control_style}
                {...register("name", {
                  required: "Product Name is Required",
                })}
              />
            </div>
            <div
              className={`${style.fromInput_twoColoumBox} ${style.inputBox}`}
            >
              <div className={style.form_Column_first}>
                <label>Price</label>
                <input
                  type="text"
                  name="price"
                  placeholder="Enter Your Product Price"
                  defaultValue={usersingleProduct?.prics}
                  className={style.input_bootstrap_form_control_style}
                  {...register("price", {
                    required: "Price is Required",
                  })}
                />
              </div>
              <div className={style.form_Column_first}>
                <label>Unit</label>
                <input
                  type="text"
                  placeholder="Enter Your Product Price"
                  name="unit"
                  className={style.input_bootstrap_form_control_style}
                  {...register("unit", {
                    required: "Provide unit",
                  })}
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
                name="description"
                defaultValue={usersingleProduct?.description}
                className={`${style.input_bootstrap_form_control_style}`}
                {...register("description", {
                  required: "sort description is Required",
                })}
              />
            </div>

            <div className={style.product_basic_btnBox}>
              <button>Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
