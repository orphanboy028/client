import React, { useContext, useEffect } from "react";
import style from "../css/Enquires.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import { EnquiryContext } from "../../../ContaxtApi/EnquiryContaxApi";
import { format, formatRelative } from "date-fns";
import Link from "next/link";

export default function LeadCards({ allEnquiryes }) {
  const { togglesortFiilter, settogglesortFiilter, handelToogleSort } =
    useContext(EnquiryContext);

  // sort the enquires based on the current sortOrder
  const sortedEnquiryes = allEnquiryes.slice().sort((enquiry1, enquiry2) => {
    const date1 = new Date(enquiry1.createdAt);
    const date2 = new Date(enquiry2.createdAt);
    if (togglesortFiilter === "recent") {
      return date2 - date1;
    } else {
      return date1 - date2;
    }
  });
  return (
    <>
      <div>{}</div>
      {sortedEnquiryes?.map((enquie, i) => {
        const formattedDate = format(
          new Date(enquie.createdAt),
          "d-MMMM-yyyy, h:mm a"
        );
        const relativeTime = formatRelative(
          new Date(enquie.createdAt),
          new Date()
        );
        return (
          <>
            <div className={style.LeadCards_conatiner} key={i}>
              <div className={style.LeadCards_TitleBox}>
                <h3>{enquie?.enquiry}</h3>
              </div>
              <div className={style.LeadCards_time_Location}>
                <div className={style.LeadCards_timeBox}>
                  <div className={style.LeadCards_clockIcon_box}>
                    <FontAwesomeIcon
                      icon={faClock}
                      style={{ color: "#e54373" }}
                      size="2x"
                    />
                  </div>
                  <div className={style.LeadCards_enqueryTimeBox}>
                    {relativeTime}
                  </div>
                </div>
                <div className={style.LeadCards_locationBox}>
                  <div className={style.LeadCards_locationIconBox}>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      style={{ color: "#e54373" }}
                      size="2x"
                    />
                  </div>
                  <div className={style.LeadCards_location}>
                    {enquie?.city}/ {enquie?.state}
                  </div>
                </div>
              </div>
              <div className={style.LeadCards_categories_Box}>
                {enquie?.Seletedlefcategory}
              </div>
              <div className={style.LeadCards_descreption}>
                <p>{enquie?.description}</p>
              </div>

              <div className={style.LeadCards_btnBox}>
                <Link
                  href={`/user-admin/enquiries/send-enquires/${enquie?.slug}`}
                >
                  <div className={style.LeadCards_Buy_Btn}>Enquiry Info</div>
                </Link>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
