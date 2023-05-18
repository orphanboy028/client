import React, { useState, useRef, useContext } from "react";
import styles from "../css/SingUp.module.css";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Router from "next/router";
import {
  singUpNewAccount,
  getCookies,
  otpAuth,
} from "../../../../Actions/UserAuth/userAuth";
import { AppUtilsContext } from "../../../../ContaxtApi/AppUtilsContaxApi";
import Spinner from "react-bootstrap/Spinner";
export default function SingUpComponent() {
  const { formloading, setformloading } = useContext(AppUtilsContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });

  // Triger on When user click on SingUp Btn
  const pass = watch("password");

  const onSubmit = async (formdata) => {
    try {
      setformloading(true);
      const jsonData = JSON.stringify(formdata);
      const result = await singUpNewAccount(formdata);
      const { data } = result;
      console.log(data);
      setformloading(false);
      otpAuth(data, () => {
        Router.push(`/otp-verification/${getCookies()}`);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className={styles.SingUpComponent_main_container}>
        <div className={styles.SingUpComponent_Form_container}>
          <div className={styles.SingUpComponent_Form_Title}>
            <h2>Create Account</h2>
          </div>
          <div className={styles.form_Box}>
            <form
              className={styles.SingUp_form}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <div className={styles.form_input_Filed_Box}>
                  <div className={styles.form_lableBox}>
                    <label>Enter Your Name *</label>
                  </div>
                  <div className={styles.form_inputBox}>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      name="name"
                      id="name"
                      aria-describedby="NameHelp"
                      {...register("name", {
                        required: "Name is Required",
                        minLength: {
                          value: 3,
                          message: "At leas 3 Cracters Required in Full Name",
                        },
                        maxLength: {
                          value: 20,
                          message:
                            "Less Then 20 careaters are allow in full name",
                        },
                      })}
                    />
                  </div>
                  <div className={styles.input_ErrorBox}>
                    <small id="NameHelp" className={styles.input_Error}>
                      {errors.name && <p>{errors.name.message}</p>}
                    </small>
                  </div>
                </div>
                <div className={styles.form_input_Filed_Box}>
                  <div className={styles.form_lableBox}>
                    <label>Mobile Number</label>
                  </div>
                  <div className={styles.form_inputBox}>
                    <input
                      type="text"
                      placeholder="Enter Your Mobile Number"
                      name="mobileNumber"
                      aria-describedby="MobileHelp"
                      id="mobileNumber"
                      {...register("mobileNumber", {
                        required: "Name is Required",
                        pattern: {
                          value: /^\d+$/,
                          message: "please Enter only digits",
                        },
                        minLength: {
                          value: 10,
                          message: "10 Digit Mobile Number Required",
                        },
                        maxLength: {
                          value: 10,
                          message: "10 Digit Mobile Number Required",
                        },
                      })}
                    />
                  </div>
                  <div className={styles.input_ErrorBox}>
                    <small id="MobileHelp" className={styles.input_Error}>
                      {errors.mobileNumber && (
                        <p>{errors.mobileNumber.message}</p>
                      )}
                    </small>
                  </div>
                </div>
                <div className={styles.form_input_Filed_Box}>
                  <div className={styles.form_lableBox}>
                    <label>Password</label>
                  </div>
                  <div className={styles.form_inputBox}>
                    <input
                      type="text"
                      placeholder="Paaword(8-20 characters)"
                      id="password"
                      name="password"
                      aria-describedby="passwordHelp"
                      {...register("password", {
                        required: true,
                        minLength: {
                          value: 8,
                          message: "At leas 8 Cracters Required in password",
                        },
                      })}
                    />
                  </div>
                  <div className={styles.input_ErrorBox}>
                    <small id="passwordHelp" className={styles.input_Error}>
                      {errors.password && <p>{errors.password.message}</p>}
                    </small>
                  </div>
                </div>

                <div className={styles.form_input_Filed_Box}>
                  <div className={styles.form_lableBox}>
                    <label>Confirm Password</label>
                  </div>
                  <div className={styles.form_inputBox}>
                    <input
                      type="text"
                      placeholder="confirm Your Password"
                      id="passwordConfirm"
                      name="passwordConfirm"
                      aria-describedby="passwordConfirmHelp"
                      {...register("passwordConfirm", {
                        required: "plase Re-Enter your same password",
                        validate: (value) => {
                          return (
                            value === pass ||
                            "Your Confiram Password didn't match with password"
                          );
                        },
                      })}
                    />
                  </div>
                  <div className={styles.input_ErrorBox}>
                    <small
                      id="passwordConfirmHelp"
                      className={styles.input_Error}
                    >
                      {errors.passwordConfirm && (
                        <p>{errors.passwordConfirm.message}</p>
                      )}
                    </small>
                  </div>
                </div>

                <div className={styles.form_input_Filed_Box}>
                  <div className={styles.form_lableBox}>
                    <label>Email</label>
                  </div>
                  <div className={styles.form_inputBox}>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter your Email"
                      {...register("email", {
                        required: "valaid Email is Required",
                      })}
                    />
                  </div>
                  <div className={styles.input_ErrorBox}>
                    <small id="emailHelp" className={styles.input_Error}>
                      {errors.email && <p>{errors.email.message}</p>}
                    </small>
                  </div>
                </div>

                <div className={styles.form_checkBox_Filed_Box}>
                  <div className={styles.form_CheckBox_Box}>
                    <input
                      type={"checkbox"}
                      aria-describedby="checkboxHelp"
                      {...register("termsAndConditions", { required: true })}
                      checked={watch("termsAndConditions") || false}
                    />
                  </div>
                  <div className={styles.form_checkBox_text}>
                    {!errors.termsAndConditions && (
                      <p>
                        I agree to the User Agreement and the{" "}
                        <span>
                          <Link
                            href="/privacypolicy"
                            style={{ textDecoration: "none" }}
                          >
                            {" "}
                            Privacy policy{" "}
                          </Link>
                        </span>
                      </p>
                    )}
                  </div>
                  <div className={styles.input_ErrorBox}>
                    <small id="checkboxHelp" className={styles.input_Error}>
                      {errors.termsAndConditions && (
                        <p>You must agree to the terms and conditions</p>
                      )}
                    </small>
                  </div>
                </div>

                <div
                  className={
                    isValid
                      ? styles.form_btn_full_width_Box
                      : styles.disabledbtn
                  }
                >
                  {formloading ? (
                    <button className={styles.btnStyle} disabled={true}>
                      <Spinner animation="border" variant="light" />
                    </button>
                  ) : (
                    <button className={styles.btnStyle} disabled={!isValid}>
                      SEND OTP
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
          <div className={styles.suggest_info}>
            <p>
              {" "}
              If you have Already account{" "}
              <Link
                href={"/login"}
                style={{ color: "blueviolet", fontWeight: "500" }}
              >
                Login Now{" "}
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
