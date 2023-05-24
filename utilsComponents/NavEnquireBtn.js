import React, { useContext } from "react";
import style from "./css/NavBarSeachInput.module.css";
import { AppUtilsContext } from "../ContaxtApi/AppUtilsContaxApi";
export default function NavEnquireBtn() {
  const { handelEnquireyModelToggle } = useContext(AppUtilsContext);
  return (
    <div className={style.DekstopNavBar_center_part}>
      <button onClick={handelEnquireyModelToggle}>Enquiry</button>
    </div>
  );
}
