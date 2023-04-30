import React, { useContext, useEffect } from "react";
import ProductCard from "./ProductCard";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import { ProductContext } from "../../../ContaxtApi/ProductContextApi";

export default function ListPostedProduct() {
  const { token, loginUser } = useContext(UserContext);
  const { userProduct, userAllProducts } = useContext(ProductContext);

  // Reverse the product list
  const reverseduserAllProducts = userAllProducts.slice().reverse();

  useEffect(() => {
    userProduct(token, loginUser?._id);
  }, [loginUser]);

  return (
    <div>
      {reverseduserAllProducts.map((product, i) => {
        return (
          <>
            <ProductCard product={product} key={i} />;
          </>
        );
      })}
    </div>
  );
}
