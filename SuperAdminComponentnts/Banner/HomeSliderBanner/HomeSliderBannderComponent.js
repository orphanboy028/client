import React, { useContext, useEffect } from "react";
import style from "../css/AdminHomeSlider.module.css";
import SliderSample from "./SliderSample";
import SliderForm from "./SliderForm";
import RenderHomeSlideList from "./RenderHomeSlideList";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import { BannerContext } from "../../../ContaxtApi/superAdminContext/BannerContextApi";

export default function HomeSliderBannderComponent() {
  const { token, loginUser } = useContext(UserContext);
  const { getListHomeSliderBannerAction, loading } = useContext(BannerContext);

  useEffect(() => {
    getListHomeSliderBannerAction(token);
  }, [loading]);
  return (
    <>
      <div className={style.HomeSliderBannderComponent_Main_Container}>
        <div className={style.HomeBanner_Slider_Stats_Container}>
          <h5>Stats</h5>
        </div>
        <div className={style.Home_Sample_slider_container}>
          <SliderSample />
        </div>
        <div className={style.Slider_form_container}>
          <SliderForm />
        </div>
        <div className={style.HomeSlider_Lists_Container}>
          <RenderHomeSlideList />
        </div>
      </div>
    </>
  );
}
