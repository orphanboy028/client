import React, { useContext, useEffect } from "react";
import style from "../css/ProductEnquiresComponent.module.css";
import ProductEnquireTable from "./ProductEnquireTable";
import { ProductContext } from "../../../ContaxtApi/ProductContextApi";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";

export default function ProductEnquiresComponent() {
  const { token, loginUser } = useContext(UserContext);
  const { SuperAdminproductEnquiresAction, superAdminProductEnquireList } =
    useContext(ProductContext);

  useEffect(() => {
    console.log(token);
    console.log(loginUser);
    SuperAdminproductEnquiresAction(token);
  }, []);

  return (
    <>
      <div className={style.ProductEnquiresComponent_main_conatiner}>
        <div className={style.ProductEnquiresComponent_stats_container}>
          Stats
        </div>
        <div className={style.ProductEnquiresComponent_table_Container}>
          <ProductEnquireTable />
        </div>
      </div>
    </>
  );
}
