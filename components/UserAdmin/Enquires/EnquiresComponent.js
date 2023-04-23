import React, { useContext, useEffect, useState } from "react";
import LeadCards from "./LeadCards";
import style from "../css/Enquires.module.css";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import { EnquiryContext } from "../../../ContaxtApi/EnquiryContaxApi";
import LocationFillter from "./LocationFillter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Badge from "react-bootstrap/Badge";
import CategoriesFillter from "./CategoriesFillter";
import CategoriesModel from "../../../utilsComponents/CategoriesModel";
import { AppUtilsContext } from "../../../ContaxtApi/AppUtilsContaxApi";
import CloseButton from "react-bootstrap/CloseButton";
import SortFillter from "./SortFillter";

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
    handleShowCategories,
    slectedEnquieryCategories,
    setslectedEnquieryCategories,
    handelClearLocation,
    handelClearCategories,
  } = useContext(EnquiryContext);

  const {
    showModel,
    setshowModel,
    handleModelClose,
    handleModelShow,
    selectedItem,
    setSelectedItem,
  } = useContext(AppUtilsContext);

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
        <CategoriesModel
          setSelectedItem={setselectedCategories}
          as="setSelectedItem"
        />
      </div>
      <div className={style.EnquiresComponent_selected_ItemBox}>
        <div className={style.EnquiresComponent_selecte_badgeBox}>
          {selectedCity ? (
            <>
              <Badge
                bg="secondary"
                className={style.EnquiresComponent_selected_badgeStyle}
              >
                Location - {selectedCity}
                <CloseButton
                  variant="white"
                  className={style.Badge_closeBtn_style}
                  onClick={handelClearLocation}
                />
              </Badge>{" "}
            </>
          ) : (
            " "
          )}
        </div>
        <div className={style.EnquiresComponent_selecte_badgeBox}>
          {selectedCategories ? (
            <>
              <Badge
                bg="secondary"
                className={style.EnquiresComponent_selected_badgeStyle}
              >
                selected Categoroies - {selectedCategories}
                <CloseButton
                  variant="white"
                  className={style.Badge_closeBtn_style}
                  onClick={handelClearCategories}
                />
              </Badge>{" "}
            </>
          ) : (
            " "
          )}
        </div>
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
            <div> Location </div>
          </div>
          <div
            className={style.Categories_fillter_bar}
            onClick={handleModelShow}
          >
            <div className={style.fillter_iconBox}>
              <FontAwesomeIcon icon={faFilter} />
            </div>
            <div> Categories</div>
          </div>
        </div>
        <div className={style.EnquiresComponent_tab_fillter_bar_Box}>
          <SortFillter />
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
