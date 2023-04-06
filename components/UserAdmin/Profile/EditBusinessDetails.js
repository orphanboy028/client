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
import Spinner from "react-bootstrap/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditBusinessDetails({ Userbusiness }) {
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.BusinessDetails_detailsBox}>
          <div className={styles.BusinessDetails_NameFiled}>
            <h4>GST</h4>
          </div>
          <div>
            <input
              className={styles.input_bootstrap_form_control_style}
              name="GstNumber"
              type="text"
              placeholder="Enter Your GST Number"
              onChange={handelChnage}
              defaultValue={Userbusiness?.GstNumber}
              {...register("GstNumber", {
                required: "valaid Email is Required",
              })}
            />
          </div>
        </div>
        <div className={styles.BusinessDetails_detailsBox}>
          <div className={styles.BusinessDetails_NameFiled}>
            <h4>PAN</h4>
          </div>
          <div>
            <input
              className={styles.input_bootstrap_form_control_style}
              name="PanNumber"
              type="text"
              placeholder="Enter Your GST Number"
              onChange={handelChnage}
              defaultValue={Userbusiness?.PanNumber}
              {...register("PanNumber", {
                required: "valaid Email is Required",
              })}
            />
          </div>
        </div>

        <div className={styles.BusinessDetails_detailsBox}>
          <div className={styles.BusinessDetails_NameFiled}>
            {" "}
            <h4> Address</h4>
          </div>
          <div>
            <textarea
              className={styles.input_bootstrap_form_control_style}
              name="address"
              type="text"
              placeholder="Enter Your Address"
              rows="6"
              cols="70"
              onChange={handelChnage}
              defaultValue={Userbusiness?.address}
              {...register("address", {
                required: "valaid Email is Required",
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
              <button variant="primary" size="lg">
                Save
              </button>{" "}
            </>
          )}
        </div>
      </form>
    </div>
  );
}
