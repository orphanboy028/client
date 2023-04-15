import React from "react";
import style from "./css/Utils.module.css";
import searchIcon from "../public/app-static-images/search.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchInput() {
  return (
    <div className={style.SearchInput_container}>
      <input type={"text"} placeholder="search your Enquery" />
      <div className={style.SearchInput_IconBox}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: "#2874f0" }}
          className={style.search_icon}
          size="2x"
        />
      </div>
    </div>
  );
}
