import React, { useContext, useState } from "react";
import Link from "next/link";
import style from "./css/Layout.module.css";
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
import NavBarSearchInput from "../../utilsComponents/NavBarSearchInput";
import NavEnquireBtn from "../../utilsComponents/NavEnquireBtn";
import logo from "../../public/app-static-images/flipkart-plus.png";
import Image from "next/image";
import NavBarRightPart from "../../utilsComponents/NavBarRightPart";
import NavBarComponent from "../../utilsComponents/NavBarComponent";
import { AppUtilsContext } from "../../ContaxtApi/AppUtilsContaxApi";
import SideBarDrawe from "../../utilsComponents/SideBarDrawe";
import DekstopFooter from "../../utilsComponents/DekstopFooter";
import MobileFooter from "../../utilsComponents/MobileFooter";

export default function UserAdminLayout({ children }) {
  const { isSidebarVisible, setIsSidebarVisible } = useContext(AppUtilsContext);

  return (
    <>
      <div className={style.UserAdminLayout_NavBar}>
        <NavBarComponent hangburIcon={true} />
      </div>

      <div className={style.UserAdminLayout_main}>
        <div
          className={`${style.UserAdminLayout_sidebar} ${
            isSidebarVisible ? style.active : ""
          } `}
        >
          <SideBarDrawe />
        </div>
        <div
          className={`${style.UserAdminLayout_main_content} ${
            isSidebarVisible ? style.content_container : ""
          } `}
        >
          {children}
          <div className={style.layout_Footer_Container}>
            <div className={style.layout_Dekstop_Footer}>
              <DekstopFooter />
            </div>
            <div className={style.layOut_Mobile_Footer}>
              <MobileFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
