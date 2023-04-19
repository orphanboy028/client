import React from "react";
import style from "../css/ProfileHome.module.css";
import ProfileAboutSection from "./ProfileAboutSection";
import ProfileProductSection from "./ProfileProductSection";

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
      </div>
    </>
  );
}
