import React, { useContext, useEffect, useState } from "react";
import style from "../css/LocationFillter.module.css";
import searchLocation from "../../FormData/searchLocation.json";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { EnquiryContext } from "../../../ContaxtApi/EnquiryContaxApi";

export default function LocationFillter() {
  // API LOCATION
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [stateSlected, setstateSlected] = useState(null);
  const [citySlected, setcitySlected] = useState(null);

  const handleQueryChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    // only search when query is at least 3 characters long
    if (value.length >= 3) {
      search(value);
    }
  };

  const search = (query) => {
    const endpoint = `https://nominatim.openstreetmap.org/search?q=${query}&format=json`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setResults(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const {
    enquesies,
    allEnquiryes,
    selectedCity,
    setSelectedCity,
    locationFillterShow,
    handleCloseLocation,
    handleShowLocation,
  } = useContext(EnquiryContext);

  const handelSelect = (e) => {
    console.log(e.target.textContent);
    const city = e.target.textContent.split(",")[0].trim();
    const state = e.target.textContent.split(",")[1].trim();
    setSelectedCity(city);
    setstateSlected(state);
  };

  return (
    <>
      <Offcanvas
        show={locationFillterShow}
        onHide={handleCloseLocation}
        placement="top"
        className={style.Offcanvas_container_Style}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Search Location</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={style.location_fillter_container}>
            <div className={style.Search_Location_offcanvasBox}>
              <div>
                Result:- {citySlected}-{stateSlected}
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
                  {results.map((result) => (
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
