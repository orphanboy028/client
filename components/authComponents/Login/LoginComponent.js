import React from "react";
import styles from "../SingUp/css/SingUp.module.css";
import { useForm } from "react-hook-form";
export default function LoginComponent() {
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

  const onSubmit = (data) => {};
  return (
    <>
      <div className={styles.SingUpComponent_main_container}>
        <div className={styles.LoginComponent_Form_container}>
          <div className={styles.SingUpComponent_Form_Title}>
            <h2>Login Account</h2>
          </div>
          <div className={styles.form_Box}>
            <form
              className={styles.SingUp_form}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
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

                <div
                  className={
                    isValid
                      ? styles.form_btn_full_width_Box
                      : styles.disabledbtn
                  }
                >
                  <button disabled={!isValid}>SEND OTP</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
