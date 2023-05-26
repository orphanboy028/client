import React, { useEffect, useState } from "react";
import DCategoriesSlider from "../../CategoriesSlider/Dekstop/DCategoriesSlider";
import { isAuth, getEncryptedData } from "../../../Actions/UserAuth/userAuth";
import DekstopNavBar from "../../NavBar/Dekstop/DekstopNavBar";
import { useContext } from "react";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import Spinner from "react-bootstrap/Spinner";
import style from "../../../utilsComponents/css/Utils.module.css";
import DekstopFooter from "../../../utilsComponents/DekstopFooter";
import MobileFooter from "../../../utilsComponents/MobileFooter";
import SideBarDrawe from "../../../utilsComponents/SideBarDrawe";
import { AppUtilsContext } from "../../../ContaxtApi/AppUtilsContaxApi";
import EnquireModel from "../../../utilsComponents/EnquireModel/EnquireModel";

export default function DekstopHomeLayOut({ children }) {
  const { loading } = useContext(UserContext);
  const { isSidebarVisible, setIsSidebarVisible, handelSidebar } =
    useContext(AppUtilsContext);
  console.log(loading);
  return (
    <>
      {loading ? (
        <>
          <div className={style.LoadingSpinerBox}>
            <Spinner
              animation="border"
              size="md"
              className={style.loadingSpiner}
            />
          </div>
        </>
      ) : (
        <>
          <EnquireModel />
          <div className={style.Page_Main_Container}>
            <div
              className={`${
                isSidebarVisible
                  ? style.hideSideBar
                  : style.HomePage_sideBar_Container
              }`}
              onClick={handelSidebar}
            >
              <div className={style.Inner_Container}>
                <SideBarDrawe />
              </div>
            </div>

            <div>
              <DekstopNavBar />
              <DCategoriesSlider />
            </div>
            <div>{children}</div>
            <div className={style.layout_Footer_Container}>
              <div className={style.layout_Dekstop_Footer}>
                <DekstopFooter />
              </div>

              <div className={style.layOut_Mobile_Footer}>
                <MobileFooter />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
