import React from "react";
import styles from "../css/OTP.module.css";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { submitOTP } from "../../../../Actions/UserAuth/userAuth";
import Router from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function OTPComponent() {
  const router = useRouter();
  const { urltoken } = router.query;
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
      const jsonData = JSON.stringify(formdata);
      const result = await submitOTP(formdata, urltoken);
      const { data } = result;
      console.log(data);
      if (data.error) {
        toast.error(data.message, {
          position: toast.POSITION.TOP_LEFT,
        });
      } else {
        toast.success(data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.SingUpComponent_main_container}>
      <ToastContainer position="top-right" autoClose={5000} />
      <div className={styles.OTPComponent_Form_container}>
        <div className={styles.SingUpComponent_Form_Title}>
          <h2>---</h2>
        </div>
        <div className={styles.form_Box}>
          <form
            className={styles.SingUp_form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <div className={styles.OTPComponent_Form_Title}>
                <div className={styles.form_lableBox}>
                  <label>Enter Your OTP *</label>
                </div>
                <div className={styles.form_inputBox}>
                  <input
                    type="text"
                    placeholder="Enter Your OTP"
                    name="otp"
                    id="otp"
                    aria-describedby="otpHelp"
                    {...register("otp", {
                      required: "OTP is Required",
                      pattern: {
                        value: /^\d+$/,
                        message: "please Enter only digits",
                      },
                      minLength: {
                        value: 6,
                        message: "6 Digits OTP Required",
                      },
                      maxLength: {
                        value: 6,
                        message: "6 Digits OTP Required",
                      },
                    })}
                  />
                </div>
                <div className={styles.input_ErrorBox}>
                  <small id="otpHelp" className={styles.input_Error}>
                    {errors.otp && <p>{errors.otp.message}</p>}
                  </small>
                </div>
              </div>
              <div
                className={
                  isValid ? styles.form_btn_full_width_Box : styles.disabledbtn
                }
              >
                <button className={styles.btnStyle} disabled={!isValid}>
                  Submit Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
