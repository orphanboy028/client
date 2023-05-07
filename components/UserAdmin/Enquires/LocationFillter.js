import React, { useContext, useEffect, useState } from "react";
import style from "../css/LocationFillter.module.css";
import searchLocation from "../../FormData/searchLocation.json";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { EnquiryContext } from "../../../ContaxtApi/EnquiryContaxApi";
import Badge from "react-bootstrap/Badge";
import { ExternalApiContaxt } from "../../../ContaxtApi/ExternalConaxt/ExternalContaxtApi";

export default function LocationFillter({
  handelSelect,
  title,
  showProps,
  handelClose,
}) {
  const { nominatimsearchAPIAction, locationResult } =
    useContext(ExternalApiContaxt);
  // API LOCATION
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleQueryChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value.length >= 3) {
      nominatimsearchAPIAction(value);
    }
  };

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
        show={showProps}
        onHide={handelClose}
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
                  >
                    {" "}
                    {/* {selectedCity} - {selectDistric} - {stateSlected} */}
                  </Badge>{" "}
                </div>
              </div>

              <div className={style.search_Input_list}>
                <div className={style.Location_searchInput_Box}>
                  <input
                    type="text"
                    value={query}
                    onChange={handleQueryChange}
                    placeholder="Search Location"
                  />
                </div>

                <ul className={style.searchListUl}>
                  {locationResult.map((result) => (
                    <li
                      className={style.SearchList}
                      key={result.place_id}
                      onClick={(e) => handelSelect(e)}
                    >
                      <p>{result.display_name} </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* <div>
            <input
              type="text"
              value={selectedCity}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            <ul>
              {locations.map((location, index) => (
                <li key={index} onClick={() => setSelectedCity(location.city)}>
                  {location.city}, {location.state}
                </li>
              ))}
            </ul>
          </div> */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
