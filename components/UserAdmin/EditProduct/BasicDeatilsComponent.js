import React, { useContext, useEffect, useState, useRef } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BasicDeatilsComponent() {
  const fileInputRef = useRef(null);
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  const { token, loginUser } = useContext(UserContext);

  const {
    handleImageChange,
    prductIMagePreview,
    CreateBasicProduct,
    usersingleProduct,
    updateOnlyProductImageAction,
    updateBiasieDetailsActon,
  } = useContext(ProductContext);
  console.log(prductIMagePreview);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });

  const getImageSource = () => {
    if (prductIMagePreview) {
      return prductIMagePreview;
    } else {
      return `/product-feature-imges/${usersingleProduct?.images[0]?.url}`;
    }
  };

  const handleChangeImage = () => {
    fileInputRef.current.click();
  };
  const onSubmit = async (formDta) => {
    try {
      const result = await updateBiasieDetailsActon(formDta, token, slug);
      console.log(result);
      if (result.data.status === "Success") {
        toast.success("Update sucesfully");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const UpdateImageHandel = async () => {
    try {
      const result = await updateOnlyProductImageAction(token, slug);
      console.log(result);
      if (result.data.status === "Success") {
        toast.success("Image Update sucesfully");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const updateImagebtn = () => {
    if (prductIMagePreview === null) {
      return (
        <>
          <button
            style={{
              backgroundColor: "#eee",
              color: "black",
              border: "none",
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
            }}
            disabled
          >
            Update
          </button>
        </>
      );
    } else {
      return (
        <>
          <button onClick={UpdateImageHandel}>Update</button>
        </>
      );
    }
  };

  return (
    <div className={style.AddProductComponenet_basic_details_innderContainer}>
      <ToastContainer />
      <div className={style.AddProductComponenet_imageContainer}>
        <div className={style.AddProductComponenet_imageBox}>
          <input
            type="file"
            id="FileInput"
            onChange={handleImageChange}
            ref={fileInputRef}
          />

          <div className={style.product_Feature_ImageBox}>
            {usersingleProduct &&
              usersingleProduct.images &&
              usersingleProduct.images[0] && (
                <>
                  <Image
                    src={prductIMagePreview ?? getImageSource()}
                    alt="Product-feature-image"
                    // className={style.product_featureImageStyle}
                    fill
                  />
                </>
              )}
          </div>
        </div>

        <div className={` ${style.chnage_btnBox}`}>
          <button onClick={handleChangeImage}> Change</button>

          {updateImagebtn()}
        </div>
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
                  defaultValue={usersingleProduct?.price}
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
              <button>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
