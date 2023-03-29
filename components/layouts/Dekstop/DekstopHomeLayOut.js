import React from "react";
import DCategoriesSlider from "../../CategoriesSlider/Dekstop/DCategoriesSlider";
import DekstopNavBar from "../../NavBar/Dekstop/DekstopNavBar";

export default function DekstopHomeLayOut({ children }) {
  return (
    <>
      <div>
        <div>
          <DekstopNavBar />
          <DCategoriesSlider />
        </div>
        <div>{children}</div>
        <div>Footer</div>
      </div>
    </>
  );
}
