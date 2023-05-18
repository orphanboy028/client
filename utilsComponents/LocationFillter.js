import React, { useContext, useEffect, useState } from "react";
import style from "./css/LocationFillter.module.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { EnquiryContext } from "../ContaxtApi/EnquiryContaxApi";
import Badge from "react-bootstrap/Badge";
import { ExternalApiContaxt } from "../ContaxtApi/ExternalConaxt/ExternalContaxtApi";
import LocationInput from "./LocationInput";

export default function LocationFillter({
  handelSelect,
  title,
  showProps,
  handelClose,
}) {
  // API LOCATION

  const {
    enquesies,
    allEnquiryes,
    setSelectedCity,
    locationFillterShow,
    handleCloseLocation,
    handleShowLocation,
  } = useContext(EnquiryContext);

  return (
    <>
      <Offcanvas
        show={locationFillterShow}
        onHide={handleCloseLocation}
        placement="top"
        className={style.Offcanvas_container_Style}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={style.location_fillter_container}>
            <div className={style.Search_Location_offcanvasBox}>
              <div className={style.result_Badge_Box}>
                <div className={style.Badge_Box}>
                  <Badge
                    bg="secondary"
                    className={style.OffCanvasResult_Badge_Style}
                  ></Badge>{" "}
                </div>
              </div>

              <div className={style.search_Input_list}>
                <div className={style.Location_searchInput_Box}>
                  <LocationInput handelSelect={handelSelect} />
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
