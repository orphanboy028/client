import React, { useContext, useEffect } from "react";
import style from "../../css/SendEnquiresComponent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { EnquiryContext } from "../../../../ContaxtApi/EnquiryContaxApi";
import { UserContext } from "../../../../ContaxtApi/UserContaxApi";
import { formatDistanceStrict, format } from "date-fns";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

export default function EnquiryNotAppliyed() {
  const { token, loginUser } = useContext(UserContext);
  const router = useRouter();
  const { slug } = router.query;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });
  const {
    requestEnquiryDetails,
    enquireyInfo,
    applyedUsers,
    isUserApplied,
    setIsUserApplied,
    applyOnEnquirey,
  } = useContext(EnquiryContext);
  // Destructure enquireyInfo
  const { enquiry, description, Seletedlefcategory, createdAt } = enquireyInfo;

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

  const onSubmit = async (formData) => {
    try {
      const result = await applyOnEnquirey(formData, slug, token);
      console.log(result);
      if ((result.data.status = "Success")) {
        requestEnquiryDetails(slug, token);
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div>
      <div className={style.SendEnquiresComponent_inner_form_container}>
        <div className={style.SendEnquiery_email_IconBox}>
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2xl"
            style={{ color: "#7b67c7" }}
          />
        </div>
        <div className={style.SendEnquiresComponent_form_Container}>
          <div className={style.enquiery_details_container}>
            <div className={style.enquirey_Title}>
              <h3>{enquiry}</h3>
            </div>
            <div className={style.enquiey_time_location_box}>
              <div className={style.enquirey_time_Box}>
                <div className={style.enquery_iconBox}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faClock}
                    style={{ color: "#e54373" }}
                    size="2x"
                  />
                </div>
                <div className={style.enquery_time_box}>{timeDifference}</div>
              </div>
              <div className={style.enquirey_time_Box}>
                <div className={style.enquery_iconBox}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ color: "#e54373" }}
                    size="2x"
                  />
                </div>
                <div className={style.enquery_time_box}>Harrayan</div>
              </div>
            </div>
          </div>
          <div className={style.sendEnquery_Categorie_Box}>
            {Seletedlefcategory}
          </div>
          <div className={style.senEnquery_descreption_Box}>
            <p>{description}</p>
          </div>
          <div className={style.SendEnquery_message_Box}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <textarea
                rows={5}
                placeholder="write message for enqueriey"
                type="text"
                id="EnquiryMessage"
                name="EnquiryMessage"
                aria-describedby="EnquiryMessageHelp"
                {...register("EnquiryMessage", {
                  required: "Enquiry Message is Requires",
                  minLength: {
                    value: 20,
                    message: "At leas 20 Cracters Required in password",
                  },
                })}
              />
              <div>
                <small
                  id="EnquiryMessageHelp"
                  className={style.EnquiryMessage_errorBox}
                >
                  {errors.EnquiryMessage && (
                    <p>{errors.EnquiryMessage.message}</p>
                  )}
                </small>
              </div>
              <div className={style.sendEnquery_BtnBox}>
                <button>send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
