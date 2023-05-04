import React, { useContext, useState, useRef } from "react";
import style from "../css/MainCategories.module.css";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { SuperAdminCategoriesContext } from "../../../ContaxtApi/superAdminContext/CategoriesContaxApi";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MainCategoriesForm() {
  const {
    categotiesImageFile,
    setcategotiesImageFile,
    imagePreview,
    setimagePreview,
    handleImageChange,
    createCategoryAction,
  } = useContext(SuperAdminCategoriesContext);
  const fileInputRef = useRef(null);
  const { token, loginUser } = useContext(UserContext);
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
      const result = await createCategoryAction(token, formdata);
      console.log(result);
      if ((result.data.status = "Success")) {
        toast.success("Categories add succes fully");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <div className={style.Categories_form_Container}>
        <ToastContainer />
        <div className={style.Categories_uploded_Image}>
          {!imagePreview && (
            <>
              <Image src={""} fill />
            </>
          )}

          {imagePreview && (
            <>
              <Image src={imagePreview} fill alt="Categories-mage" />
            </>
          )}
        </div>

        <div className={style.Image_BtnActionBox}>
          <div className={style.Categories_single_Form_Container}>
            <div className={style.fileInput_lableBox}>
              <label>Upload Categories Image</label>
            </div>
            <div className={style.file_Input_Box}>
              <input
                type="file"
                onChange={handleImageChange}
                ref={fileInputRef}
              />
            </div>
          </div>

          <div className={style.Categories_single_Form_Container}>
            <div className={style.file_Input_Box}>
              <button onClick={handleChangeImage}>Change Image</button>
            </div>
          </div>
        </div>

        <div className={style.Categories_inner_form_Container}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.Categories_Multi_Form_Container}>
              <div className={style.categories_InputFiled}>
                <div className={style.categories_lableBox}>
                  <label>Categories Name</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="categoryName"
                    placeholder="Enter Categories Name"
                    {...register("categoryName", {
                      required: "Product Name is Required",
                    })}
                  />
                </div>
                <div>error</div>
              </div>
              <div className={style.categories_InputFiled}>
                <div className={style.categories_lableBox}>
                  <label>icon</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="categoryIcon"
                    {...register("categoryIcon", {
                      required: "past fontawosam icon",
                    })}
                  />
                </div>
                <div>error</div>
              </div>
              <div className={style.categories_multiForm_btnBox}>
                <button> Add Categories</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
