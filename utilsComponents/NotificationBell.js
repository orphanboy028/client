import React from "react";
import Image from "next/image";
import bell from "../public/app-static-images/bell.png";
import style from "./css/Utils.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export default function NotificationBell({ w }) {
  return (
    <div className={style.bell_IconBox}>
      {/* <Image src={bell} alt="bell-icon" width={w} className={style.bellImage} /> */}
      <FontAwesomeIcon icon={faBell} size="2x" style={{ color: "#ffffff" }} />
      <span style={{ width: "20px", height: "20px" }}>10</span>
    </div>
  );
}
