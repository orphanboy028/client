import React, { useContext, useEffect } from "react";
import PageLayOut from "../../../components/layouts/PageLayOut";
import SingleProduct from "../../../components/ProductComponent/SingleProduct/SingleProduct";
import { ProductContext } from "../../../ContaxtApi/ProductContextApi";
import { getSingleProductsAction } from "../../../Actions/ProductActions/ProductActions";
import style from "../../../components/ProductComponent/css/SingleProduct.module.css";
import Spinner from "react-bootstrap/Spinner";

export default function ProductDetails({ initialProducts }) {
  const { setsingleProduct, sendingEmail, singleProduct } =
    useContext(ProductContext);

  useEffect(() => {
    if (initialProducts) {
      setsingleProduct(initialProducts);
    }
  }, [initialProducts]);

  return (
    <>
      <PageLayOut>
        {sendingEmail ? (
          <>
            <div className={style.SendingEmail_loading_Container}>
              <h1>
                {" "}
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="secondary" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="dark" />
              </h1>
            </div>
          </>
        ) : (
          ""
        )}

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
