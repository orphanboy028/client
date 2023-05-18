import React, { useContext, useEffect, useState } from "react";
import style from "../css/CompanyListComponet.module.css";
import webBanner from "../../../public/banners-images/web-design.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";
import { locationList } from "../../FormData/location.js";
import CompanyCard from "./CompanyCard";
import LocationListBar from "../../../utilsComponents/LocationListBar";
import { AppUtilsContext } from "../../../ContaxtApi/AppUtilsContaxApi";
import AppElementFillter from "../../../utilsComponents/AppElementFillter";

export default function CompanyListComponent() {
  const { setappFillterShow } = useContext(AppUtilsContext);
  const handleShow = () => setappFillterShow(true);
  const handelBusnessListByCity = (e) => {
    console.log(e.target.textContent);
    const cityName = e.target.textContent;
    router.push(`/products?city=${cityName}`);
  };
  return (
    <>
      <AppElementFillter />
      <div className={style.ProductList_Banner_Container}>
        <div className={style.ProductList_Banner_ImageBox}>
          <Image src={webBanner} width={600} />
        </div>
      </div>

      {/* search bar section start */}
      <div className={style.ProductList_search_locationBar_Container}>
        <LocationListBar
          handelAppFillterShow={handleShow}
          handelCity={handelBusnessListByCity}
        />
      </div>
      {/* Search Bar section End */}
      <div className={style.CompanyList_main_Container}>
        <div className={style.CompanyListComponent_Left_Conatiner}>Left</div>
        <div className={style.CompanyListComponent_Center_Conatiner}>
          <CompanyCard />
        </div>
        <div className={style.CompanyListComponent_Right_Conatiner}>Right</div>
      </div>
    </>
  );
}
