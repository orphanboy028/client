import React, { useContext, useEffect } from "react";
import style from "../../css/CreatedEnquiresCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
  faBell,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Badge from "react-bootstrap/Badge";
import { EnquiryContext } from "../../../../ContaxtApi/EnquiryContaxApi";
import { CreateEnquireContext } from "../../../../ContaxtApi/CreateEnquiresContext";

export default function CreatedEnquiresCards() {
  const {
    enquireTitle,
    setenquireTitle,
    handelSelectEnquire,
    userEnquireList,
    setuserEnquireList,
    ListOfCreatedEnquires,
  } = useContext(CreateEnquireContext);

  return (
    <>
      {userEnquireList?.map((el, i) => {
        return (
          <>
            <div
              className={style.CreatedEnquiresCards_Box}
              onClick={() => handelSelectEnquire(el.slug)}
            >
              <div className={style.enquire_CategoriesBox}>SMP Machine</div>
              <div className={style.EnquireBox}>
                <div className={style.enquire_Details_Box}>
                  <div className={style.enquire_TitleBox}>
                    <p>{el?.enquiry}</p>
                  </div>
                  <div className={style.enquire_descreptionBox}>
                    <p>{el?.description}</p>
                  </div>
                </div>
                <diV className={style.enquireTime_Box}>
                  <p>6:30</p>
                </diV>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
