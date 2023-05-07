import React, { useState } from "react";
import Link from "next/link";
import style from "./css/SuperAdmin.module.css";
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

export default function SuperAdminLayout({ children }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const handelSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <>
      <div className={style.UserAdminLayout_NavBar}>
        <div className={style.UserAdminLayout_logo}>
          <FontAwesomeIcon
            icon={faBars}
            onClick={handelSidebar}
            size="2x"
            className={style.hangburgIcon}
          />
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
            <div className={`${style.rightIcon} ${style.bell}`}>
              <FontAwesomeIcon icon={faBell} size="2x" />
            </div>
            <div className={`${style.rightIcon} ${style.user}`}>
              <FontAwesomeIcon icon={faUser} size="2x" />
            </div>
            <div className={`${style.rightIcon} ${style.chat}`}>
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
              <Link href="/super-admin" legacyBehavior>
                <a>
                  <span
                    className={`${style.UserAdminLayout_icon} ${style.sideBarIcon1}`}
                  >
                    <FontAwesomeIcon icon={faGauge} size="2x" />
                  </span>
                  <span className={style.UserAdminLayout_sidebar_item}>
                    Dashboard
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/super-admin/enquiries/sent-enquiries" legacyBehavior>
                <a>
                  <span
                    className={`${style.UserAdminLayout_icon} ${style.sideBarIcon2}`}
                  >
                    <FontAwesomeIcon icon={faAddressCard} size="2x" />
                  </span>
                  <span
                    className={`${style.UserAdminLayout_sidebar_item} ${
                      isSidebarVisible ? style.sideBarItem : ""
                    }`}
                  >
                    Sent Enquiries
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link
                href="/super-admin/enquiries/Product-enquires"
                legacyBehavior
              >
                <a>
                  <span
                    className={`${style.UserAdminLayout_icon} ${style.sideBarIcon3}`}
                  >
                    <FontAwesomeIcon icon={faDiagramProject} size="2x" />
                  </span>
                  <span className={style.UserAdminLayout_sidebar_item}>
                    Product Enquires
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/super-admin/seo" legacyBehavior>
                <a>
                  <span
                    className={`${style.UserAdminLayout_icon} ${style.sideBarIcon3}`}
                  >
                    <FontAwesomeIcon icon={faGauge} size="2x" />
                  </span>
                  <span className={style.UserAdminLayout_sidebar_item}>
                    SEO
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link
                href="/super-admin/categories/main-categories"
                legacyBehavior
              >
                <a>
                  <span
                    className={`${style.UserAdminLayout_icon} ${style.sideBarIcon3}`}
                  >
                    <FontAwesomeIcon icon={faGauge} size="2x" />
                  </span>
                  <span className={style.UserAdminLayout_sidebar_item}>
                    Categories Panel
                  </span>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/super-admin/Banner/home-slider" legacyBehavior>
                <a>
                  <span
                    className={`${style.UserAdminLayout_icon} ${style.sideBarIcon3}`}
                  >
                    <FontAwesomeIcon icon={faGauge} size="2x" />
                  </span>
                  <span className={style.UserAdminLayout_sidebar_item}>
                    Home Slider Banner
                  </span>
                </a>
              </Link>
            </li>
          </ul>
          <ul className={style.UserAdminLayout_sidebar_bottom_items}>
            <li>
              <a href="#">
                <span className={style.UserAdminLayout_icon}>
                  <FontAwesomeIcon icon={faGauge} size="2x" />
                </span>
                <span className={style.UserAdminLayout_sidebar_item}>
                  stteing
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className={style.UserAdminLayout_icon}>
                  <FontAwesomeIcon icon={faGauge} size="2x" />
                </span>
                <span className={style.UserAdminLayout_sidebar_item}>
                  more details
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
