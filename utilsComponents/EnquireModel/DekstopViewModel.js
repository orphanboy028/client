import React, { useContext } from "react";
import style from "../css/EnquireModel.module.css";
import CategoriesFillter from "../CategoriesFilliter";
import { EnquiryContext } from "../../ContaxtApi/EnquiryContaxApi";
import Badge from "react-bootstrap/Badge";
import { useForm } from "react-hook-form";
import { UserContext } from "../../ContaxtApi/UserContaxApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function DekstopViewModel() {
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
  const { selectedCategories, sendEnqueries } = useContext(EnquiryContext);

  // Create Enquires
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
      <ToastContainer />
      <div className={style.DekstopViewModel_container}>
        <div className={style.categories_box}>
          <div className={style.Badge_Box}>
            <Badge bg="secondary" className={style.Bootstrap_Badge}>
              {selectedCategories ? selectedCategories : "Select categorie"}{" "}
            </Badge>
          </div>
          <CategoriesFillter />
        </div>
        <div className={style.form_container}>
          <div className={style.form_inner_container}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={style.input_filed_Box}>
                <div className={style.form_lable_Box}>I want quotes for</div>
                <div className={style.form_input_Box}>
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
              <div className={style.input_filed_Box}>
                <div className={style.form_lable_Box}>
                  Briefly describe your requirement
                </div>
                <div className={style.form_input_Box}>
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
                    {errors.description && <p>{errors.description.message}</p>}
                  </small>
                </div>
              </div>

              <div className={style.form_btnBox}>
                <button>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
