import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import style from "../css/ProductList.module.css";
import webBanner from "../../../public/banners-images/Product-page-top-banner.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
  faLocationCrosshairs,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import { locationList } from "../../FormData/location.js";

import productImage from "../../../public/product-feature-imges/user-64318e457993fb3620054341-1681334334557.jpeg";
import Link from "next/link";

import { ProductContext } from "../../../ContaxtApi/ProductContextApi";
import { AppUtilsContext } from "../../../ContaxtApi/AppUtilsContaxApi";
import Spinner from "react-bootstrap/Spinner";
import AppElementFillter from "../../../utilsComponents/AppElementFillter";

export default function ProductList() {
  const router = useRouter();
  const { q } = router.query;
  const { allProducts, getSearchProduct } = useContext(ProductContext);
  const { appFillterShow, setappFillterShow } = useContext(AppUtilsContext);
  // console.log(allProducts);

  const handleShow = () => setappFillterShow(true);

  return (
    <>
      <AppElementFillter />
      {allProducts.length > 0 ? (
        <>
          <div className={style.ProductList_Banner_Container}>
            <div className={style.ProductList_Banner_ImageBox}>
              <Image src={webBanner} fill alt="Product-page-banner" />
            </div>
          </div>
          {/* search bar section start */}
          <div className={style.ProductList_search_locationBar_Container}>
            <div className={style.location_RightBox}>
              {/* Location Box start */}
              <div className={style.locationBox}>
                <div className={style.locationIconBox}>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ color: "#ed747a" }}
                    size="2x"
                  />
                </div>
                <div
                  className={style.Location_TextBox}
                  style={{ cursor: "pointer" }}
                  onClick={handleShow}
                >
                  Location
                </div>
              </div>
              {/* Location Box End */}
              {/* search Input start */}
              {/* <div className={style.location_SearchBox}>
                <input type="text" />
                <div className={style.location_SerachIconBox}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{ color: "#cbced2" }}
                    size="1x"
                  />
                </div>
              </div> */}
              {/* search Input End */}
            </div>
            <div className={style.location_cityBox}>
              {locationList.map((city, i) => {
                return (
                  <>
                    <div className={style.cityBox}>{city.name}</div>
                  </>
                );
              })}
            </div>
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
