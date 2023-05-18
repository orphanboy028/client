import React, { useState } from "react";
import { useRouter } from "next/router";
import style from "./css/NavBarSeachInput.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";

export default function NavBarSearchInput() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handelSearchOnEnter = (event) => {
    if (event.key === "Enter") {
      // Call your function here
      handleSearch(event);
    }
  };
  // Hendel Search
  const handleSearch = (e) => {
    e.preventDefault();

    if (query.trim() !== "") {
      router.push(`/products?q=${encodeURIComponent(query)}`);
    }
  };
  return (
    <>
      <div className={style.search_InputBox}>
        <input
          type={"text"}
          placeholder="search your query"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handelSearchOnEnter}
        />
        <div className={style.search_iconBox}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#2874f0" }}
            className={style.search_icon}
            onClick={handleSearch}
          />
        </div>
      </div>
    </>
  );
}
