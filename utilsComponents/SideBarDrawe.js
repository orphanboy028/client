import React from "react";
import style from "../components/UserAdmin/css/Layout.module.css";
import Link from "next/link";
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
  faPlus,
  faListCheck,
  faBuilding,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
export default function SideBarDrawe() {
  return (
    <div className={style.SideBarDrawe_main_Container}>
      <ul className={style.UserAdminLayout_sidebar_items}>
        <li className={style.UserAdminLayout_li}>
          <Link href="#" legacyBehavior>
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
          <Link href="/user-admin" legacyBehavior>
            <a>
              <span
                className={`${style.UserAdminLayout_icon} ${style.sideBarIcon2}`}
              >
                <FontAwesomeIcon icon={faAddressCard} size="2x" />
              </span>
              Profile
            </a>
          </Link>
        </li>
        <li>
          <Link href="/user-admin/enquiries" legacyBehavior>
            <a>
              <span
                className={`${style.UserAdminLayout_icon} ${style.sideBarIcon3}`}
              >
                <FontAwesomeIcon icon={faDiagramProject} size="2x" />
              </span>
              <span className={style.UserAdminLayout_sidebar_item}>
                Enquiries
              </span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/user-admin/add-product" legacyBehavior>
            <a>
              <span
                className={`${style.UserAdminLayout_icon} ${style.sideBarIcon3}`}
              >
                <FontAwesomeIcon icon={faPlus} size="2x" />
              </span>
              <span className={style.UserAdminLayout_sidebar_item}>
                Add Products
              </span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/user-admin/enquiries/product-enquires" legacyBehavior>
            <a>
              <span
                className={`${style.UserAdminLayout_icon} ${style.sideBarIcon3}`}
              >
                <FontAwesomeIcon icon={faListCheck} size="2x" />
              </span>
              <span className={style.UserAdminLayout_sidebar_item}>
                Products Enquires
              </span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/profile" legacyBehavior>
            <a>
              <span
                className={`${style.UserAdminLayout_icon} ${style.sideBarIcon3}`}
              >
                <FontAwesomeIcon icon={faBuilding} size="2x" />
              </span>
              <span className={style.UserAdminLayout_sidebar_item}>
                Copanyies
              </span>
            </a>
          </Link>
        </li>
        <li>
          <Link
            href="/user-admin/enquiries/Created-enquires/user-enquires-list"
            legacyBehavior
          >
            <a>
              <span
                className={`${style.UserAdminLayout_icon} ${style.sideBarIcon3}`}
              >
                <FontAwesomeIcon icon={faInfo} size="2x" />
              </span>
              <span className={style.UserAdminLayout_sidebar_item}>
                Created Enquires
              </span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/login" legacyBehavior>
            <a>
              <span
                className={`${style.UserAdminLayout_icon} ${style.sideBarIcon3}`}
              >
                <FontAwesomeIcon icon={faGauge} size="2x" />
              </span>
              <span className={style.UserAdminLayout_sidebar_item}>Login</span>
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
            <span className={style.UserAdminLayout_sidebar_item}>seetings</span>
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
  );
}
