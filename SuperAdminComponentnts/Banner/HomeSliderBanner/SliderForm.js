import React, { useContext } from "react";
import style from "../css/AdminHomeSlider.module.css";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import { BannerContext } from "../../../ContaxtApi/superAdminContext/BannerContextApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SliderForm() {
  const { token, loginUser } = useContext(UserContext);
  const { uploadHomePageSliderBannerAction } = useContext(BannerContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });

  const onSubmit = async (formdata) => {
    try {
      console.log(formdata);
      const result = await uploadHomePageSliderBannerAction(formdata, token);
      console.log(result);
      if ((result.data.status = "Success")) {
        toast.success("product add succes fully");
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <>
      <div className={style.SliderForm_container}>
        <ToastContainer />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.SliderForm_inputFileds_Box}>
            <div className={style.SliderForm_lableBox}>
              <label>Client Name</label>
            </div>
            <div className={style.SliderForm_inputBox}>
              <input
                type="text"
                name="clientName"
                aria-describedby="clientNameHelp"
                {...register("clientName", {
                  required: "client Name is Required",
                })}
              />
              <div>
                <small id="clientNameHelp">
                  {errors.clientName && <p>{errors.clientName.message}</p>}
                </small>
              </div>
            </div>
          </div>
          <div className={style.SliderForm_inputFileds_Box}>
            <div className={style.SliderForm_lableBox}>
              <label>Slider Desreption</label>
            </div>
            <div className={style.SliderForm_inputBox}>
              <textarea
                placeholder="Slider details"
                aria-describedby="bannderDetailsHelp"
                name="bannderDetails"
                {...register("bannderDetails", {
                  required: "sort description is Required",
                })}
              />
              <div>
                <small id="bannderDetailsHelp">
                  {errors.bannderDetails && (
                    <p>{errors.bannderDetails.message}</p>
                  )}
                </small>
              </div>
            </div>
          </div>
          <div className={style.SliderForm_btnBox}>
            <button>Upload </button>
          </div>
        </form>
      </div>
    </>
  );
}
