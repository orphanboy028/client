import React, { useContext } from "react";
import style from "./css/NavBarComponent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faBell,
  faUser,
  faGauge,
  faAddressCard,
  faCartPlus,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../public/app-static-images/flipkart-plus.png";
import Image from "next/image";
import NavBarSearchInput from "./NavBarSearchInput";
import NavEnquireBtn from "./NavEnquireBtn";
import NavBarRightPart from "./NavBarRightPart";
import { AppUtilsContext } from "../ContaxtApi/AppUtilsContaxApi";

export default function NavBarComponent({ hangburIcon }) {
  const { isSidebarVisible, setIsSidebarVisible, handelSidebar } =
    useContext(AppUtilsContext);
  console.log(hangburIcon);

  return (
    <div className={style.NavBarComponent_mainBox}>
      <div className={style.NavBarLogoBox}>
        <div className={style.navbar_HangburgBox}>
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            onClick={handelSidebar}
            style={{ display: hangburIcon ? "block" : "none" }}
          />
        </div>
        <div className={style.navLogo_Box}>
          <Image src={logo} fill alt="Company-logo" />
        </div>
      </div>
      <div className={style.NavBarCenter_part}>
        <div className={style.NavBarSearchInput_Box}>
          <NavBarSearchInput />
        </div>
        <div className={style.navBarEnquire_Box}>
          <NavEnquireBtn />
        </div>
      </div>
      <div className={style.NavbarRigtBox}>
        <NavBarRightPart />
      </div>
    </div>
  );
}
