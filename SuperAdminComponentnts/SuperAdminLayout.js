import React from "react";
import { Button } from "react-bootstrap";
import SuperAdminDrawer from "./Drawer/SuperAdminDrawer";
import style from "./css/SuperAdmin.module.css";
import SuperAdminNavBar from "./SuperAdminNavBar";
import Drawer from "./utilsCompnents/Drawer";

export default function SuperAdminLayout({ children }) {
  return (
    <>
      <div className={style.layout_Container}>
        <div className={style.DrawerSpace}>
          <Drawer />
          <SuperAdminDrawer />
        </div>

        {/* Conten part start */}
        <div className={style.Contant_container}>
          <div className={style.NavBar_Container}>
            <SuperAdminNavBar />
          </div>
          <div className={` ${style.content_Wrapper}`}>{children}</div>
        </div>
      </div>
    </>
  );
}
