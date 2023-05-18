import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import style from "../css/ProductList.module.css";
import webBanner from "../../../public/banners-images/Product-page-top-banner.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

import { ProductContext } from "../../../ContaxtApi/ProductContextApi";
import { AppUtilsContext } from "../../../ContaxtApi/AppUtilsContaxApi";
import { EnquiryContext } from "../../../ContaxtApi/EnquiryContaxApi";
import { ExternalApiContaxt } from "../../../ContaxtApi/ExternalConaxt/ExternalContaxtApi";
import Spinner from "react-bootstrap/Spinner";
import AppElementFillter from "../../../utilsComponents/AppElementFillter";
import LocationListBar from "../../../utilsComponents/LocationListBar";

export default function ProductList() {
  const router = useRouter();
  const { q } = router.query;
  const {
    selectedCity,
    setSelectedCity,
    selectDistric,
    setselectDistric,
    setstateSlected,
    stateSlected,
  } = useContext(ExternalApiContaxt);
  const { allProducts, getSearchProduct } = useContext(ProductContext);
  const {
    appFillterShow,
    setappFillterShow,
    handleInputChange,
    formData,
    setFormData,
  } = useContext(AppUtilsContext);
  const { setselectedCategories, selectedCategories } =
    useContext(EnquiryContext);
  // console.log(allProducts);

  const handleShow = () => setappFillterShow(true);

  function handleSubmit(event) {
    event.preventDefault();

    let modifiedFormData = { ...formData };
    // Modify the formData object to include the "lefCategories" property
    if (selectedCategories !== null) {
      modifiedFormData = { ...formData, lefCategory: selectedCategories };
    }
    if (selectedCity !== null) {
      modifiedFormData = { ...formData, city: selectedCity };
    }

    if (selectDistric !== null) {
      modifiedFormData = { ...formData, district: selectDistric };
    }

    if (stateSlected !== null) {
      modifiedFormData = { ...formData, state: stateSlected };
    }

    const query = Object.entries(modifiedFormData)
      .filter(([, value]) => value !== "") // Filter out fields with empty values
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");

    router.push(`/products?${query}`);
    setappFillterShow(false);
    setselectedCategories(null);
    setSelectedCity(null);
    setselectDistric(null);
    setstateSlected(null);
  }

  // handel City redirect
  const handelProductListByCity = (e) => {
    console.log(e.target.textContent);
    const cityName = e.target.textContent;
    router.push(`/products?city=${cityName}`);
  };

  return (
    <>
      <AppElementFillter
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        filterFor="Product"
      />
      {allProducts.length > 0 ? (
        <>
          <div className={style.ProductList_Banner_Container}>
            <div className={style.ProductList_Banner_ImageBox}>
              <Image src={webBanner} fill alt="Product-page-banner" />
            </div>
          </div>
          {/* search bar section start */}
          <div className={style.ProductList_search_locationBar_Container}>
            <LocationListBar
              handelAppFillterShow={handleShow}
              handelCity={handelProductListByCity}
            />
          </div>
          {/* Search Bar section End */}

          <div className={style.ProductList_main_Container}>
            <div className={style.ProductList_left_sideBar}></div>
            <div className={style.product_centerBox}>
              {allProducts.map((product, i) => {
                return (
                  <>
                    <div className={style.card_container}>
                      <div className={style.productImage_Box}>
                        <Image
                          src={`/product-feature-imges/${product.images[0].url}`}
                          fill
                          alt={`${product.images[0].altText}`}
                        />
                      </div>
                      <div className={style.product_Card_Body}>
                        <div className={style.Product_titleBox}>
                          {product?.name}
                        </div>
                        <div className={style.product_descreptionBox}>
                          <p>{product?.description.substring(0, 80)}</p>
                        </div>

                        <div className={style.product_card_ComapnyDetails_Box}>
                          <div className={style.Product_CompanyName_Box}>
                            {product?.user?.businessDetails.CompanyName}
                          </div>
                          <div className={style.Product_company_LocationBox}>
                            <span> Gurgaon</span> <span>/</span>
                            <span> Harryana</span>
                          </div>
                        </div>

                        <div className={style.product_priceBox}>
                          <div className={style.price_TextBox}>
                            <span>
                              <FontAwesomeIcon icon={faIndianRupeeSign} />
                            </span>
                            {product?.price}
                          </div>
                          <div className={style.card_Btn_BOX}>
                            <button>
                              <Link
                                href={`/products/Product-details/${product.slug}`}
                                style={{
                                  color: "#ffff",
                                  textDecoration: "none",
                                }}
                              >
                                Enquery
                              </Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {(i + 1) % 3 === 0 && (
                      <div className={style.Product_card_Banner_Container}>
                        <div className={style.Product_card_Banner_ImageBox}>
                          <Image
                            src={webBanner}
                            fill
                            alt="Product-page-banner"
                          />
                        </div>
                      </div>
                    )}
                  </>
                );
              })}
            </div>
            <div className={style.ProductList_rightBox}></div>
          </div>
        </>
      ) : (
        <>
          <div className={style.ProductSpiner_Container}>
            <Spinner animation="grow" variant="info" size="sm" />
            <Spinner animation="grow" variant="info" size="sm" />
            <Spinner animation="grow" variant="info" size="sm" />
          </div>
        </>
      )}
    </>
  );
}
