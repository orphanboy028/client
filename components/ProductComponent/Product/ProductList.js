import React from "react";
import style from "../css/ProductList.module.css";
import webBanner from "../../../public/banners-images/web-design.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";
import { locationList } from "../../FormData/location.js";

import productImage from "../../../public/product-feature-imges/user-64318e457993fb3620054341-1680969454724.png";

export default function ProductList() {
  return (
    <>
      <div className={style.ProductList_Banner_Container}>
        <div className={style.ProductList_Banner_ImageBox}>
          <Image src={webBanner} width={600} />
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
            <div className={style.Location_TextBox}>Location</div>
          </div>
          {/* Location Box End */}
          {/* search Input start */}
          <div className={style.location_SearchBox}>
            <input type="text" />
            <div className={style.location_SerachIconBox}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "#cbced2" }}
                size="1x"
              />
            </div>
          </div>
          {/* search Input End */}
          <div className={style.nearMeBox}>
            <div className={style.nearMe_Icon}>
              <FontAwesomeIcon icon={faLocationCrosshairs} size="2x" />
            </div>
            <div className={style.nearMe_texBoxt}>Near Me</div>
          </div>
        </div>
        <div className={style.location_cityBox}>
          <div className={style.MobilenearMeBox}>
            <div className={style.nearMe_Icon}>
              <FontAwesomeIcon icon={faLocationCrosshairs} size="2x" />
            </div>
            <div className={style.nearMe_texBoxt}>Near Me</div>
          </div>
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
        <div className={style.ProductList_left_sideBar}>Left Bar</div>
        <div className={style.product_centerBox}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product, i) => {
            return (
              <>
                <div className={style.card_container}>
                  <div className={style.productImage_Box}>
                    <Image src={productImage} width={100} alt="Product-Image" />
                  </div>
                  <div className={style.product_Card_Body}>
                    <div className={style.Product_titleBox}>
                      Turning Fixture
                    </div>
                    <div className={style.product_descreptionBox}>
                      <p>
                        In publishing and graphic design, Lorem ipsum is a
                        placeholder text
                      </p>
                    </div>

                    <div className={style.product_priceBox}>
                      <div className={style.price_TextBox}>5550</div>
                      <div className={style.card_Btn_BOX}>
                        <button>Enquery</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className={style.ProductList_rightBox}>right box</div>
      </div>
    </>
  );
}
