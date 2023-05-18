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
import { EnquiryContext } from "../../../ContaxtApi/EnquiryContaxApi";
import LocationFillter from "../../../utilsComponents/LocationFillter";
import { ExternalApiContaxt } from "../../../ContaxtApi/ExternalConaxt/ExternalContaxtApi";

import Spinner from "react-bootstrap/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditBusinessDetails({ Userbusiness }) {
  const { setUserbusiness, handelChnage, updateBusiness } =
    useContext(BusinessContext);
  const { formloading, setformloading, handleModelShow } =
    useContext(AppUtilsContext);
  const { handleShowLocation } = useContext(EnquiryContext);
  const { token, loginUser } = useContext(UserContext);
  const {
    selectedCity,
    stateSlected,
    selectDistric,
    setSelectedCity,
    setselectDistric,
    setstateSlected,
  } = useContext(ExternalApiContaxt);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    // formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });

  function handleLocationSelect(city, district, state) {
    // Update the value of the input field
    setValue("city", city);
    setValue("district", district);
    setValue("state", state);

    // Trigger the onChange event on City
    const inputCityField = document.querySelector('input[name="city"]');
    const Cityevent = new Event("input", { bubbles: true });
    inputCityField.dispatchEvent(Cityevent);

    // Trigger the onChange event on district
    const inputdistrictField = document.querySelector('input[name="district"]');
    const districtevent = new Event("input", { bubbles: true });
    inputdistrictField.dispatchEvent(districtevent);

    // Trigger the onChange event on state
    const inputStateField = document.querySelector('input[name="state"]');
    const Stateevent = new Event("input", { bubbles: true });
    inputStateField.dispatchEvent(Stateevent);
  }

  const handelSelect = (e) => {
    console.log(e.target.textContent);
    const city = e.target.textContent.split(",")[0].trim();
    const district = e.target.textContent.split(",")[1].trim();
    const state = e.target.textContent.split(",")[2].trim();
    setSelectedCity(city);
    setselectDistric(district);
    setstateSlected(state);
    handleLocationSelect(city, district, state);
  };

  //
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
      <LocationFillter handelSelect={handelSelect} />
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
        <div
          className={styles.Select_location_bar}
          onClick={handleShowLocation}
        >
          <div>Select location</div>
        </div>

        <div className={styles.BusinessDetails_detailsBox}>
          <div className={styles.BusinessDetails_NameFiled}>
            <h4>State</h4>
          </div>
          <div>
            <input
              className={styles.input_bootstrap_form_control_style}
              name="state"
              type="text"
              placeholder="Enter Your GST Number"
              onChange={handelChnage}
              defaultValue={Userbusiness?.state}
              {...register("state", {
                required: "valaid state is Required",
              })}
            />
          </div>
        </div>

        <div className={styles.BusinessDetails_detailsBox}>
          <div className={styles.BusinessDetails_NameFiled}>
            <h4>City</h4>
          </div>
          <div>
            <input
              className={styles.input_bootstrap_form_control_style}
              name="city"
              type="text"
              placeholder="Enter Your GST Number"
              onChange={handelChnage}
              defaultValue={Userbusiness?.city}
              {...register("city", {
                required: "valaid Email is Required",
              })}
              // ref={register({ required: true })}
            />
          </div>
        </div>

        <div className={styles.BusinessDetails_detailsBox}>
          <div className={styles.BusinessDetails_NameFiled}>
            <h4>District</h4>
          </div>
          <div>
            <input
              className={styles.input_bootstrap_form_control_style}
              name="district"
              type="text"
              placeholder="Select Your district"
              onChange={handelChnage}
              defaultValue={Userbusiness?.district}
              {...register("district", {
                required: "valaid district is Required",
              })}
            />
          </div>
        </div>

        <div className={styles.BusinessDetails_detailsBox}>
          <div className={styles.BusinessDetails_NameFiled}>
            <h4>State</h4>
          </div>
          <div>
            <input
              className={styles.input_bootstrap_form_control_style}
              name="state"
              type="text"
              placeholder="Enter Your GST Number"
              onChange={handelChnage}
              defaultValue={Userbusiness?.state}
              {...register("state", {
                required: "valaid state is Required",
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
