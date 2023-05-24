import React, { useContext, useEffect } from "react";
import style from "../css/ProductCard.module.css";
import ProductCard from "./ProductCard";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import { ProductContext } from "../../../ContaxtApi/ProductContextApi";
import { AppUtilsContext } from "../../../ContaxtApi/AppUtilsContaxApi";
import ConfirmModel from "../../../utilsComponents/ConfirmModel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ListPostedProduct() {
  const { token, loginUser } = useContext(UserContext);
  const {
    userProduct,
    userAllProducts,
    handelEdit,
    DeleteProductAction,
    ActivateProductAction,
    deActivateProductAction,
  } = useContext(ProductContext);
  const {
    modelactiondelete,
    setmodelactiondelete,
    handelToggelActionModel,
    handelProductId,
    slectedProductId,
    setslectedProductId,
    refresPage,
    setrefresPage,
    productDeatciveId,
    handelProductActivate,
    ProductActivateId,
    setProductActivateId,
  } = useContext(AppUtilsContext);

  // Reverse the product list
  const reverseduserAllProducts = userAllProducts.slice().reverse();

  console.log(reverseduserAllProducts);

  useEffect(() => {
    userProduct(token, loginUser?._id);
  }, [loginUser, refresPage]);

  const handelDeleteProduct = async (prductId) => {
    try {
      const data = {
        id: prductId,
      };
      const result = await DeleteProductAction(data, token);
      console.log(result);
      handelToggelActionModel();
      toast.success("Product delete Succesfully");
      setrefresPage(true);
    } catch (error) {
      console.log(error.response);
      handelToggelActionModel();
    }
  };

  const handelDactiveProduct = async (productDeatciveId) => {
    try {
      const data = {
        id: productDeatciveId,
      };
      const result = await deActivateProductAction(data, token);
      console.log(result);
      toast.success("Deatcivate Product Succesfully");
      setrefresPage(true);
      handelToggelActionModel();
    } catch (error) {
      console.log(error.response);
    }
  };

  const handelActiveProduct = async (prductId) => {
    try {
      const data = {
        id: prductId,
      };
      const result = await ActivateProductAction(data, token);
      console.log(result);
      toast.success("Activate Product Succesfully");
      setrefresPage(true);
      handelToggelActionModel();
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      {slectedProductId && (
        <>
          <ConfirmModel
            handelAction={handelDeleteProduct}
            actionId={slectedProductId}
            ModelTitle="Delete Product"
          />
        </>
      )}

      {/* ProductDeactivate Modle */}
      {productDeatciveId && (
        <>
          <ConfirmModel
            handelAction={handelDactiveProduct}
            actionId={productDeatciveId}
            ModelTitle="DeAtcive Product Product"
          />
        </>
      )}

      {ProductActivateId && (
        <>
          <ConfirmModel
            handelAction={handelActiveProduct}
            actionId={ProductActivateId}
            ModelTitle="Activate Product Product"
          />
        </>
      )}

      <div className={style.card_List_container}>
        {reverseduserAllProducts.map((product, i) => {
          return (
            <>
              <ProductCard product={product} key={i} />;
            </>
          );
        })}
      </div>
    </>
  );
}
