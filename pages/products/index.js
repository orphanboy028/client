import React from "react";
import PageLayOut from "../../components/layouts/PageLayOut";
import ProductList from "../../components/ProductComponent/Product/ProductList";

export default function ProductsPage() {
  return (
    <>
      <PageLayOut>
        <ProductList />
      </PageLayOut>
    </>
  );
}
