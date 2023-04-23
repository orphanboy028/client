import React, { useContext, useEffect } from "react";
import style from "../css/SentEnquiries.module.css";
import SentEnqueryTable from "./SentEnqueryTable";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import { EnquiryContext } from "../../../ContaxtApi/EnquiryContaxApi";
export default function SentEnquiriesComponent() {
  const { token, loginUser } = useContext(UserContext);
  const { getListAllEnquiryRequestAction, ListOfSentEnquiries } =
    useContext(EnquiryContext);

  useEffect(() => {
    getListAllEnquiryRequestAction(token);
  }, []);

  return (
    <>
      <div>
        <div className={style.SentEnquiriesComponent_stats_container}>
          <h1>Stats Container</h1>
        </div>
        <div className={style.SentEnquiriesComponent_table_Conatiner}>
          <SentEnqueryTable />
        </div>
      </div>
    </>
  );
}
