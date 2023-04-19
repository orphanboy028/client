import React, { useContext, useState } from "react";
import style from "../css/Company.module.css";
import Image from "next/image";
import companyLogo from "../../../public/Company-logo/user-64286c5d2ec85503a0ae4219-1680780743272.png";
import Tabs from "./Tabs";
import { AppUtilsContext } from "../../../ContaxtApi/AppUtilsContaxApi";
import BannerSetion from "./BannerSetion";
import ProfileHome from "./ProfileHome";
import ProfileAboutSection from "./ProfileAboutSection";
import ProfileProductSection from "./ProfileProductSection";
export default function CompanyProfile() {
  const { toggleState, setToggleState, toggleTab } =
    useContext(AppUtilsContext);

  const renderContainer = () => {
    if (toggleState === 1) {
      return (
        <>
          <ProfileHome />
        </>
      );
    } else if (toggleState === 2) {
      return (
        <>
          <ProfileAboutSection />
        </>
      );
    } else if (toggleState === 3) {
      return (
        <>
          <ProfileProductSection />
        </>
      );
    } else if (toggleState === 4) {
      return (
        <>
          <div>Contact us</div>
        </>
      );
    }
  };

  return (
    <>
      {/* Top part start */}
      <div className={style.CompanyProfile_main_container}>
        {/* Left part */}
        <div className={style.CompanyProfile_left_Part}>l</div>
        <div className={style.CompanyProfile_conent_part}>
          <div className={style.CompanyProfile_TopContainer}>
            <div className={style.CompanyProfile_companyLogoBox}>
              <Image src={companyLogo} width={50} alt="Company-logo" />
            </div>
            <div>
              <div className={style.CompanyProfile_companyNameBox}>
                <h1>Daksh Tooling System </h1>
              </div>
              <div className={style.top_Container_address}>
                <div>Near Labour chock</div>
                <div>Gurugram, Haryana</div>
                <div>GST 06BYSPR8154B1Z1</div>
                <div>Verified Supplier</div>
              </div>
            </div>
            <div className={style.CompanyProfile_top_container_send_EmailBox}>
              <div className={style.top_Container_BtnBox}>Send Email</div>
            </div>
          </div>
          {/* Top part End */}

          {/* Header Tab start */}
          <div>
            <Tabs />
          </div>
          {/* Header Tab End */}

          {/* Bannner part start */}
          <div>
            <BannerSetion />
          </div>
          {/* Bannner part End */}

          {/* Content section start */}
          <div>{renderContainer()}</div>
          {/* Content section End */}
        </div>
        {/* Right part */}
        <div className={style.CompanyProfile_RightPart}>r</div>
      </div>
    </>
  );
}
