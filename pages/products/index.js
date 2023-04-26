import React, { useContext } from "react";
import PageLayOut from "../../components/layouts/PageLayOut";
import ProductList from "../../components/ProductComponent/Product/ProductList";
import { ProductContext } from "../../ContaxtApi/ProductContextApi";
import {
  getAllProductsAction,
  getSingleProductsAction,
  getSeachProductsAction,
} from "../../Actions/ProductActions/ProductActions";
export default function ProductsPage({ initialProducts }) {
  const { setallProducts } = useContext(ProductContext);

  setallProducts(initialProducts);
  return (
    <>
      <PageLayOut>
        <ProductList />
      </PageLayOut>
    </>
  );
}

// Get Static Props
export async function getServerSideProps(context) {
  try {
    const { q } = context.query;
    console.log(q);
    // Fetch products data here
    let result;
    if (q) {
      const res = await getSeachProductsAction(q);
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
