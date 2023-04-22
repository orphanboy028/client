import React, { useContext, useEffect, useState } from "react";
import LeadCards from "./LeadCards";
import style from "../css/Enquires.module.css";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import { EnquiryContext } from "../../../ContaxtApi/EnquiryContaxApi";
import LocationFillter from "./LocationFillter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

export default function EnquiresComponent() {
  const { loginUser, token } = useContext(UserContext);
  const {
    enquesies,
    allEnquiryes,
    selectedCity,
    setSelectedCity,
    selectedCategories,
    setselectedCategories,
    handleShowLocation,
  } = useContext(EnquiryContext);

  const filterEnquiresByLocation = (allEnquiryes, city, categories) => {
    if (city && categories === null) {
      return allEnquiryes.filter(
        (enqures) =>
          enqures.city.toLowerCase() === city.toLowerCase() ||
          enqures.state.toLowerCase() === city.toLowerCase()
      );
    } else if (categories && city === null) {
      return allEnquiryes.filter(
        (enqures) =>
          enqures.Seletedlefcategory.toLowerCase() === categories.toLowerCase()
      );
    } else if (city && categories) {
      return allEnquiryes.filter(
        (enqures) =>
          enqures.city.toLowerCase() === city.toLowerCase() &&
          enqures.Seletedlefcategory.toLowerCase() === categories.toLowerCase()
      );
    }
  };

  const filteredEnquires =
    selectedCity || selectedCategories
      ? filterEnquiresByLocation(allEnquiryes, selectedCity, selectedCategories)
      : allEnquiryes;

  useEffect(() => {
    enquesies(token);
  }, []);

  return (
    <>
      {/* Fillter section start */}
      <div>
        <LocationFillter />
      </div>
      <div className={style.EnquiresComponent_fillter_Section}>
        <div className={style.EnquiresComponent_search_fillter_Bar_Box}>
          <div
            className={style.Search_filter_bar_Location}
            onClick={handleShowLocation}
          >
            <div className={style.fillter_iconBox}>
              <FontAwesomeIcon icon={faFilter} />
            </div>
            <div> Location {selectedCity}</div>
          </div>
          <div className={style.Categories_fillter_bar}>Categories</div>
          <div className={style.Time_Fillter_Bar}>Time</div>
        </div>
        <div className={style.EnquiresComponent_tab_fillter_bar_Box}>
          <div>Default</div>
          <div>Recent</div>
          <div>Sort</div>
        </div>
      </div>

      {/* List of Lead Section start */}
      <div>
        <LeadCards allEnquiryes={filteredEnquires} />
      </div>
      {/* List of Leads Section End */}
    </>
  );
}
