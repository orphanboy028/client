import React, { useContext, useState } from "react";
import style from "../css/ProfileAbout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshakeSimple,
  faUsers,
  faScaleBalanced,
  faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";
import { BusinessContext } from "../../../ContaxtApi/BusinessContaxApi";

export default function ProfileAboutSection() {
  const { businessProfile, profileProduct, businessCompleteDetails } =
    useContext(BusinessContext);
  return (
    <>
      <div className={style.ProfileAboutSection_main_Container}>
        <div className={style.ProfileAboutSection_Heading}>
          <h2>About Us</h2>
        </div>
        <div className={style.about_Info_Container}>
          <div className={style.about_InfoBox}>
            <div className={style.info_IconBox}>
              <FontAwesomeIcon
                icon={faHandshakeSimple}
                size="2xl"
                style={{ color: "#2874f0" }}
              />
            </div>
            <div className={style.about_info_content}>
              <div className={style.about_info_static_content}>
                Nature of Business
              </div>
              <div className={style.about_info_dynimic_content}>
                {businessCompleteDetails?.NatureofBusiness}
              </div>
            </div>
          </div>

          <div className={style.about_InfoBox}>
            <div className={style.info_IconBox}>
              <FontAwesomeIcon
                icon={faUsers}
                size="2xl"
                style={{ color: "#2874f0" }}
              />
            </div>
            <div className={style.about_info_content}>
              <div className={style.about_info_static_content}>
                Total Number of Employees
              </div>
              <div className={style.about_info_dynimic_content}>
                Upto {businessCompleteDetails?.TotalNumberofEmployees} People
              </div>
            </div>
          </div>

          <div className={style.about_InfoBox}>
            <div className={style.info_IconBox}>
              <FontAwesomeIcon
                icon={faScaleBalanced}
                size="2xl"
                style={{ color: "#2874f0" }}
              />
            </div>
            <div className={style.about_info_content}>
              <div className={style.about_info_static_content}>
                Legal Status of Firm
              </div>
              <div className={style.about_info_dynimic_content}>
                Individual - {businessCompleteDetails?.LegalStatusofFirm}
              </div>
            </div>
          </div>

          <div className={style.about_InfoBox}>
            <div className={style.info_IconBox}>
              <FontAwesomeIcon
                icon={faFileInvoice}
                size="2xl"
                style={{ color: "#2874f0" }}
              />
            </div>
            <div className={style.about_info_content}>
              <div className={style.about_info_static_content}>GST Number</div>
              <div className={style.about_info_dynimic_content}>
                {businessCompleteDetails?.GstNumber}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
