import React, { useContext, useEffect, useState } from "react";
import style from "../css/Enquires.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { ExternalApiContaxt } from "../../../ContaxtApi/ExternalConaxt/ExternalContaxtApi";
import LocationFillter from "./LocationFillter";

export default function DistricFillter() {
  const {
    selectDistric,
    setselectDistric,
    districLocationFillterShow,
    handleDistricCloseLocation,
    handleDistricShowLocation,
  } = useContext(ExternalApiContaxt);

  const handelSelectDistric = (e) => {
    const district = e.target.textContent.split(",")[1].trim();
    console.log(district);
    setselectDistric(district);
  };

  // useEffect(() => {
  //   console.log(districLocationFillterShow);
  // }, [districLocationFillterShow]);

  return (
    <>
      <LocationFillter
        handelSelect={handelSelectDistric}
        title="Search Distric"
        showProps={districLocationFillterShow}
        handelClose={handleDistricCloseLocation}
      />
      <div
        className={style.Search_filter_bar_Location}
        onClick={handleDistricShowLocation}
      >
        <div className={style.fillter_iconBox}>
          <FontAwesomeIcon icon={faFilter} />
        </div>
        <div> Distric </div>
      </div>
    </>
  );
}
