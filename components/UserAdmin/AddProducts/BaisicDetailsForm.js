import React, { useContext, useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import style from "../css/AddProduct.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../../../ContaxtApi/ProductContextApi";
import Form from "react-bootstrap/Form";
import Image from "next/image";
import ListPostedProduct from "./ListPostedProduct";
import { ProductFormContext } from "../../../ContaxtApi/ProductFormContextApi";
import ProductFormConponent from "./ProductFormConponent";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BaisicDetailsForm() {
  const fileInputRef = useRef(null);
  const { token, loginUser } = useContext(UserContext);
  const { handleImageChange, prductIMagePreview, CreateBasicProduct } =
    useContext(ProductContext);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });

  const handleChangeImage = () => {
    fileInputRef.current.click();
  };

  const onSubmit = async (formdata) => {
    try {
      console.log(formdata);
      const result = await CreateBasicProduct(formdata, token);
      console.log(result);
      if ((result.data.status = "Success")) {
        toast.success("product add succes fully", {
          autoClose: 1000,
          onClose: () => {
            router.push(
              `/user-admin/edit-product/${result.data.saveProduct.slug}`
            );
          },
        });
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className={style.AddProductComponenet_basic_details_innderContainer}>
        <div className={style.AddProductComponenet_imageContainer}>
          <div className={style.AddProductComponenet_imageBox}>
            <input
              type="file"
              name="images"
              id="FileInput"
              onChange={handleImageChange}
              ref={fileInputRef}
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
                    alt="Product-feature-image"
                    // className={style.product_featureImageStyle}
                    fill
                  />
                </div>
              </>
            )}
          </div>
          {prductIMagePreview && (
            <>
              <div className={` ${style.chnage_btnBox}`}>
                <button onClick={handleChangeImage}> Change image</button>
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
                  className={`${style.input_bootstrap_form_control_style}`}
                  {...register("description", {
                    required: "sort description is Required",
                  })}
                />
              </div>

              <div className={style.product_basic_btnBox}>
                <button>Save </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
