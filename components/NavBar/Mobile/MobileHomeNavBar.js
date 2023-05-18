import Image from "next/image";
import React, { useContext } from "react";
import style from "../css/MobileHomeNavBar.module.css";
import menu from "../../../public/app-static-images/menu.png";
import NotificationBell from "../../../utilsComponents/NotificationBell";
import SearchInput from "../../../utilsComponents/SearchInput";
import Link from "next/link";
import SideBarDrawe from "../../../utilsComponents/SideBarDrawe";
import { AppUtilsContext } from "../../../ContaxtApi/AppUtilsContaxApi";

export default function MobileHomeNavBar() {
  const { isSidebarVisible, setIsSidebarVisible, handelSidebar } =
    useContext(AppUtilsContext);

  return (
    <>
      <div className={style.MobileHomeNavBar_Main_Container}>
        <div className={style.MobileHomeNavBar_Top_part}>
          <div className={style.MobileHomeNavBar_Top_part_left}>
            <div className={style.Top_part_left_IconBox}>
              <Image
                src={menu}
                alt="Menu-icon"
                width={20}
                onClick={handelSidebar}
              />
            </div>
            <div className={style.left_part_userNameBox}>Hi Pawan</div>
          </div>
          <div className={style.MobileHomeNavBar_TopRightBox}>
            <div className={style.MobileHomeNavBar_sPanelBox}>
              <Link
                href="/user-admin"
                style={{ textDecoration: "none", color: "#ffff" }}
              >
                S-Panel
              </Link>
            </div>
            <div className={style.NotificationBell_box}>
              <NotificationBell w={20} />
            </div>
          </div>
        </div>
        {/* search Input part */}
        <div className={style.MobileHomeNavBar_searchInputBox}>
          <SearchInput />
        </div>
      </div>
      <div
        className={`${
          isSidebarVisible
            ? style.SideBar_DrawerContainer
            : style.Hide_SideBarContainer
        }`}
        onClick={handelSidebar}
      >
        <div
          className={` ${
            isSidebarVisible
              ? style.SideBar_Drawer_InnerContainer
              : style.HideDrawer
          } `}
        >
          <SideBarDrawe />
        </div>
      </div>
    </>
  );
}
