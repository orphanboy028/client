import React, { useContext, useState } from "react";
import style from "../css/ProfileHome.module.css";
import ProfileAboutSection from "./ProfileAboutSection";
import ProfileProductSection from "./ProfileProductSection";
import ContactUsSection from "./ContactUsSection";
import { BusinessContext } from "../../../ContaxtApi/BusinessContaxApi";

export default function ProfileHome() {
  const { businessProfile, profileProduct, businessCompleteDetails } =
    useContext(BusinessContext);
  return (
    <>
      <div>
        {/* About Us section start */}
        <div>
          <ProfileAboutSection />
        </div>
        {/* About Us section start */}
        <div>
          <ProfileProductSection />
        </div>

        <div className={style.ProfileHome_contact_us}>
          <div className={style.ProfileHome_contactUs_heding}>
            <h3>Contact Us for More Details</h3>
          </div>
          <ContactUsSection />
        </div>
      </div>
    </>
  );
}
