import React from "react";
import style from "../../css/ProductEnquiresComponenet.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faChevronRight,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import Badge from "react-bootstrap/Badge";
import { parseISO, format } from "date-fns";
import Link from "next/link";

export default function ProductEnquireyCards({ product }) {
  const date = new Date("2023-04-30T00:30:15.609Z");
  const formattedDate = format(date, "dd-MM-yyyy ");
  return (
    <div className={style.ProductEnquireyCards_box}>
      <div className={style.ProductEnquireyCards_image_Container}>
        <Image src={`/product-feature-imges/${product.images[0].url}`} fill />
      </div>
      <div className={style.ProductEnquireyCards_descreptionBox}>
        <div>
          <h5>{product?.name}</h5>
        </div>
        <div>
          <h4>
            <span>
              <FontAwesomeIcon icon={faIndianRupeeSign} />
            </span>{" "}
            <span>{product?.price}</span>
          </h4>
        </div>
        <div>
          <p>{product?.description}</p>
        </div>
      </div>
      <div className={style.ProductEnquireyCards_EnquireNotification}>
        <div className={style.ProductEnquireyCards_notificationBox}>
          <div>
            <FontAwesomeIcon icon={faBell} size="2xl" />
          </div>
          <div className={style.ProductEnquireyCards_BadgeBox}>
            <Badge bg="danger">{product?.productEnquiries.length}</Badge>
          </div>
        </div>
        <div>{formattedDate}</div>
      </div>
      <div className={style.ProductEnquireyCards_ArrowBox}>
        <Link
          href={`/user-admin/enquiries/product-enquires/${product?.slug}`}
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} style={{ color: "#f5f5f5" }} />
        </Link>
      </div>
    </div>
  );
}
