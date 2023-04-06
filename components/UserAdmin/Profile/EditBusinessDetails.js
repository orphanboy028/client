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

export default function EditBusinessDetails({ Userbusiness }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className={styles.BusinessDetails_container}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.BusinessDetails_detailsBox}>
          <div className={styles.BusinessDetails_NameFiled}>
            <h4>GST</h4>
          </div>
          <div>
            <Form.Control
              name="GstNumber"
              type="text"
              placeholder="Enter Your GST Number"
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
            <Form.Control type="text" placeholder="Enter Your PAN Number" />
          </div>
        </div>

        <div className={styles.BusinessDetails_detailsBox}>
          <div className={styles.BusinessDetails_NameFiled}>
            {" "}
            <h4> Address</h4>
          </div>
          <div>
            <Form.Control as="textarea" rows={3} />
          </div>
        </div>
        <div className={styles.EditBusinessDetails_butonBox}>
          {Userbusiness ? (
            <>
              <Button variant="primary" size="lg">
                Update
              </Button>{" "}
            </>
          ) : (
            <>
              <Button variant="primary" size="lg">
                Save
              </Button>{" "}
            </>
          )}
        </div>
      </Form>
    </div>
  );
}
