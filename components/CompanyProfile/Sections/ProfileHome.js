import React from "react";
import style from "../css/ProfileHome.module.css";
import ProfileAboutSection from "./ProfileAboutSection";
import ProfileProductSection from "./ProfileProductSection";
import ContactUsSection from "./ContactUsSection";

export default function ProfileHome() {
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
