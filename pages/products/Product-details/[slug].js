import React, { useContext } from "react";
import PageLayOut from "../../../components/layouts/PageLayOut";
import SingleProduct from "../../../components/ProductComponent/SingleProduct/SingleProduct";
import { ProductContext } from "../../../ContaxtApi/ProductContextApi";
import { getSingleProductsAction } from "../../../Actions/ProductActions/ProductActions";

export default function ProductDetails({ initialProducts }) {
  const { setsingleProduct } = useContext(ProductContext);
  setsingleProduct(initialProducts);
  console.log(initialProducts);
  return (
    <>
      <PageLayOut>
        <SingleProduct />
      </PageLayOut>
    </>
  );
}

// Get Static Props
export async function getServerSideProps(context) {
  try {
    const { slug } = context.params;
    const result = await getSingleProductsAction(slug);
    return {
      props: {
        initialProducts: result.data.Product,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        initialProducts: {},
      },
    };
  }
}
