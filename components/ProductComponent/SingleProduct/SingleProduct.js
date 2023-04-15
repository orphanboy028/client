import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import style from "../css/SingleProduct.module.css";
import Image from "next/image";
import productImage from "../../../public/product-feature-imges/user-64318e457993fb3620054341-1680969454724.png";
import companyLog from "../../../public/Company-logo/user-64286c5d2ec85503a0ae4219-1680783895667.png";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupeeSign,
  faUser,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import { ProductContext } from "../../../ContaxtApi/ProductContextApi";

export default function SingleProduct() {
  const { getSingleProduct, singleProduct } = useContext(ProductContext);
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);

  useEffect(() => {
    getSingleProduct(slug);
  }, [slug]);

  return (
    <>
      <div className={style.SingleProduct_top_container}>
        <div className={style.SingleProduct_Image_container}>
          <div className={style.SingleProduct_ImageBox}>
            <Image src={productImage} alt="product-image" width={200} />
          </div>
        </div>
        <div className={style.SingleProduct_detail_container}>
          <div>
            <h1>{singleProduct?.name}</h1>
          </div>
          <div className={style.SingleProduct_PriceBox}>
            <h2>
              <span className={style.SingleProduct_Rs_iconBox}>
                <FontAwesomeIcon icon={faIndianRupeeSign} size="2x" />
              </span>
              <span>{singleProduct?.price}</span>
            </h2>
          </div>
          <div className={style.SingleProduct_descreptionBox}>
            <p>{singleProduct?.description}</p>
          </div>
          <div className={style.SingleProduct_btnBox}>
            <div className={style.SingleProduct_enquiryBtn}>Enquery</div>
            <div className={style.SingleProduct_ReadBtn}>Read more</div>
          </div>
        </div>
        <div className={style.SingleProduct_companyDetails_container}>
          <div>
            <h3>Seller Details</h3>
          </div>
          <div className={style.SingleProduct_comppany_logo_with_Gst}>
            <div className={style.SingleProduct_companyLogoBox}>
              <Image src={companyLog} width={70} />
            </div>
            <div className={style.SingleProduct_company_Title}>
              S V Technologies
            </div>
          </div>
          <div className={style.SingleProduct_GstBox}>
            <h4>GST</h4>
            <h4>24AADFW7998Q1ZZ</h4>
          </div>
          <div className={style.SingleProduct_ownerDetails}>
            <div className={style.SingleProduct_Owner_StaticBox}>
              <div className={style.SingleProduct_ownerIconBox}>
                <span>
                  <FontAwesomeIcon icon={faUser} size="2x" />
                </span>
              </div>
              <div className={style.SingleProduct_static_Owner}>Owner</div>
            </div>
            <div>Mr Chirag Vasani</div>
          </div>
          <div className={style.SingleProduct_static_Box}>
            <div className={style.SingleProduct_static_AddressBox}>
              <div className={style.SingleProduct_static_addressIcon}>
                <FontAwesomeIcon icon={faLocationDot} size="2x" />
              </div>
              <div className={style.SingleProduct_static_Address}>Adreess</div>
            </div>
            <div>
              <p>
                Plot No. 28, Srushti Ind Estate, B/H Hotel Horizon, Kadodara to
                Bardoli Road, Kadodara, Surat, Gujarat, 394327, India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Product Start */}
      <div className={style.SingleProduct_realted_prductContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el, i) => {
          return (
            <>
              <div className={style.Related_Product_CardContainer}>
                <div className={style.Realted_CardImageBox}>
                  <Image src={productImage} width={100} />
                </div>
                <div className={style.SingleProduct_Related_Card_title}>
                  <h5>Mild Steel CNC Turning Fixtures</h5>
                </div>
                <div className={style.SingleProduct_Related_Card_PriceBox}>
                  <div>
                    <span className={style.SingleProduct_Rs_iconBox}>
                      <FontAwesomeIcon icon={faIndianRupeeSign} size="2x" />
                    </span>
                    <span>13,600</span>
                  </div>
                </div>
                <div className={style.SingleProduct_RelatedProduct_card_BtnBox}>
                  <div className={style.SingleProduct_RelatedProduct_CardBtn}>
                    Details
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {/* Related Product End */}

      {/* Product main Details Container Start */}
      <div className={style.SingleProduct_Main_detailContainer}>
        <div className={style.SingleProduct_main_Details_container}>
          <Tabs
            defaultActiveKey="ProductDetails"
            transition={true}
            id="noanim-tab-example"
            className="mb-3"
          >
            <Tab eventKey="ProductDetails" title="Product Details">
              <div className={style.SingleProduct_ProductDetails_Container}>
                <div className={style.SingleProduct_ProductDetails_Title}>
                  <h2> Product Details</h2>
                </div>
                {singleProduct.properties ? (
                  Object.keys(singleProduct?.properties).map((names, i) => {
                    return (
                      <>
                        <div
                          className={style.SingleProduct_ProductDetails_Box}
                          key={i}
                        >
                          <div
                            className={
                              style.SingleProduct_ProductDetails_staticFiled
                            }
                          >
                            <h5>{names}</h5>
                          </div>
                          <div
                            className={
                              style.SingleProduct_ProductDetails_DynimicValue
                            }
                          >
                            <h5>{singleProduct?.properties[names]}</h5>
                          </div>
                        </div>
                      </>
                    );
                  })
                ) : (
                  <>
                    <p>No properties available.</p>
                  </>
                )}
              </div>
            </Tab>
            <Tab eventKey="CompanyDetails" title="Company Details">
              <h1>Company Details"</h1>
            </Tab>
          </Tabs>
        </div>
        <div className={style.SingleProduct_Enquery_Form_Container}>
          <div className={style.SingleProduct_EnqueryForm}>
            <div className={style.SingleProduct_EnqueryForm_Heading}>
              <h4>Send your enquiry to this supplier</h4>
            </div>
            <div className={style.SingleProduct_EnqueryForm_UserMail_container}>
              <div className={style.Enquery_To}>To</div>
              <div className={style.EnqueryForm_EmailBox}>
                Bhakti EnterPrises
              </div>
            </div>
            <div className={style.SingleProduct_EnqueryForm_ProductDetails}>
              <div className={style.SingleProduct_EnqueryForm_imageBox}>
                <Image src={productImage} width={50} />
              </div>
              <div className={style.Enquery_Form_ProductTitle}>
                <h5>Mild Steel CNC Turning Fixtures </h5>
              </div>
            </div>
            <div className={style.SingleProduct_mesasageContainer}>
              <textarea rows={10} placeholder="wirte message here" />
            </div>
            <div className={style.Email_Send_btnBox}>
              <div className={style.Enquery_Email_Send_btn}>Send Email</div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.endPart}></div>
      {/* Product main Details Container Start */}
    </>
  );
}
