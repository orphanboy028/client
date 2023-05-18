import React, { useContext } from "react";
import { useRouter } from "next/router";
import { parse } from "url";
import PageLayOut from "../../components/layouts/PageLayOut";
import ProductList from "../../components/ProductComponent/Product/ProductList";
import { ProductContext } from "../../ContaxtApi/ProductContextApi";
import {
  getAllProductsAction,
  getSingleProductsAction,
  getSeachProductsAction,
} from "../../Actions/ProductActions/ProductActions";
import queryString from "query-string";
import UserAdminLayout from "../../components/UserAdmin/UserAdminLayout";

export default function ProductsPage({ initialProducts }) {
  const { setallProducts } = useContext(ProductContext);
  console.log(initialProducts);
  setallProducts(initialProducts);
  return (
    <>
      <UserAdminLayout>
        <ProductList />
      </UserAdminLayout>
    </>
  );
}

// Get Static Props
export async function getServerSideProps(context) {
  try {
    console.log();
    const qs = queryString.stringify(context.query);
    let result;
    if (qs) {
      const res = await getSeachProductsAction(qs);
      result = res.data.Searchproducts;
    } else {
      const res = await getAllProductsAction();
      result = res.data.allProducts;
    }

    return {
      props: {
        initialProducts: result,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        initialProducts: [],
      },
    };
  }
}
