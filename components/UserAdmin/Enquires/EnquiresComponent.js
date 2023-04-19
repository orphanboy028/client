import React, { useContext, useEffect } from "react";
import LeadCards from "./LeadCards";
import style from "../css/Enquires.module.css";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import { EnquiryContext } from "../../../ContaxtApi/EnquiryContaxApi";

export default function EnquiresComponent() {
  const { loginUser, token } = useContext(UserContext);
  const { enquesies, allEnquiryes } = useContext(EnquiryContext);

  useEffect(() => {
    enquesies(token);
  }, []);
  return (
    <>
      {/* Fillter section start */}
      <div className={style.EnquiresComponent_fillter_Section}>
        <h1>Fillter section</h1>
      </div>
      {/* Fillter Setion End */}

      {/* List of Lead Section start */}
      <div>
        <LeadCards allEnquiryes={allEnquiryes} />
      </div>
      {/* List of Leads Section End */}
    </>
  );
}
