import React, { useContext, useEffect } from "react";
import style from "../css/SentEnquiriesDetailsComponent.module.css";
import SentEnquiriesDetailsTable from "./SentEnquiriesDetailsTable";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import { EnquiryContext } from "../../../ContaxtApi/EnquiryContaxApi";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { formatDistanceStrict, format } from "date-fns";
import Image from "next/image";
import companyLogo from "../../../public/Company-logo/user-64318e457993fb3620054341-1681574687021.png";

export default function SentEnquiresDetailsComponent() {
  const router = useRouter();
  const { enquirySlug } = router.query;
  const { token, loginUser } = useContext(UserContext);
  const {
    SuperAdminrequestEnquiryDetails,
    enquieDetails,
    ApplyedUserDetails,
    enquiedCreatedBy,
  } = useContext(EnquiryContext);

  const { createdAt } = enquieDetails;

  useEffect(() => {
    SuperAdminrequestEnquiryDetails(enquirySlug, token);
  }, [enquirySlug]);

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
  console.log(enquiedCreatedBy);
  return (
    <>
      <div>
        <div className={style.SentEnquiresDetailsComponent_stats_container}>
          <h1> Stats section</h1>
        </div>
        <div
          className={
            style.SentEnquiresDetailsComponent_Enquiriee_deatils_Container
          }
        >
          <div className={style.Enquiriee_deatils_Box}>
            <div>
              <h5>{enquieDetails?.enquiry}</h5>
            </div>
            <div>
              <div className={style.enquirie_time}>
                <div className={style.enquirie_time_IconBox}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faClock}
                    style={{ color: "#e54373" }}
                    size="2x"
                  />
                </div>
                <div className={style.enquirie_time_Box}>{timeDifference}</div>
              </div>
              <div>
                <p>
                  {" "}
                  <span>Categories :- </span>{" "}
                  {enquieDetails?.Seletedlefcategory}
                </p>
              </div>
            </div>
            <div>
              <p>
                <span>Message :- </span> {enquieDetails?.description}
              </p>
            </div>
          </div>
          <div className={style.Cerated_Enquirie_company_container}>
            <div className={style.Company_Logo_Name_container}>
              <div className={style.Created_Enquirey_Company_LogoBox}>
                <Image src={companyLogo} width={60} alt="company-logo" />
              </div>
              <div className={style.Created_Enquirey_Company_NameBox}>
                <h2>DiGital Unifier </h2>
              </div>
            </div>
          </div>
        </div>
        <div className={style.SentEnquiresDetailsComponent_table_Conatiner}>
          <SentEnquiriesDetailsTable />
        </div>
      </div>
    </>
  );
}
