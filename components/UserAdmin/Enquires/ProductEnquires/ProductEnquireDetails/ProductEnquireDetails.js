import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import style from "../../../css/ProductEnquireDetails.module.css";
import Image from "next/image";
import { ProductContext } from "../../../../../ContaxtApi/ProductContextApi";
import { UserContext } from "../../../../../ContaxtApi/UserContaxApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faChevronRight,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import { parseISO, format } from "date-fns";
import Accordion from "react-bootstrap/Accordion";

export default function ProductEnquireDetails() {
  const date = new Date("2023-04-30T00:30:15.609Z");
  const formattedDate = format(date, "dd-MM-yyyy ");
  const router = useRouter();
  const { slug } = router.query;
  const { token, loginUser } = useContext(UserContext);
  const { SingleproductEnquiresAction, productEnquireDetail } =
    useContext(ProductContext);

  console.log(productEnquireDetail);

  useEffect(() => {
    SingleproductEnquiresAction(token, slug);
  }, [slug]);
  return (
    <>
      <div className={style.ProductEnquireDetails_mainContainer}>
        <div className={style.ProductEnquireDetails_statsContainer}>
          <h1> Status bar </h1>
        </div>

        <div className={style.ProductEnquireDetails_ProductContainer}>
          <div className={style.productCardBox}>
            <div className={style.product_ImageBox}>
              {productEnquireDetail &&
                productEnquireDetail.images &&
                productEnquireDetail.images[0] && (
                  <Image
                    src={`/product-feature-imges/${productEnquireDetail?.images[0].url}`}
                    fill
                  />
                )}
            </div>
            <div>
              <div>
                <h4>{productEnquireDetail?.name}</h4>
              </div>
              <div>
                <p> {formattedDate}</p>
              </div>
              <div>
                <h4>
                  <span>
                    <FontAwesomeIcon icon={faIndianRupeeSign} />
                  </span>{" "}
                  <span>{productEnquireDetail?.price}</span>
                </h4>
              </div>
              <div>
                <p>{productEnquireDetail?.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={style.productEnquireDetail_AccordionContainer}>
          <div className={style.Accordion_Box}>
            <Accordion defaultActiveKey="0">
              {productEnquireDetail?.productEnquiries?.map((enquire, i) => {
                return (
                  <>
                    <Accordion.Item eventKey={i}>
                      <Accordion.Header>Accordion Item #1</Accordion.Header>
                      <Accordion.Body>
                        <div className={style.Accordion_bodyContainer}>
                          <div className={style.Accordion_leftBox}>
                            <div className={style.Accordion_imageBox}>
                              {enquire &&
                                enquire.businessDetails &&
                                enquire.businessDetails.photo && (
                                  <Image
                                    src={`/Company-logo/${enquire?.businessDetails.photo}`}
                                    fill
                                  />
                                )}
                            </div>
                            <div className={style.Accordion_companyDetails}>
                              <div>
                                <h5>{enquire.businessDetails.CompanyName}</h5>
                              </div>
                              <div>
                                <p>{enquire.businessDetails.address}</p>
                              </div>
                            </div>
                          </div>
                          <div className={style.Accordion_rightBox}>
                            <h5>contact deatils</h5>
                            <div
                              className={style.Accordion_contactDetails_filed}
                            >
                              <div
                                className={style.Accordion_contact_Static_filed}
                              >
                                Owner Name
                              </div>
                              <div>{enquire?.name}</div>
                            </div>
                            <div
                              className={style.Accordion_contactDetails_filed}
                            >
                              <div
                                className={style.Accordion_contact_Static_filed}
                              >
                                Email
                              </div>
                              <div>{enquire?.email}</div>
                            </div>
                            <div
                              className={style.Accordion_contactDetails_filed}
                            >
                              <div
                                className={style.Accordion_contact_Static_filed}
                              >
                                mobile Number
                              </div>
                              <div>{enquire?.mobileNumber}</div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
