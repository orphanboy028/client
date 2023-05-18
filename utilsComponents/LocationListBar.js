import React from "react";
import style from "../components/ProductComponent/css/ProductList.module.css";
import { locationList } from "../components/FormData/location.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faFilter } from "@fortawesome/free-solid-svg-icons";

export default function LocationListBar({ handelAppFillterShow, handelCity }) {
  return (
    <>
      <div className={style.location_RightBox}>
        {/* Location Box start */}
        <div className={style.locationBox}>
          <div className={style.locationIconBox}>
            <FontAwesomeIcon
              icon={faFilter}
              style={{ color: "#fff" }}
              size="2x"
            />
          </div>
          <div
            className={style.Location_TextBox}
            style={{ cursor: "pointer" }}
            onClick={handelAppFillterShow}
          >
            Fillter
          </div>
        </div>
      </div>
      <div className={style.location_cityBox}>
        {locationList.map((city, i) => {
          return (
            <>
              <div className={style.cityBox} onClick={handelCity}>
                {city.name}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
