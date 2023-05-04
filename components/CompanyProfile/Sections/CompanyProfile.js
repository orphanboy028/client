import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import style from "../css/Company.module.css";
import Image from "next/image";
import companyLogo from "../../../public/Company-logo/user-64286c5d2ec85503a0ae4219-1680780743272.png";
import Tabs from "./Tabs";
import { AppUtilsContext } from "../../../ContaxtApi/AppUtilsContaxApi";
import { BusinessContext } from "../../../ContaxtApi/BusinessContaxApi";

import BannerSetion from "./BannerSetion";
import ProfileHome from "./ProfileHome";
import ProfileAboutSection from "./ProfileAboutSection";
import ProfileProductSection from "./ProfileProductSection";
import TopHeader from "./TopHeader";
import ContactUsSection from "./ContactUsSection";

export default function CompanyProfile() {
  const router = useRouter();
  const { slug } = router.query;
  const { toggleState, setToggleState, toggleTab } =
    useContext(AppUtilsContext);
  const { businessCompleteDetails } = useContext(BusinessContext);

  // useEffect(() => {
  //   getBusinessDetailsBySlug(slug);
  // }, [slug]);

  console.log(businessCompleteDetails);

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
          <ContactUsSection />
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
          <div>
            <TopHeader />
          </div>

          <div>
            <Tabs />
          </div>

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
