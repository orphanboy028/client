import React, { useContext, useState } from "react";
import style from "../css/Company.module.css";
import Image from "next/image";
import companyLogo from "../../../public/Company-logo/user-64286c5d2ec85503a0ae4219-1680780743272.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleCheck,
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";
import { BusinessContext } from "../../../ContaxtApi/BusinessContaxApi";

export default function TopHeader() {
  const { businessCompleteDetails } = useContext(BusinessContext);

  return (
    <div className={style.CompanyProfile_TopContainer}>
      <div className={style.CompanyProfile_companyLogoBox}>
        <Image src={companyLogo} width={50} alt="Company-logo" />
      </div>
      <div>
        <div className={style.CompanyProfile_companyNameBox}>
          <h1>{businessCompleteDetails?.CompanyName}</h1>
        </div>
        <div className={style.top_Container_address}>
          <div className={style.topHeader_addres_box}>
            <div className={style.topHeader_iconBox}>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#fb2872" }}
                size="2x"
              />
            </div>
            <div className={style.topHeader_content_Box}>
              {" "}
              Near Labour chock, Gurugram, Haryana
            </div>
          </div>

          <div className={style.topHeader_addres_box}>
            <div className={style.topHeader_iconBox}>
              <FontAwesomeIcon
                icon={faCheckDouble}
                style={{ color: "#35ed4b" }}
                size="2x"
              />
            </div>
            <div className={style.topHeader_content_Box}>
              {" "}
              GST {businessCompleteDetails?.GstNumber}
            </div>
          </div>

          <div className={style.topHeader_addres_box}>
            <div className={style.topHeader_iconBox}>
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "#35ed4b" }}
                size="2x"
              />
            </div>
            <div className={style.topHeader_content_Box}>
              {" "}
              Verified Supplier
            </div>
          </div>
        </div>
      </div>
      <div className={style.CompanyProfile_top_container_send_EmailBox}>
        <div className={style.top_Container_BtnBox}>Send Email</div>
      </div>
    </div>
  );
}
