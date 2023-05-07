import React, { useContext } from "react";
import style from "../css/AdminHomeSlider.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import bannersample from "../../../public/banners-images/HomePageSilder-banners/slideer-sample.png";
import "swiper/css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faTrash,
  faDeleteLeft,
} from "@fortawesome/free-solid-svg-icons";

import { BannerContext } from "../../../ContaxtApi/superAdminContext/BannerContextApi";

export default function SliderSample() {
  const { imagePreviews, handleImageRemove, handleImageAdd } =
    useContext(BannerContext);
  return (
    <>
      <div className={style.SliderSample_Main_container}>
        <div className={style.HomePageSlider_main_Container}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className={style.SwiperStyle}
          >
            {imagePreviews.length > 0 ? (
              imagePreviews.map((imagePreview, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={imagePreview}
                    alt={`Preview ${index}`}
                    className={style.slider_image}
                  />
                </SwiperSlide>
              ))
            ) : (
              <>
                <SwiperSlide>
                  <Image
                    className={style.slider_image}
                    src={bannersample}
                    alt="slider-banner"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className={style.slider_image}
                    src={bannersample}
                    alt="slider-banner"
                  />
                </SwiperSlide>
              </>
            )}
          </Swiper>
        </div>

        <div className={style.SliderSample_imageUpload_Box}>
          {Array.from({ length: 3 }, (_, index) => (
            <div className={style.Image_Upload_BarBox}>
              <div className={style.FileInputBox}>
                <div className={style.camera_IconBox}>
                  <FontAwesomeIcon
                    icon={faCamera}
                    size="2x"
                    style={{ color: "#fff" }}
                  />
                </div>
                <div className={style.file_input_filed}>
                  <input
                    type="file"
                    name="Silderimages"
                    onChange={(event) => handleImageAdd(event, index)}
                  />
                </div>
              </div>
              <div className={style.image_Change_inputBox}>
                <div className={style.image_Change_inputBox}>
                  <div className={style.change_IconBox}>
                    <FontAwesomeIcon
                      icon={faTrash}
                      size="2x"
                      style={{ color: "#fff" }}
                    />{" "}
                  </div>
                  <div className={style.changeTxt}>Change Image</div>
                  <div className={style.file_input_filed}>
                    <input
                      type="file"
                      name="Silderimages"
                      onChange={(event) => handleImageAdd(event, index)}
                    />
                  </div>
                </div>
              </div>
              <div className={style.Image_changeBox}>
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => handleImageRemove(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
