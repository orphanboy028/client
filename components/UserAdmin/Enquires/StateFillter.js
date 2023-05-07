import React, { useContext, useEffect, useState } from "react";
import style from "../css/Enquires.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { ExternalApiContaxt } from "../../../ContaxtApi/ExternalConaxt/ExternalContaxtApi";
import LocationFillter from "./LocationFillter";

export default function StateFillter() {
  const {
    setstateSlected,
    stateSlected,
    stateLocationFilltershow,
    handleStateCloseLocation,
    handleStateShowLocation,
  } = useContext(ExternalApiContaxt);

  const handelSelectState = (e) => {
    const state = e.target.textContent.split(",")[0].trim();
    setstateSlected(state);
  };
  return (
    <>
      <LocationFillter
        handelSelect={handelSelectState}
        title="Search State"
        showProps={stateLocationFilltershow}
        handelClose={handleStateCloseLocation}
      />
      <div
        className={style.Search_filter_bar_Location}
        onClick={handleStateShowLocation}
      >
        <div className={style.fillter_iconBox}>
          <FontAwesomeIcon icon={faFilter} />
        </div>
        <div> State </div>
      </div>
    </>
  );
}
