import React, { useContext, useEffect } from "react";
import { CreateEnquireContext } from "../../../../ContaxtApi/CreateEnquiresContext";
import { UserContext } from "../../../../ContaxtApi/UserContaxApi";
import style from "../../css/EnquireDetailsContainer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleArrowRight,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export default function CreateEnqureDetaills() {
  const { token } = useContext(UserContext);
  const {
    enquireTitle,
    setenquireTitle,
    handelSelectEnquire,
    getrequestDetailsAction,
    enquireDetails,
    enquireAppliedCmpaniesList,
  } = useContext(CreateEnquireContext);

  useEffect(() => {
    getrequestDetailsAction(enquireTitle, token);
  }, [enquireTitle]);

  // console.log(enquireAppliedCmpaniesList);

  return (
    <div className={style.Enquire_Deatils_MainContainer}>
      <div className={style.Enquire_Deatils_Header}>
        <div className={style.circleBox}>E</div>
        <div className={style.Header_details_Box}>
          <div className={style.Header_TitleBox}>{enquireDetails?.enquiry}</div>
          <div>
            <p>{enquireDetails?.description}</p>
          </div>
          <div>7:30</div>
        </div>
      </div>

      <div>
        {enquireAppliedCmpaniesList?.map((el, i) => {
          return (
            <>
              <div className={style.companies_Deatils_container}>
                <div className={style.Element_wrapper}>
                  <div className={style.Company_detailsBox}>
                    <div className={style.Company_LogoBox}>Logo</div>
                    <div className={style.Basic_details}>
                      <div>
                        <h5>{el?.user?.businessDetails?.CompanyName} </h5>
                      </div>
                      <div className={style.Company_locationBox}>
                        <div className={style.location_point}>
                          <div className={style.location_IconBox}>
                            <FontAwesomeIcon icon={faLocationDot} />
                          </div>
                          <div className={style.address_PlaceBox}>
                            {el?.user?.businessDetails?.city}
                          </div>
                        </div>
                        <div className={style.location_point}>
                          <div className={style.location_IconBox}>
                            <FontAwesomeIcon icon={faLocationDot} />
                          </div>
                          <div className={style.address_PlaceBox}>
                            {" "}
                            {el?.user?.businessDetails?.state}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={style.Enquire_MessageBox}>
                    <div className={style.static_MessageBox}>
                      <h6>Message:</h6>
                    </div>
                    <div className={style.dynimic_MessageBox}>
                      <p>{el?.EnquiryMessage}</p>
                    </div>
                  </div>
                  <div className={style.Company_Profile_LinkBox}>
                    <div className={style.EnquireTime_Box}>
                      <div className={style.applyTimeIcon_Box}>
                        <FontAwesomeIcon icon={faClock} />
                      </div>
                      <div className={style.applyedTime_Box}>8:00</div>
                    </div>
                    <div className={style.goTo_Icon}>
                      <FontAwesomeIcon icon={faCircleArrowRight} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
