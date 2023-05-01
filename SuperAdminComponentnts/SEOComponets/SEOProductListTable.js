import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { ProductContext } from "../../ContaxtApi/ProductContextApi";
import Link from "next/link";

export default function SEOProductListTable() {
  const { allProductForSEO } = useContext(ProductContext);
  console.log(allProductForSEO);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S No</th>
            <th>Product Name</th>
            <th>Last Name</th>
            <th>Roduct Page</th>
          </tr>
        </thead>
        <tbody>
          {allProductForSEO.map((product, i) => {
            return (
              <>
                <tr>
                  <td>{i + 1}</td>
                  <td>{product?.name}</td>
                  <td>{product?.status}</td>
                  <td>
                    {" "}
                    <Link
                      href={`/super-admin/seo/seo-deatils/${product?.slug}`}
                    >
                      Go To Page
                    </Link>{" "}
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
