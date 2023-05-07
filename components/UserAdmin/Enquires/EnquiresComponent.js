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
import { ExternalApiContaxt } from "../../../ContaxtApi/ExternalConaxt/ExternalContaxtApi";
import DistricFillter from "./DistricFillter";
import StateFillter from "./StateFillter";
import { filterEnquiresByLocation } from "../../../utilsComponents/logics/filterEnquires";

export default function EnquiresComponent() {
  const { loginUser, token } = useContext(UserContext);
  const {
    selectDistric,
    setselectDistric,
    selectedCity,
    setSelectedCity,
    stateSlected,
    setstateSlected,
    handelClearCity,
    handleCityShowLocation,
    handleDistricShowLocation,
    handleStateShowLocation,
    handleDistricCloseLocation,
    handleCityCloseLocation,

    cityLocationFillterShow,
  } = useContext(ExternalApiContaxt);
  const {
    enquesies,
    allEnquiryes,
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

  useEffect(() => {
    enquesies(token);
  }, []);

  // const filterEnquiresByLocation = (
  //   allEnquiryes,
  //   city,
  //   Distric,
  //   state,
  //   categories
  // ) => {
  //   if (city && categories === null) {
  //     console.log("city && categories === null -1");
  //     return allEnquiryes.filter(
  //       (enqures) =>
  //         enqures?.city?.toLowerCase() === city.toLowerCase() ||
  //         enqures?.state?.toLowerCase() === city.toLowerCase()
  //     );
  //   } else if (city && state && categories === null) {
  //     console.log("city && state && categories === null -2");
  //     return allEnquiryes.filter(
  //       (enqures) =>
  //         enqures?.city?.toLowerCase() === city.toLowerCase() &&
  //         enqures?.state?.toLowerCase() === state.toLowerCase()
  //     );
  //   } else if (city && state && Distric && categories === null) {
  //     console.log("city && state && Distric && categories === null -3");
  //     return allEnquiryes.filter(
  //       (enqures) =>
  //         enqures?.city?.toLowerCase() === city.toLowerCase() &&
  //         enqures?.state?.toLowerCase() === state.toLowerCase() &&
  //         enqures?.district?.toLowerCase() === Distric.toLowerCase()
  //     );
  //   } else if (categories && city === null) {
  //     console.log("categories && city === null -4");
  //     return allEnquiryes.filter(
  //       (enqures) =>
  //         enqures.Seletedlefcategory.toLowerCase() === categories.toLowerCase()
  //     );
  //   } else if (city && state && Distric && categories) {
  //     console.log("city && state && Distric && categories -5");
  //     return allEnquiryes.filter(
  //       (enqures) =>
  //         enqures?.city?.toLowerCase() === city.toLowerCase() &&
  //         enqures?.state?.toLowerCase() === state.toLowerCase() &&
  //         enqures?.district?.toLowerCase() === Distric.toLowerCase() &&
  //         enqures?.Seletedlefcategory.toLowerCase() === categories.toLowerCase()
  //     );
  //   }

  //   return allEnquiryes;
  // };

  const filteredEnquires =
    selectedCity || selectDistric || stateSlected || selectedCategories
      ? filterEnquiresByLocation(
          allEnquiryes,
          selectedCity,
          selectDistric,
          stateSlected,
          selectedCategories
        )
      : allEnquiryes;

  const handelSelectCity = (e) => {
    console.log(e.target.textContent);
    const city = e.target.textContent.split(",")[0].trim();
    console.log("city Extract", city);

    setSelectedCity(city, () => {
      console.log("selected city", selectedCity);
    });
  };

  function handleRadioChange(event) {
    setSelectedItem(event.target.value);
    setselectedCategories(event.target.value);
  }

  return (
    <>
      {/* Fillter section start */}
      <div>
        <LocationFillter
          handelSelect={handelSelectCity}
          title="Search city"
          showProps={cityLocationFillterShow}
          handelClose={handleCityCloseLocation}
        />
        <CategoriesModel
          setSelectedItem={setselectedCategories}
          as="setSelectedItem"
          handleRadioChange={handleRadioChange}
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
                Selected City - {selectedCity}
                <CloseButton
                  variant="white"
                  className={style.Badge_closeBtn_style}
                  onClick={handelClearCity}
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
            onClick={handleCityShowLocation}
          >
            <div className={style.fillter_iconBox}>
              <FontAwesomeIcon icon={faFilter} />
            </div>
            <div> City </div>
          </div>
          <div className={style.Search_filter_bar_wrapeer}>
            <DistricFillter />
          </div>

          <div className={style.Search_filter_bar_wrapeer}>
            <StateFillter />
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
