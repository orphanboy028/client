import React, { useContext, useEffect } from "react";
import { isAuth } from "../UserAuth/userAuth";
import { useRouter } from "next/router";
import { AppUtilsContext } from "../../ContaxtApi/AppUtilsContaxApi";
import style from "../../utilsComponents/css/Utils.module.css";
import Spinner from "react-bootstrap/Spinner";

export default function SuperAdminPrivate({ children }) {
  const router = useRouter();
  const { prtectLoading, setprtectLoading } = useContext(AppUtilsContext);

  useEffect(() => {
    if (!isAuth()) {
      setprtectLoading(true);
      router.push("/login");
    } else if (isAuth().role !== "Super-admin") {
      setprtectLoading(true);
      router.push("/login");
    } else {
      setprtectLoading(false);
    }
  }, [isAuth()]);

  if (prtectLoading) {
    return (
      <>
        <div className={style.loading_container}>
          <Spinner animation="grow" variant="info" />
        </div>
      </>
    );
  } else {
    return <>{children}</>;
  }
}
