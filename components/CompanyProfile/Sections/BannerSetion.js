import React from "react";
import style from "../css/BannerSetion.module.css";

export default function BannerSetion() {
  return (
    <>
      <div className={style.BannerSetion_container}>
        <div className={style.BannerSetion_innerContainer}>
          <div className={style.BannerSetion_hedingBox}>
            <h2>Explore your Product</h2>
            <p>
              Wholesaler of testing equipment, pharma equipment & spot welding
              machine since 2015 in Gurugram, Haryana.
            </p>
          </div>
          <div className={style.BannerSetion_btn_Box}>
            <button>Explore Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
