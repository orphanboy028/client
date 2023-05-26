import React, { useContext, useEffect } from "react";
import { isAuth } from "../UserAuth/userAuth";
import { useRouter } from "next/router";
import { AppUtilsContext } from "../../ContaxtApi/AppUtilsContaxApi";
import style from "../../utilsComponents/css/privateRoute.module.css";

export default function Userprivate({ children }) {
  const router = useRouter();
  const { userPrivatePopUp, setuserPrivatePopUp } = useContext(AppUtilsContext);

  useEffect(() => {
    if (!isAuth()) {
      setuserPrivatePopUp(true);
      //   router.push("/login");
    } else if (isAuth().role !== "user") {
      setuserPrivatePopUp(true);
      //   router.push("/login");
    } else {
      setuserPrivatePopUp(false);
    }
  }, [isAuth()]);

  return (
    <>
      {userPrivatePopUp && (
        <div className={style.Userprivate_Container}>
          <h1>User private route you need to login as user </h1>
          <button>Close</button>
        </div>
      )}
      {children}
    </>
  );
}
