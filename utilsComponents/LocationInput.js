import React, { useContext, useEffect, useState } from "react";
import style from "../components/UserAdmin/css/LocationFillter.module.css";
import { ExternalApiContaxt } from "../ContaxtApi/ExternalConaxt/ExternalContaxtApi";

export default function LocationInput({ handelSelect }) {
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
  return (
    <>
      <div>
        <input
          type="text"
          value={query}
          onChange={handleQueryChange}
          placeholder="Search Location"
        />
      </div>
      <div>
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
    </>
  );
}
