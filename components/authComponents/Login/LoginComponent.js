import React, { useContext } from "react";
import { useRouter } from "next/router";
import styles from "../SingUp/css/SingUp.module.css";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginAccount, authenticate } from "../../../Actions/UserAuth/userAuth";
import { AppUtilsContext } from "../../../ContaxtApi/AppUtilsContaxApi";
import Spinner from "react-bootstrap/Spinner";
export default function LoginComponent() {
  const { formloading, setformloading } = useContext(AppUtilsContext);
  const router = useRouter();
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
      const result = await loginAccount(formdata);
      if (result.data.status === "Fails") {
        console.log(result.data.message);
        toast.error(result.data.message);
      }

      const { data } = result;
      console.log(data);
      authenticate(data, () => {
        if (data.user.role === "user") {
          toast.success("Login sucessfully");
          router.push("/user-admin");
          setformloading(false);
        } else if (data.user.role === "admin") {
          // Router.push("/super-admin");
        }
      });
    } catch (error) {
      toast.error("mobile error");
      console.log(error.response);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className={styles.SingUpComponent_main_container}>
        <div className={styles.LoginComponent_Form_container}>
          <div className={styles.SingUpComponent_Form_Title}>
            <h2>Login Account</h2>
          </div>
          <div className={styles.Loginform_Box}>
            <form
              className={styles.SingUp_form}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <div className={styles.Loginform_input_Filed_Box}>
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
                  <div className={styles.Loginform_inputBox}>
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
                  {formloading ? (
                    <button className={styles.btnStyle} disabled={true}>
                      <Spinner animation="border" variant="light" />
                    </button>
                  ) : (
                    <button className={styles.btnStyle} disabled={!isValid}>
                      LOGIN
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
          <div className={styles.suggest_info}>
            <p>
              {" "}
              If you don't have any account{" "}
              <Link
                href={"/sing-up"}
                style={{ color: "blueviolet", fontWeight: "500" }}
              >
                Register now{" "}
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
