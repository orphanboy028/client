import React, { useContext } from "react";
import Link from "next/link";
import style from "./css/MobileFooter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPaperPlane,
  faCirclePlus,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { AppUtilsContext } from "../ContaxtApi/AppUtilsContaxApi";
export default function MobileFooter() {
  const { handelEnquireyModelToggle } = useContext(AppUtilsContext);
  return (
    <>
      <div className={style.MobileFooter_container}>
        <div className={style.Footer_OptionBox}>
          <div className={style.MobileFooter_IconBox}>
            <FontAwesomeIcon icon={faHouse} style={{ color: "#727477" }} />
          </div>
          <div>Home</div>
        </div>
        <div
          className={style.Footer_OptionBox}
          onClick={handelEnquireyModelToggle}
        >
          <div className={style.MobileFooter_IconBox}>
            <FontAwesomeIcon icon={faPaperPlane} style={{ color: "#727477" }} />
          </div>
          <div>ENQUIRE</div>
        </div>

        <div className={style.Footer_OptionBox}>
          <div className={style.MobileFooter_IconBox}>
            <FontAwesomeIcon icon={faCirclePlus} style={{ color: "#727477" }} />
          </div>
          <div>Add PRODUCT</div>
        </div>

        <div className={style.Footer_OptionBox}>
          <div className={style.MobileFooter_IconBox}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#727477" }}
            />
          </div>
          <div>SEARCH</div>
        </div>
      </div>
    </>
  );
}
