import React, { useContext, useEffect, useRef } from "react";
import style from "./css/EnqueryForm.module.css";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { AppUtilsContext } from "../ContaxtApi/AppUtilsContaxApi";
import CategoriesModel from "./CategoriesModel";
import { UserContext } from "../ContaxtApi/UserContaxApi";
import { EnquiryContext } from "../ContaxtApi/EnquiryContaxApi";

export default function EnqueryForm() {
  const { token, loginUser } = useContext(UserContext);
  const { sendEnqueries } = useContext(EnquiryContext);
  const {
    showModel,
    setshowModel,
    handleModelClose,
    handleModelShow,
    selectedItem,
    setSelectedItem,
  } = useContext(AppUtilsContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });

  const inputValue = watch("Seletedlefcategory");

  // Create Enquires
  const onSubmit = async (formdata) => {
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
      <ToastContainer />
      <div className={style.EnqueryForm_container}>
        <div className={style.EnqueryForm_Main_container}>
          {/* Enquery Form Title start */}
          <div className={style.EnqueryForm_TitleBox}>
            <h4>Tell us what you need.</h4>
            <h5>Get the Best Deals and Exclusive Offers with TradeIndia</h5>
          </div>
          {/* Enquery Form Title End */}
          {/* Enquery form start */}
          <div className={style.EnqueryForm_part}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={style.two_Coloumn_form_Field}>
                <div className={style.Input_LableBox}>I want quotes for</div>

                <div className={style.Input_filedBox_outer}>
                  <div className={style.Input_filedBox}>
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
              </div>
              <div className={style.two_Coloumn_form_Field}>
                <div className={style.Input_LableBox}>
                  select caregories Related To product
                </div>
                <div className={style.Input_filedBox_outer}>
                  <div className={style.Input_filedBox}>
                    <div className={style.selectedItem_InputBox}>
                      <input
                        type="text"
                        defaultValue={selectedItem}
                        value={selectedItem}
                        placeholder="select categories"
                        name="Seletedlefcategory"
                        {...register("Seletedlefcategory", {
                          required: "categories name required",
                        })}
                        onBlur={(e) => setSelectedItem(e.target.value)}
                      />
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faPencil}
                        size="lg"
                        onClick={handleModelShow}
                        id="pencileIcon"
                        style={{ cursor: "pointer", marginRight: "10px" }}
                      />
                    </div>
                  </div>
                  <div className={style.input_ErrorBox}>
                    <small id="NameHelp" className={""}>
                      {errors.Seletedlefcategory && (
                        <p>{errors.Seletedlefcategory.message}</p>
                      )}
                    </small>
                  </div>
                </div>
              </div>

              <div className={style.two_Coloumn_form_Field}>
                <div className={style.Input_LableBox}>
                  Briefly describe your requirement
                </div>
                <div className={style.Input_filedBox_outer}>
                  <div className={style.textarea_filedBox}>
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
              </div>
              <div className={style.EnqueryForm_sendBtnBox}>
                <button className={style.EnqueryForm_sendEnquirybtn}>
                  Send Enquiry
                </button>
              </div>
              <div>
                <CategoriesModel />
              </div>
            </form>
          </div>
          {/* Enquery form End */}
        </div>
      </div>
    </>
  );
}
