import React, { useContext, useState } from "react";
import styles from "../css/Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { AppUtilsContext } from "../../../ContaxtApi/AppUtilsContaxApi";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { BusinessContext } from "../../../ContaxtApi/BusinessContaxApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "react-bootstrap/Spinner";

export default function EditContactDetails({ Userbusiness }) {
  const { setUserbusiness, handelChnage, updateBusiness } =
    useContext(BusinessContext);
  const { formloading, setformloading } = useContext(AppUtilsContext);
  const { token, loginUser } = useContext(UserContext);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });

  const onSubmit = async (formdata) => {
    try {
      setformloading(true);
      const jsonData = JSON.stringify(formdata);
      const result = await updateBusiness(formdata, token);
      console.log(result.data.status);
      if (result.data.status === "Success") {
        toast.success("Business website successfully updated");
        setformloading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.BusinessDetails_container}>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.BusinessDetails_detailsBox}>
          <div className={styles.BusinessDetails_NameFiled}>
            <h4>Mobile NUmber</h4>
          </div>
          <div>
            <Form.Control
              type="text"
              placeholder="Enter Your Mobile Number"
              value={loginUser.mobileNumber}
              disabled
            />
          </div>
        </div>
        <div className={styles.BusinessDetails_detailsBox}>
          <div className={styles.BusinessDetails_NameFiled}>
            <h4>E-mail </h4>
          </div>
          <div>
            <Form.Control
              type="text"
              placeholder="Enter Your E-mail"
              value={loginUser.email}
              disabled
            />
          </div>
        </div>

        <div className={styles.BusinessDetails_detailsBox}>
          <div className={styles.BusinessDetails_NameFiled}>
            <h4>website </h4>
          </div>
          <div>
            <input
              className={styles.input_bootstrap_form_control_style}
              type="text"
              name="website"
              placeholder="Enter Your website"
              onChange={handelChnage}
              defaultValue={Userbusiness?.website}
              {...register("website", {
                required: "webite name is  Required",
              })}
            />
          </div>
        </div>
        <div className={styles.EditBusinessDetails_butonBox}>
          {Userbusiness ? (
            <>
              <button
                variant="primary"
                size="lg"
                disabled={formloading ? true : false}
              >
                {formloading ? (
                  <Spinner animation="grow" variant="light" />
                ) : (
                  "Update"
                )}
              </button>{" "}
            </>
          ) : (
            <>
              <button type="submit" variant="primary" size="lg">
                Save
              </button>{" "}
            </>
          )}
        </div>
      </form>
    </div>
  );
}
