import React, { useState } from "react";
import style from "../css/DekstopNavBar.module.css";
import logo from "../../../public/app-static-images/flipkart-plus.png";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import NotificationBell from "../../../utilsComponents/NotificationBell";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AppUtilsContext } from "../../../ContaxtApi/AppUtilsContaxApi";
import Button from "react-bootstrap/Button";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import Link from "next/link";
import DropDownMenu from "./DropDownMenu";
import NavBarSearchInput from "../../../utilsComponents/NavBarSearchInput";
import NavEnquireBtn from "../../../utilsComponents/NavEnquireBtn";
import NavBarComponent from "../../../utilsComponents/NavBarComponent";

export default function DekstopNavBar() {
  const [query, setQuery] = useState("");

  const router = useRouter();
  const { openProfleBox, handelMouseHover, handelMoveLeave } =
    useContext(AppUtilsContext);
  const { loginUser } = useContext(UserContext);

  // change DropDown Style box style
  const isLogin =
    loginUser?.email !== undefined
      ? style.DekstopNavBar_DropDoen_Menu
      : style.DekstopNavBar_DropDoen_Menu_GustUser;

  const handleSearch = (e) => {
    e.preventDefault();

    if (query.trim() !== "") {
      router.push(`/products?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <>
      <div className={style.DekstopNavBar_mainContainer}>
        <NavBarComponent hangburIcon={false} />
      </div>
    </>
  );
}
