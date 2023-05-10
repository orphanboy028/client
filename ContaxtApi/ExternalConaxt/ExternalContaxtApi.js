import { createContext, useEffect, useState } from "react";
import { nominatimsearchAPI } from "../../Actions/externalApi/externalApi";

export const ExternalApiContaxt = createContext();

export const EXternalApiProvider = ({ children }) => {
  const [locationResult, setlocationResult] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [stateSlected, setstateSlected] = useState(null);
  const [selectDistric, setselectDistric] = useState(null);
  const [districLocationFillterShow, setdistricLocationFillterShow] =
    useState(false);
  const [cityLocationFillterShow, setcityLocationFillterShow] = useState(false);
  const [stateLocationFilltershow, setstateLocationFilltershow] =
    useState(false);

  const nominatimsearchAPIAction = async (query) => {
    try {
      const result = await nominatimsearchAPI(query);

      setlocationResult(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Clear city
  const handelClearCity = () => {
    setSelectedCity(null);
  };

  // Open Location Fillter according to location
  const handleDistricShowLocation = () => {
    setdistricLocationFillterShow(true);
  };
  const handleCityShowLocation = () => setcityLocationFillterShow(true);
  const handleStateShowLocation = () => {
    setstateLocationFilltershow(true);
  };

  // Close Location Fillter according to location
  const handleDistricCloseLocation = () => {
    setdistricLocationFillterShow(false);
  };
  const handleCityCloseLocation = () => setcityLocationFillterShow(false);

  const handleStateCloseLocation = () => setstateLocationFilltershow(false);

  const handelSelect = (e) => {
    console.log(e.target.textContent);
    const city = e.target.textContent.split(",")[0].trim();
    const district = e.target.textContent.split(",")[1].trim();
    const state = e.target.textContent.split(",")[2].trim();
    setSelectedCity(city);
    setselectDistric(district);
    setstateSlected(state);
  };

  const handelSelectCity = (e) => {
    console.log(e.target.textContent);
    const city = e.target.textContent.split(",")[0].trim();
    console.log("city Extract", city);

    setSelectedCity(city, () => {
      console.log("selected city", selectedCity);
    });
  };

  const handelSelectDistric = (e) => {
    const district = e.target.textContent.split(",")[1].trim();
    console.log(district);
    setselectDistric(district);
  };

  const handelSelectState = (e) => {
    const state = e.target.textContent.split(",")[0].trim();
    setstateSlected(state);
  };

  return (
    <>
      <ExternalApiContaxt.Provider
        value={{
          nominatimsearchAPIAction,
          locationResult,
          handelSelect,
          selectedCity,
          stateSlected,
          selectDistric,
          setSelectedCity,
          setselectDistric,
          setstateSlected,
          handelClearCity,
          handleCityShowLocation,
          handleDistricShowLocation,
          handleStateShowLocation,
          handleDistricCloseLocation,
          handleCityCloseLocation,
          handleStateCloseLocation,
          cityLocationFillterShow,
          districLocationFillterShow,
          stateLocationFilltershow,
          handelSelectCity,
          handelSelectDistric,
          handelSelectState,
        }}
      >
        {children}
      </ExternalApiContaxt.Provider>
    </>
  );
};
