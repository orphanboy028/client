import React, { useContext, useEffect } from "react";
import style from "../../css/ProductEnquiresComponenet.module.css";
import ProductEnquireyCards from "./ProductEnquireyCards";
import { ProductContext } from "../../../../ContaxtApi/ProductContextApi";
import { UserContext } from "../../../../ContaxtApi/UserContaxApi";

export default function ProductEnquiresComponent() {
  const { token, loginUser } = useContext(UserContext);
  const { productEnquiresList, productEnquiresAction } =
    useContext(ProductContext);

  useEffect(() => {
    productEnquiresAction(token);
  }, []);

  return (
    <>
      <div className={style.ProductEnquiresComponent_main_Conatainer}>
        <div className={style.ProductEnquiresComponent_stats_conatiner}>
          <h1>Stats Container</h1>
        </div>
        <div className={style.ProductEnquiresComponent_cardList_container}>
          <div className={style.Card_ListsBox}>
            {productEnquiresList.map((product, i) => {
              return (
                <>
                  <ProductEnquireyCards product={product} />
                </>
              );
            })}
          </div>
          <div className={style.cardList_sideBannner_Box}>banner</div>
        </div>
      </div>
    </>
  );
}
