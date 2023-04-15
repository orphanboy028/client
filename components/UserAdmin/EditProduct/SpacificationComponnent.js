import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ProductContext } from "../../../ContaxtApi/ProductContextApi";
import style from "../css/Spacification.module.css";
import formStyle from "../css/Forms.module.css";
import { formFields1, formField2 } from "../../FormData/form1";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import SearchCategories from "./SearchCategories";
import { AppUtilsContext } from "../../../ContaxtApi/AppUtilsContaxApi";

export default function SpacificationComponnent() {
  const router = useRouter();
  const { slug } = router.query;
  const { token, loginUser } = useContext(UserContext);
  const { formSeleted } = useContext(AppUtilsContext);
  const [testForm, settestForm] = useState(formField2);
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
    if (formSeleted.length > 0) {
      return formSeleted.map((fileds, i) => {
        if (fileds.type === "radio") {
          return (
            <div className={`${formStyle.filed_container}`}>
              <div className={formStyle.labe_Box}>
                <label className={`${formStyle.main_lable}`}>
                  {fileds.label}
                </label>
              </div>

              <div className={formStyle.radio_valueBox}>
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
            </div>
          );
        }
        return (
          <>
            <div className={`${formStyle.filed_container}`}>
              <label className={`${formStyle.main_lable}`}>
                {fileds.label}
              </label>
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
    } else {
      return <div>Select Categories first.</div>;
    }
  };

  return (
    <>
      <div className={style.Spacification_Container}>
        <div className={style.spacification_Box}>
          <h2>Product Specification</h2>
        </div>

        <div className={style.search_container}>
          <SearchCategories />
        </div>
        <div className={style.render_FormContainer}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>{renderForm()}</div>

            <div>
              <button>save</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
