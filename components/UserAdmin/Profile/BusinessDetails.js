import React, { useContext, useState } from "react";
import styles from "../css/Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { AppUtilsContext } from "../../../ContaxtApi/AppUtilsContaxApi";

export default function BusinessDetails({ Userbusiness }) {
  const { handelTab } = useContext(AppUtilsContext);
  return (
    <>
      <div className={styles.BusinessDetails_container}>
        <div className={styles.BusinesDetail_editBox}>
          <FontAwesomeIcon
            icon={faPencil}
            size="2x"
            style={{ cursor: "pointer", color: "#6B74F5" }}
            onClick={() => handelTab("EditBusinessDeails")}
          />
        </div>
        <div className={styles.BusinessDetails_detailsBox}>
          <div className={styles.BusinessDetails_NameFiled}>
            <h4>GST </h4>
          </div>
          <div>
            {" "}
            <h5>{Userbusiness?.GstNumber}</h5>
          </div>
        </div>
        <div className={styles.BusinessDetails_detailsBox}>
          <div className={styles.BusinessDetails_NameFiled}>
            <h4>PAN </h4>
          </div>
          <div>
            {" "}
            <h5>{Userbusiness?.PanNumber}</h5>
          </div>
        </div>

        <div className={styles.BusinessDetails_detailsBox}>
          <div className={styles.BusinessDetails_NameFiled}>
            <h4>Address </h4>
          </div>
          <div>
            {" "}
            <p>{Userbusiness?.address}</p>
          </div>
        </div>
      </div>
    </>
  );
}
