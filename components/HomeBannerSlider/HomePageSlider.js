import React from "react";
import Head from "next/head";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import slider1 from "../../public/banners-images/banner4.png";
import slider2 from "../../public/banners-images/slider2.jpg";
import Banner3 from "../../public/banners-images/Banner3.png";

import "swiper/css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import style from "./css/HomePageSlide.module.css";

export default function HomePageSlider() {
  return (
    <>
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
          <SwiperSlide className={style.SwiperSlideStyle}>
            <Image
              className={style.slider_image}
              src={slider1}
              alt="slider-banner"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={style.slider_image}
              src={Banner3}
              alt="slider-banner"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
