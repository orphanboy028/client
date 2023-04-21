import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import style from "../../css/SendEnquiresComponent.module.css";
import banner from "../../../../public/banners-images/banner-1.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { EnquiryContext } from "../../../../ContaxtApi/EnquiryContaxApi";
import { UserContext } from "../../../../ContaxtApi/UserContaxApi";
import { formatDistanceStrict, format } from "date-fns";
import EnquiryNotAppliyed from "./EnquiryNotAppliyed";
import EnquieyAppliyed from "./EnquieyAppliyed";

export default function SendEnquiresComponent() {
  const { token, loginUser } = useContext(UserContext);
  const {
    requestEnquiryDetails,
    enquireyInfo,
    applyedUsers,
    isUserApplied,
    setIsUserApplied,
  } = useContext(EnquiryContext);
  // Destructure enquireyInfo
  const { enquiry, description, Seletedlefcategory, createdAt } = enquireyInfo;
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    requestEnquiryDetails(slug, token);
  }, [slug]);

  useEffect(() => {
    const userId = loginUser._id;
    const appliedUsers = applyedUsers.map((enquiry) => enquiry.user._id);
    const userHasApplied = appliedUsers.includes(userId);
    setIsUserApplied(userHasApplied);
  }, [applyedUsers, loginUser._id]);

  const getTimeDifference = () => {
    if (!createdAt) {
      return ""; // Return empty string if createdAt is not available yet
    }
    const diffInMinutes = Math.ceil((new Date() - new Date(createdAt)) / 60000);
    if (diffInMinutes <= 1) {
      return "just now";
    } else if (diffInMinutes <= 60) {
      return `about ${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
    } else if (diffInMinutes <= 1440) {
      return "today";
    } else if (diffInMinutes <= 2880) {
      return "yesterday";
    } else {
      return format(new Date(createdAt), "d-MMMM-yyyy");
    }
  };

  const timeDifference = getTimeDifference();

  return (
    <>
      <div className={style.SendEnquiresComponent_main_conatiner}>
        <div className={style.SendEnquiresComponent_banner_section}>
          <Image
            src={banner}
            width={400}
            alt="banner"
            className={style.SendEnquiresComponent_bannerStyle}
          />
        </div>

        <div className={style.SendEnquiresComponent_enquery_Form_Conatiner}>
          {isUserApplied ? (
            <>
              <EnquieyAppliyed />
            </>
          ) : (
            <>
              <EnquiryNotAppliyed />
            </>
          )}
        </div>
      </div>
    </>
  );
}
