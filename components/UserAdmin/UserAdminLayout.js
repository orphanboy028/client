import React, { useState } from "react";
import Link from "next/link";
import style from "./css/Layout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faBell,
  faUser,
  faGauge,
} from "@fortawesome/free-solid-svg-icons";

export default function UserAdminLayout({ children }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const handelSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div className={style.UserAdminLayout_NavBar}>
        <div className={style.UserAdminLayout_logo}>
          <FontAwesomeIcon icon={faBars} onClick={handelSidebar} />
          <h2>
            Med <span>Ex</span>
          </h2>
        </div>
        <div className={style.UserAdminLayout_search_notification_profile}>
          <div className={style.UserAdminLayout_Search}>
            <input type="text" placeholder="search " />
            <button>
              {" "}
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className={style.UserAdminLayout_notification_profile}>
            <div>
              <FontAwesomeIcon icon={faBell} />
            </div>
            <div>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div>
              <FontAwesomeIcon icon={faBell} size="2x" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.UserAdminLayout_main}>
        <div
          className={`${style.UserAdminLayout_sidebar} ${
            isSidebarVisible ? style.active : ""
          } `}
        >
          <ul className={style.UserAdminLayout_sidebar_items}>
            <li className={style.UserAdminLayout_li}>
              <a href="#">
                <span className={style.UserAdminLayout_icon}>
                  <FontAwesomeIcon icon={faGauge} size="2x" />
                </span>
                <span className={style.UserAdminLayout_sidebar_item}>
                  Dashboard
                </span>
              </a>
            </li>
            <li>
              <a href="/user-admin">
                <span className={style.UserAdminLayout_icon}>
                  <FontAwesomeIcon icon={faGauge} size="2x" />
                </span>
                <span
                  className={`${style.UserAdminLayout_sidebar_item} ${
                    isSidebarVisible ? style.sideBarItem : ""
                  }`}
                >
                  Profile
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className={style.UserAdminLayout_icon}>
                  <FontAwesomeIcon icon={faGauge} size="2x" />
                </span>
                <span className={style.UserAdminLayout_sidebar_item}>
                  Dashboard
                </span>
              </a>
            </li>
          </ul>
          <ul className={style.UserAdminLayout_sidebar_bottom_items}>
            <li>
              <a href="#">
                <span className={style.UserAdminLayout_icon}>
                  <FontAwesomeIcon icon={faGauge} size="2x" />
                </span>
                <span className={style.UserAdminLayout_sidebar_item}>
                  Dashboard
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className={style.UserAdminLayout_icon}>
                  <FontAwesomeIcon icon={faGauge} size="2x" />
                </span>
                <span className={style.UserAdminLayout_sidebar_item}>
                  Dashboard
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`${style.UserAdminLayout_main_content} ${
            isSidebarVisible ? style.content_container : ""
          } `}
        >
          {children}
        </div>
      </div>
    </>
  );
}
