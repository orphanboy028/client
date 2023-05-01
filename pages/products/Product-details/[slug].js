import React, { useContext, useEffect } from "react";
import Head from "next/head";
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

  console.log(singleProduct);

  return (
    <>
      <Head>
        {singleProduct.productMetas &&
          Object.entries(singleProduct.productMetas).map(([key, value]) => {
            if (value.content && value.name) {
              return (
                <meta name={value.name} content={value.content} key={key} />
              );
            } else if (value.content && value.property) {
              return (
                <meta
                  property={value.property}
                  content={value.content}
                  key={key}
                />
              );
            } else {
              return null;
            }
          })}
        <title>India Mart-{singleProduct.name} </title>
        <link
          rel="canonical"
          href={`https://indiamart/${singleProduct.slug}/`}
        />
        <meta
          property="og:title"
          content={singleProduct?.ProductMetaog?.MetaOgTitle?.content}
        />
        <meta
          property="og:description"
          content={singleProduct?.ProductMetaog?.MetaOgDescription?.content}
        />
        <meta
          property="og:image"
          content={`http://www.indiamart.com/${singleProduct?.ProductMetaog?.MetaOgImage?.content}`}
        />
        <meta
          property="og:url"
          content={`http://www.example.com/${singleProduct.slug}`}
        />
      </Head>
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
