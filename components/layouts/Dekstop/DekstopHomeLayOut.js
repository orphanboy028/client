import React from "react";
import DekstopNavBar from "../../NavBar/Dekstop/DekstopNavBar";

export default function DekstopHomeLayOut({ children }) {
  return (
    <>
      <div>
        <div>
          <DekstopNavBar />
        </div>
        <div>{children}</div>
        <div>Footer</div>
      </div>
    </>
  );
}
