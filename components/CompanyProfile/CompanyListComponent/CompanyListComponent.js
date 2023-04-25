import React from "react";
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
export default function CompanyListComponent() {
  return (
    <>
      <div className={style.ProductList_Banner_Container}>
        <div className={style.ProductList_Banner_ImageBox}>
          <Image src={webBanner} width={600} />
        </div>
      </div>

      {/* search bar section start */}
      <div className={style.ProductList_search_locationBar_Container}>
        <div className={style.location_RightBox}>
          {/* Location Box start */}
          <div className={style.locationBox}>
            <div className={style.locationIconBox}>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#ed747a" }}
                size="2x"
              />
            </div>
            <div className={style.Location_TextBox}>Location</div>
          </div>
          {/* Location Box End */}
          {/* search Input start */}
          <div className={style.location_SearchBox}>
            <input type="text" />
            <div className={style.location_SerachIconBox}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "#cbced2" }}
                size="1x"
              />
            </div>
          </div>
          {/* search Input End */}
        </div>
        <div className={style.location_cityBox}>
          <div className={style.MobilenearMeBox}>
            <div className={style.nearMe_Icon}>
              <FontAwesomeIcon icon={faLocationCrosshairs} size="2x" />
            </div>
            <div className={style.nearMe_texBoxt}>Near Me</div>
          </div>
          {locationList.map((city, i) => {
            return (
              <>
                <div className={style.cityBox}>{city.name}</div>
              </>
            );
          })}
        </div>
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
