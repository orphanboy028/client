import React from "react";
import style from "../css/Contactus.module.css";

export default function ContactUsSection() {
  return (
    <div className={style.ContactUsSection_container}>
      <h4>Requirement Details </h4>
      <div className={style.ContactUsSection_textAreaBox}>
        <textarea
          rows={7}
          placeholder="send your requirement deatils to wender"
        />
      </div>
      <div className={style.ContactUsSection_sendBtn_Box}>
        <button>Send Requirement</button>
      </div>
    </div>
  );
}
