import React, { useContext, useState } from "react";
import style from "../css/EnquireModel.module.css";
import CategoriesFilliter from "../CategoriesFilliter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { AppUtilsContext } from "../../ContaxtApi/AppUtilsContaxApi";
import { EnquiryContext } from "../../ContaxtApi/EnquiryContaxApi";
import Badge from "react-bootstrap/Badge";
import { useForm } from "react-hook-form";
import { UserContext } from "../../ContaxtApi/UserContaxApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MobileViewModel() {
  const {
    Enquiremobiletab,
    setEnquiremobiletab,
    handelMobileNextBtn,
    handelMobileBackBtn,
  } = useContext(AppUtilsContext);

  const { selectedCategories, sendEnqueries } = useContext(EnquiryContext);
  const { token, loginUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });

  const onSubmit = async (formdata) => {
    // Seletedlefcategory
    formdata.Seletedlefcategory = selectedCategories;
    console.log(formdata);
    try {
      console.log(formdata);
      const result = await sendEnqueries(formdata, token);
      console.log(result);
      if ((result.data.status = "Success")) {
        toast.success("Enquiry sent Successfully");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <div className={style.MobileViewModel_container}>
        <div className={style.Inner_container}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {Enquiremobiletab === 0 && (
              <>
                <div className={style.Mobile_form_container}>
                  <div className={style.Mobile_input_lable_Box}>
                    <div className={style.Moble_lableBox}>name</div>
                    <div className={style.Mobile_inputBox}>
                      <input
                        type="text"
                        id="enquiry"
                        name="enquiry"
                        aria-describedby="enquiryHelp"
                        placeholder="Enter your Enquiry"
                        {...register("enquiry", {
                          required: "Enquiry is Required",
                        })}
                      />
                    </div>
                    <div className={style.input_ErrorBox}>
                      <small id="NameHelp" className={""}>
                        {errors.enquiry && <p>{errors.enquiry.message}</p>}
                      </small>
                    </div>
                  </div>
                  <div className={style.Mobile_input_lable_Box}>
                    <div className={style.Moble_lableBox}>name</div>
                    <div className={style.Mobile_inputBox}>
                      <textarea
                        placeholder="Describ Your Requirement"
                        style={{ width: "100%", rows: "4" }}
                        name="description"
                        {...register("description", {
                          required: "descrepition is Required",
                        })}
                      />
                    </div>
                    <div className={style.input_ErrorBox}>
                      <small id="NameHelp" className={""}>
                        {errors.description && (
                          <p>{errors.description.message}</p>
                        )}
                      </small>
                    </div>
                  </div>
                  <div className={style.Mobile_btn_box}>
                    <div
                      className={style.btn_div}
                      onClick={handelMobileNextBtn}
                    >
                      Next
                    </div>
                  </div>
                </div>
              </>
            )}
            {Enquiremobiletab === 1 && (
              <>
                <div className={style.Mobile_categories_FillterBox}>
                  <div className={style.categories_back_btnBox}>
                    <div
                      className={style.back_IconBox}
                      onClick={handelMobileBackBtn}
                    >
                      <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                  </div>
                  <div className={style.Badge_Box}>
                    <Badge bg="secondary" className={style.Bootstrap_Badge}>
                      {selectedCategories}{" "}
                    </Badge>
                  </div>
                  <div>
                    <CategoriesFilliter />
                  </div>
                </div>
                <div className={style.Mobile_btn_box}>
                  <button>Send</button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
