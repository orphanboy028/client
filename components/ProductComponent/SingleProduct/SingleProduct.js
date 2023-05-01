import React, { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import style from "../css/SingleProduct.module.css";
import Image from "next/image";
import productImage from "../../../public/product-feature-imges/user-64318e457993fb3620054341-1682526069244.jpeg";
import companyLog from "../../../public/Company-logo/user-64286c5d2ec85503a0ae4219-1680783895667.png";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupeeSign,
  faUser,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { ProductContext } from "../../../ContaxtApi/ProductContextApi";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";

export default function SingleProduct() {
  const router = useRouter();
  const { slug } = router.query;
  const { token, loginUser } = useContext(UserContext);
  const {
    singleProduct,
    SendSingleproductEnqiiresAction,
    sendingEmail,
    setsendingEmail,
  } = useContext(ProductContext);

  const myRef = useRef(null);

  const scrollToSection = () => {
    window.scrollTo({
      top: myRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });

  const onSendEmail = async (formData) => {
    setsendingEmail(true);
    try {
      const result = await SendSingleproductEnqiiresAction(
        formData,
        token,
        slug
      );

      if (result.data.status === "Success") {
        setsendingEmail(false);
      }
      console.log(result);
    } catch (error) {}
  };

  // const checkEnquireStatus = () => {
  //   if (!singleProduct?.productEnquiries.length === 0) {
  //     return (
  //       <>
  //         <button className={style.Enquery_Email_Send_btn}>Send Email </button>
  //       </>
  //     );
  //   }
  //   return singleProduct.productEnquiries.map((id) => {
  //     if (id === loginUser._id) {
  //       return (
  //         <>
  //           <div>
  //             <p>Enquireny Sent please Chaeck the satus</p>
  //           </div>
  //         </>
  //       );
  //     } else {
  //       return (
  //         <>
  //           <button className={style.Enquery_Email_Send_btn}>
  //             Send Email{" "}
  //           </button>
  //         </>
  //       );
  //     }
  //   });
  // };

  // useEffect(() => {
  //   checkEnquireStatus();
  // }, [singleProduct]);

  return (
    <>
      <div className={style.SingleProduct_top_container}>
        <div className={style.SingleProduct_Image_container}>
          <div className={style.SingleProduct_ImageBox}>
            {singleProduct &&
              singleProduct.images &&
              singleProduct.images[0] && (
                <Image
                  src={`/product-feature-imges/${singleProduct?.images[0]?.url}`}
                  fill
                  alt={`${singleProduct?.images[0]?.altText}`}
                />
              )}
          </div>
        </div>
        <div className={style.SingleProduct_detail_container}>
          <div>
            <h1>{singleProduct?.name}</h1>
          </div>
          <div className={style.SingleProduct_PriceBox}>
            <h2>
              <span className={style.SingleProduct_Rs_iconBox}>
                <FontAwesomeIcon icon={faIndianRupeeSign} />
              </span>
              <span>{singleProduct?.price}</span>
            </h2>
          </div>
          <div className={style.SingleProduct_descreptionBox}>
            <p>{singleProduct?.description?.substring(0, 250)}</p>
          </div>
          <div className={style.SingleProduct_btnBox}>
            <div
              className={style.SingleProduct_enquiryBtn}
              onClick={scrollToSection}
            >
              Enquery
            </div>
          </div>
        </div>
        <div className={style.SingleProduct_companyDetails_container}>
          <div>
            <h3>Seller Details</h3>
          </div>
          <div className={style.SingleProduct_comppany_logo_with_Gst}>
            <div className={style.SingleProduct_companyLogoBox}>
              <Image src={companyLog} fill alt="Company-logo" />
            </div>
            <div className={style.SingleProduct_company_Title}>
              {singleProduct?.user?.businessDetails.CompanyName}
            </div>
          </div>
          <div className={style.singleProduct_GST_OWNER_Box}>
            <div className={style.SingleProduct_GstBox}>
              <h4>GST</h4>

              <h4> {singleProduct?.user?.businessDetails?.GstNumber}</h4>
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
              <div className={style.SingleProduct_Owner_NameBox}>
                {singleProduct?.user?.name}
              </div>
            </div>
          </div>

          <div className={style.SingleProduct_static_Box}>
            <div className={style.SingleProduct_static_AddressBox}>
              <div className={style.SingleProduct_static_addressIcon}>
                <FontAwesomeIcon icon={faLocationDot} size="2x" />
              </div>
              <div className={style.SingleProduct_static_Address}>Adreess</div>
            </div>
            <div className={style.singleProduct_Business_AddressBox}>
              <p>{singleProduct?.user?.businessDetails?.address}</p>
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
      <div className={style.SingleProduct_Main_detailContainer} ref={myRef}>
        <div className={style.SingleProduct_main_Details_container}>
          <Tabs
            defaultActiveKey="ProductDetails"
            transition={true}
            id="noanim-tab-example"
            className="mb-3"
          >
            <Tab
              eventKey="ProductDetails"
              title={
                <span style={{ color: "#2874f0", fontSize: "12px" }}>
                  Product Details
                </span>
              }
            >
              <div className={style.SingleProduct_ProductDetails_Container}>
                <div className={style.SingleProduct_ProductDetails_Title}>
                  <h3> Product Details</h3>
                </div>
                {singleProduct?.properties ? (
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
            <Tab
              eventKey="CompanyDetails"
              title={
                <span style={{ color: "#2874f0", fontSize: "12px" }}>
                  Company Details
                </span>
              }
            >
              <h3>Company Details</h3>
              <div
                className={style.singleProduct_company_Details_Tab_Container}
              >
                <div className={style.singleProduct_company_InfoBox}>
                  <div className={style.singleProduct_company_Info_staticBox}>
                    <h5>Company Name</h5>
                  </div>
                  <div className={style.singleProduct_company_Info_DynimicBox}>
                    <p>{singleProduct?.user?.businessDetails.CompanyName}</p>
                  </div>
                </div>

                <div className={style.singleProduct_company_InfoBox}>
                  <div className={style.singleProduct_company_Info_staticBox}>
                    <h5>Busiess Owner</h5>
                  </div>
                  <div className={style.singleProduct_company_Info_DynimicBox}>
                    <p>{singleProduct?.user?.name}</p>
                  </div>
                </div>

                <div className={style.singleProduct_company_InfoBox}>
                  <div className={style.singleProduct_company_Info_staticBox}>
                    <h5>GST Number</h5>
                  </div>
                  <div className={style.singleProduct_company_Info_DynimicBox}>
                    <p>{singleProduct?.user?.businessDetails?.GstNumber}</p>
                  </div>
                </div>

                <div className={style.singleProduct_company_InfoBox}>
                  <div className={style.singleProduct_company_Info_staticBox}>
                    <h5>Profile Page</h5>
                  </div>
                  <div className={style.singleProduct_company_Info_DynimicBox}>
                    <p>Daksh Tooling System</p>
                  </div>
                </div>
              </div>
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
                {singleProduct?.user?.businessDetails.CompanyName}
              </div>
            </div>
            <div className={style.SingleProduct_EnqueryForm_ProductDetails}>
              <div className={style.SingleProduct_EnqueryForm_imageBox}>
                {singleProduct &&
                  singleProduct.images &&
                  singleProduct.images[0] && (
                    <Image
                      src={`/product-feature-imges/${singleProduct?.images[0]?.url}`}
                      fill
                      alt={`${singleProduct?.images[0]?.altText}`}
                    />
                  )}
              </div>
              <div className={style.Enquery_Form_ProductTitle}>
                <h5>{singleProduct?.name} </h5>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSendEmail)}>
              <div className={style.SingleProduct_mesasageContainer}>
                <textarea
                  rows={10}
                  name="message"
                  placeholder="wirte message here"
                  {...register("message", {
                    required: "Message is required",
                  })}
                />
              </div>
              <div className={style.Email_Send_btnBox}>
                {sendingEmail ? (
                  <>
                    <button disabled className={style.Enquery_Email_Send_btn}>
                      Send Email{" "}
                    </button>
                  </>
                ) : (
                  <>
                    <button className={style.Enquery_Email_Send_btn}>
                      Send Email{" "}
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className={style.endPart}></div>
      {/* Product main Details Container Start */}
    </>
  );
}
