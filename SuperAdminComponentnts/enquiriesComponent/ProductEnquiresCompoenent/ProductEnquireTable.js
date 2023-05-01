import React, { useContext, useEffect } from "react";
import style from "../css/ProductEnquiresComponent.module.css";
import Table from "react-bootstrap/Table";
import { ProductContext } from "../../../ContaxtApi/ProductContextApi";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faChevronRight,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import Badge from "react-bootstrap/Badge";

export default function ProductEnquireTable() {
  const { superAdminProductEnquireList } = useContext(ProductContext);
  console.log(superAdminProductEnquireList);
  return (
    <div>
      <Table responsive bordered hover size="sm">
        <thead>
          <tr>
            <th className={style.ProductEnquireTable_Th}>S No</th>
            <th className={style.ProductEnquireTable_Th}>Image</th>
            <th className={style.ProductEnquireTable_Th}>Product Name</th>
            <th className={style.ProductEnquireTable_Th}>Compnay</th>
            <th className={style.ProductEnquireTable_Th}>Date</th>
            <th className={style.ProductEnquireTable_Th}>Notification</th>
          </tr>
        </thead>
        <tbody>
          {superAdminProductEnquireList.map((enquire, i) => {
            return (
              <>
                <tr>
                  <td className={style.ProductEnquireTable_Td}>{i + 1}</td>
                  <td className={style.ProductEnquireTable_Td}>
                    <div className={style.ProductEnquireTable_imageBox}>
                      {enquire && enquire.images && enquire.images[0] && (
                        <Image
                          src={`/product-feature-imges/${enquire?.images[0]?.url}`}
                          fill
                          alt={`${enquire?.images[0]?.altText}`}
                        />
                      )}
                    </div>
                  </td>
                  <td className={style.ProductEnquireTable_Td}>
                    {enquire?.name}
                  </td>
                  <td className={style.ProductEnquireTable_Td}>
                    {enquire?.user?.businessDetails?.CompanyName}
                  </td>
                  <td className={style.ProductEnquireTable_Td}>
                    {enquire?.updatedAt}
                  </td>
                  <td className={style.ProductEnquireTable_Td}>
                    <div className={style.ProductEnquireTable_notificationBox}>
                      <div>
                        <FontAwesomeIcon icon={faBell} size="2xl" />
                      </div>
                      <div className={style.ProductEnquireTable_BadgeBox}>
                        <Badge bg="danger">
                          {enquire?.productEnquiries.length}
                        </Badge>
                      </div>
                    </div>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
