import React, { useContext, useState } from "react";
import style from "../css/ProfileProduct.module.css";
import ProfileCards from "./ProfileCards";
import { BusinessContext } from "../../../ContaxtApi/BusinessContaxApi";

export default function ProfileProductSection() {
  const [items, setitems] = useState([1, 2, 3, 4, 5, 6, 7]);
  const { businessProfile, profileProduct, businessCompleteDetails } =
    useContext(BusinessContext);
  return (
    <>
      <div className={style.ProfileProductSection_main_container}>
        <div className={style.ProfileProductSection_headingBox}>
          <h2>Products & Services </h2>
        </div>
        {/* Card Section start */}
        <div>
          <ProfileCards items={businessCompleteDetails.products} />
        </div>
        {/* Card section End */}
      </div>
    </>
  );
}
