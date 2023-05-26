import React, { useContext } from "react";
import style from "./css/SideBarDrawe.module.css";
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
import { AppUtilsContext } from "../ContaxtApi/AppUtilsContaxApi";
export default function SideBarDrawe() {
  const { isSidebarVisible, setIsSidebarVisible } = useContext(AppUtilsContext);
  return (
    <div className={style.SideBarDrawe_main_Container}>
      <ul className={style.UserAdminLayout_sidebar_items}>
        <li className={style.UserAdminLayout_li}>
          <Link href="#" legacyBehavior>
            <a>
              <span
                className={`${
                  isSidebarVisible
                    ? style.UserAdminLayout_iconHide
                    : style.UserAdminLayout_icon
                } ${style.sideBarIcon1}`}
              >
                <FontAwesomeIcon icon={faGauge} />
              </span>
              <span
                className={`${
                  isSidebarVisible
                    ? style.UserAdminLayout_sidebar_itemHide
                    : style.UserAdminLayout_sidebar_item
                }`}
              >
                Dashboard
              </span>
            </a>
          </Link>
        </li>
        <li className={style.UserAdminLayout_li}>
          <Link href="/user-admin" legacyBehavior>
            <a>
              <span
                className={`${
                  isSidebarVisible
                    ? style.UserAdminLayout_iconHide
                    : style.UserAdminLayout_icon
                } ${style.sideBarIcon1}`}
              >
                <FontAwesomeIcon icon={faAddressCard} />
              </span>
              <span
                className={`${
                  isSidebarVisible
                    ? style.UserAdminLayout_sidebar_itemHide
                    : style.UserAdminLayout_sidebar_item
                }`}
              >
                Profile
              </span>
            </a>
          </Link>
        </li>
        <li className={style.UserAdminLayout_li}>
          <Link href="/user-admin/enquiries" legacyBehavior>
            <a>
              <span
                className={`${
                  isSidebarVisible
                    ? style.UserAdminLayout_iconHide
                    : style.UserAdminLayout_icon
                } ${style.sideBarIcon1}`}
              >
                <FontAwesomeIcon icon={faDiagramProject} />
              </span>
              <span
                className={`${
                  isSidebarVisible
                    ? style.UserAdminLayout_sidebar_itemHide
                    : style.UserAdminLayout_sidebar_item
                }`}
              >
                Enquiries
              </span>
            </a>
          </Link>
        </li>
        <li className={style.UserAdminLayout_li}>
          <Link href="/products" legacyBehavior>
            <a>
              <span
                className={`${
                  isSidebarVisible
                    ? style.UserAdminLayout_iconHide
                    : style.UserAdminLayout_icon
                } ${style.sideBarIcon1}`}
              >
                <FontAwesomeIcon icon={faPlus} />
              </span>
              <span
                className={`${
                  isSidebarVisible
                    ? style.UserAdminLayout_sidebar_itemHide
                    : style.UserAdminLayout_sidebar_item
                }`}
              >
                Products
              </span>
            </a>
          </Link>
        </li>
        <li className={style.UserAdminLayout_li}>
          <Link href="/user-admin/add-product" legacyBehavior>
            <a>
              <span
                className={`${
                  isSidebarVisible
                    ? style.UserAdminLayout_iconHide
                    : style.UserAdminLayout_icon
                } ${style.sideBarIcon1}`}
              >
                <FontAwesomeIcon icon={faPlus} />
              </span>
              <span
                className={`${
                  isSidebarVisible
                    ? style.UserAdminLayout_sidebar_itemHide
                    : style.UserAdminLayout_sidebar_item
                }`}
              >
                Add Products
              </span>
            </a>
          </Link>
        </li>
        <li className={style.UserAdminLayout_li}>
          <Link href="/user-admin/enquiries/product-enquires" legacyBehavior>
            <a>
              <span
                className={`${
                  isSidebarVisible
                    ? style.UserAdminLayout_iconHide
                    : style.UserAdminLayout_icon
                } ${style.sideBarIcon1}`}
              >
                <FontAwesomeIcon icon={faListCheck} />
              </span>
              <span
                className={`${
                  isSidebarVisible
                    ? style.UserAdminLayout_sidebar_itemHide
                    : style.UserAdminLayout_sidebar_item
                }`}
              >
                Products Enquires
              </span>
            </a>
          </Link>
        </li>
        <li className={style.UserAdminLayout_li}>
          <Link
            href="/categories/main-categories"
            legacyBehavior
            className={style.li_Link}
          >
            <a>
              <span
                className={`${
                  isSidebarVisible
                    ? style.UserAdminLayout_iconHide
                    : style.UserAdminLayout_icon
                } ${style.sideBarIcon1}`}
              >
                <FontAwesomeIcon icon={faGauge} />
              </span>
              <span
                className={`${
                  isSidebarVisible
                    ? style.UserAdminLayout_sidebar_itemHide
                    : style.UserAdminLayout_sidebar_item
                }`}
              >
                Categories
              </span>
            </a>
          </Link>
        </li>
        <li className={style.UserAdminLayout_li}>
          <Link href="/profile" legacyBehavior>
            <a>
              <span
                className={`${
                  isSidebarVisible
                    ? style.UserAdminLayout_iconHide
                    : style.UserAdminLayout_icon
                } ${style.sideBarIcon1}`}
              >
                <FontAwesomeIcon icon={faBuilding} />
              </span>
              <span
                className={`${
                  isSidebarVisible
                    ? style.UserAdminLayout_sidebar_itemHide
                    : style.UserAdminLayout_sidebar_item
                }`}
              >
                Copanyies
              </span>
            </a>
          </Link>
        </li>
        <li className={style.UserAdminLayout_li}>
          <Link
            href="/user-admin/enquiries/Created-enquires/user-enquires-list"
            legacyBehavior
          >
            <a>
              <span
                className={`${
                  isSidebarVisible
                    ? style.UserAdminLayout_iconHide
                    : style.UserAdminLayout_icon
                } ${style.sideBarIcon1}`}
              >
                <FontAwesomeIcon icon={faInfo} />
              </span>
              <span
                className={`${
                  isSidebarVisible
                    ? style.UserAdminLayout_sidebar_itemHide
                    : style.UserAdminLayout_sidebar_item
                }`}
              >
                Created Enquires
              </span>
            </a>
          </Link>
        </li>
        <li className={style.UserAdminLayout_li}>
          <Link href="/login" legacyBehavior className={style.li_Link}>
            <a>
              <span
                className={`${
                  isSidebarVisible
                    ? style.UserAdminLayout_iconHide
                    : style.UserAdminLayout_icon
                } ${style.sideBarIcon1}`}
              >
                <FontAwesomeIcon icon={faGauge} />
              </span>
              <span
                className={`${
                  isSidebarVisible
                    ? style.UserAdminLayout_sidebar_itemHide
                    : style.UserAdminLayout_sidebar_item
                }`}
              >
                Login
              </span>
            </a>
          </Link>
        </li>
      </ul>
      <ul className={style.UserAdminLayout_sidebar_bottom_items}>
        <li className={style.UserAdminLayout_li}>
          <a href="#">
            <span
              className={`${
                isSidebarVisible
                  ? style.UserAdminLayout_iconHide
                  : style.UserAdminLayout_icon
              } ${style.sideBarIcon1}`}
            >
              <FontAwesomeIcon icon={faGauge} />
            </span>
            <span
              className={`${
                isSidebarVisible
                  ? style.UserAdminLayout_sidebar_itemHide
                  : style.UserAdminLayout_sidebar_item
              }`}
            >
              seetings
            </span>
          </a>
        </li>
        <li className={style.UserAdminLayout_li}>
          <a href="#">
            <span
              className={`${
                isSidebarVisible
                  ? style.UserAdminLayout_iconHide
                  : style.UserAdminLayout_icon
              } ${style.sideBarIcon1}`}
            >
              <FontAwesomeIcon icon={faGauge} />
            </span>
            <span
              className={`${
                isSidebarVisible
                  ? style.UserAdminLayout_sidebar_itemHide
                  : style.UserAdminLayout_sidebar_item
              }`}
            >
              Dashboard
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
