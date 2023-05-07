import React, { useContext } from "react";
import TrendingCategories from "./TrendingCategories";
import FeaturedProducts from "./FeaturedProducts";
import style from "./css/HomePageComponent.module.css";
import EnqueryForm from "../../utilsComponents/EnqueryForm";
import Image from "next/image";
import trandingbanner from "../../public/banners-images/tranding-banner.png";
import { UserContext } from "../../ContaxtApi/UserContaxApi";
import { ProductContext } from "../../ContaxtApi/ProductContextApi";

export default function HomePageComponent() {
  const { loginUser } = useContext(UserContext);
  const { allProducts } = useContext(ProductContext);

  // console.log(allProducts);

  // Latest Product
  const latestProducts =
    allProducts &&
    allProducts
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 10);

  // Lates Updated Product
  const latestUpdated =
    allProducts &&
    allProducts
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
      .slice(0, 10);

  return (
    <>
      <div className={style.HomePageComponent_section_box}>
        <TrendingCategories />
      </div>
      <div className={style.Home_page_Banner_Container}>
        <div className={style.Home_page_annerBox}>
          <Image src={trandingbanner} alt="Tranding Banner" fill />
        </div>
      </div>
      <div className={style.HomePageComponent_section_box}>
        <FeaturedProducts products={latestUpdated} title="Lates Updated" />
      </div>

      <div className={style.Home_page_Banner_Container}>
        <div className={style.Home_page_annerBox}>
          <Image src={trandingbanner} alt="Tranding Banner" fill />
        </div>
      </div>

      <div className={style.HomePageComponent_section_box}>
        <FeaturedProducts products={latestProducts} title="Recent Product" />
      </div>
      <div className={style.HomePageComponent_section_box}>
        <EnqueryForm />
      </div>
    </>
  );
}
