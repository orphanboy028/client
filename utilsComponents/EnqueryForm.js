import React, { useContext } from "react";
import style from "./css/EnqueryForm.module.css";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { AppUtilsContext } from "../ContaxtApi/AppUtilsContaxApi";
import CategoriesModel from "./CategoriesModel";

export default function EnqueryForm() {
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
  return (
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
          <form>
            <div className={style.two_Coloumn_form_Field}>
              <div className={style.Input_LableBox}>I want quotes for</div>
              <div className={style.Input_filedBox}>
                <input
                  type="text"
                  id="enquiry"
                  name="enquiry"
                  aria-describedby="enquiryHelp"
                  placeholder="Enter your Enquiry"
                  {...register("enquiry", {
                    required: "Enquiry  is Required",
                  })}
                />
              </div>
            </div>
            <div className={style.two_Coloumn_form_Field}>
              <div className={style.Input_LableBox}>
                select caregories Related To product
              </div>
              <div className={style.Input_filedBox}>
                <div className={style.selectedItem_InputBox}>
                  <input
                    value={selectedItem}
                    disabled
                    placeholder="select categories"
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faPencil}
                    size="lg"
                    onClick={handleModelShow}
                    style={{ cursor: "pointer", marginRight: "10px" }}
                  />
                </div>
              </div>
            </div>

            <div className={style.two_Coloumn_form_Field}>
              <div className={style.Input_LableBox}>
                Briefly describe your requirement
              </div>
              <div className={style.textarea_filedBox}>
                <textarea
                  placeholder="Describ Your Requirement"
                  style={{ width: "100%", rows: "4" }}
                />
              </div>
            </div>
            <div>Send Enquiry</div>
            <div>
              <CategoriesModel />
            </div>
          </form>
        </div>
        {/* Enquery form End */}
      </div>
    </div>
  );
}
