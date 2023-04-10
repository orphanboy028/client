import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ProductContext } from "../../../ContaxtApi/ProductContextApi";
import style from "../css/Spacification.module.css";
import formStyle from "../css/Forms.module.css";
import { formFields1, formField2 } from "../../FormData/form1";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import SearchCategories from "./SearchCategories";

export default function SpacificationComponnent() {
  const router = useRouter();
  const { slug } = router.query;
  const { token, loginUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });
  const {
    handleImageChange,
    prductIMagePreview,
    CreateBasicProduct,
    usersingleProduct,
    updateSpacification,
  } = useContext(ProductContext);

  const onSubmit = async (formData) => {
    try {
      const result = await updateSpacification(formData, token, slug);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const renderForm = () => {
    return formField2.map((fileds, i) => {
      if (fileds.type === "radio") {
        return (
          <div className={`${formStyle.filed_container}`}>
            <label className={`${formStyle.main_lable}`}>{fileds.label}</label>
            {fileds.options.map((option) => {
              return (
                <>
                  <div className={formStyle.radioBox}>
                    <label>{option}</label>
                    <div className={formStyle.radio_inputs_box}>
                      <input
                        type="radio"
                        name={fileds.name}
                        value={option}
                        {...register(fileds.name, {
                          required: "valaid Email is Required",
                        })}
                      />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        );
      }
      return (
        <>
          <div className={`${formStyle.filed_container}`}>
            <label className={`${formStyle.main_lable}`}>{fileds.label}</label>
            <div className={formStyle.text_inputBox}>
              <input
                name={fileds.name}
                type={fileds.type}
                {...register(fileds.name, {
                  required: "valaid Email is Required",
                })}
              />
            </div>
          </div>
        </>
      );
    });
  };

  return (
    <>
      <div>
        <h1>spacification</h1>
        <div className={style.search_container}>
          <SearchCategories />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>{renderForm()}</div>

          <div>
            <button>save</button>
          </div>
        </form>
      </div>
    </>
  );
}
