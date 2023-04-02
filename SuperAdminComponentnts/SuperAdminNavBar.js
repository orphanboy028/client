import React from "react";
import style from "./css/SuperAdmin.module.css";
import Image from "next/image";
import searchIcon from "../public/admin-images/search.png";
import userIcon from "../public/admin-images/user.png";
export default function SuperAdminNavBar() {
  return (
    <div className={style.layout_navbar}>
      <div className={style.NavSearch_Box}>
        <div className={style.Navbar_SearchIcon_box}>
          <Image src={searchIcon} width={25} />
        </div>
        <div className={style.navBar_Search_inputBox}>
          <input type="text" placeholder="search your query" />
        </div>
      </div>
      <div className={style.NaverUser_Box}>
        <div className={style.Navbar_userBox}>
          <Image src={userIcon} width={30} />
        </div>
      </div>
    </div>
  );
}
