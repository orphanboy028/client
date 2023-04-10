import React, { useContext, useEffect } from "react";
import ProductCard from "./ProductCard";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import { ProductContext } from "../../../ContaxtApi/ProductContextApi";

export default function ListPostedProduct() {
  const { token, loginUser } = useContext(UserContext);
  const { userProduct, userAllProducts } = useContext(ProductContext);

  useEffect(() => {
    console.log(token);
    userProduct(token, loginUser?._id);
  }, [loginUser]);

  return (
    <div>
      {userAllProducts.map((product, i) => {
        return (
          <>
            <ProductCard product={product} key={i} />;
          </>
        );
      })}
    </div>
  );
}
