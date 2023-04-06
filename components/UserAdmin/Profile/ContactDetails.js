import React, { useContext, useState } from "react";
import styles from "../css/Profile.module.css";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { AppUtilsContext } from "../../../ContaxtApi/AppUtilsContaxApi";

export default function ContactDetails({ Userbusiness }) {
  const { handelTab } = useContext(AppUtilsContext);
  const { loginUser } = useContext(UserContext);
  return (
    <div className={styles.BusinessDetails_container}>
      <div className={styles.BusinesDetail_editBox}>
        <FontAwesomeIcon
          icon={faPencil}
          size="2x"
          style={{ cursor: "pointer", color: "#6B74F5" }}
          onClick={() => handelTab("EditContactDetails")}
        />
      </div>
      <div className={styles.BusinessDetails_detailsBox}>
        <div className={styles.BusinessDetails_NameFiled}>
          <h4>Mobile NUmber</h4>
        </div>
        <div>
          {" "}
          <h5>{loginUser.mobileNumber}</h5>
        </div>
      </div>
      <div className={styles.BusinessDetails_detailsBox}>
        <div className={styles.BusinessDetails_NameFiled}>
          <h4>E-mail </h4>
        </div>
        <div>
          {" "}
          <h5>{loginUser.email}</h5>
        </div>
      </div>

      <div className={styles.BusinessDetails_detailsBox}>
        <div className={styles.BusinessDetails_NameFiled}>
          <h4>website </h4>
        </div>
        <div>
          {" "}
          <p>{Userbusiness?.website}</p>
        </div>
      </div>
    </div>
  );
}
