import React from "react";
import style from "./css/Utils.module.css";
import searchIcon from "../public/app-static-images/search.png";
import Image from "next/image";

export default function SearchInput() {
  return (
    <div className={style.SearchInput_container}>
      <input type={"text"} placeholder="search your Enquery" />
      <div className={style.SearchInput_IconBox}>
        <Image src={searchIcon} width={20} />
      </div>
    </div>
  );
}
