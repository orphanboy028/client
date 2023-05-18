import React, { useEffect } from "react";
import DCategoriesSlider from "../../CategoriesSlider/Dekstop/DCategoriesSlider";
import { isAuth, getEncryptedData } from "../../../Actions/UserAuth/userAuth";
import DekstopNavBar from "../../NavBar/Dekstop/DekstopNavBar";
import { useContext } from "react";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import Spinner from "react-bootstrap/Spinner";
import style from "../../../utilsComponents/css/Utils.module.css";
import DekstopFooter from "../../../utilsComponents/DekstopFooter";
import MobileFooter from "../../../utilsComponents/MobileFooter";

export default function DekstopHomeLayOut({ children }) {
  const { loading } = useContext(UserContext);
  console.log(loading);
  return (
    <>
      {loading ? (
        <>
          <div className={style.LoadingSpinerBox}>
            <Spinner
              animation="border"
              size="md"
              className={style.loadingSpiner}
            />
          </div>
        </>
      ) : (
        <>
          <div>
            <div>
              <DekstopNavBar />
              <DCategoriesSlider />
            </div>
            <div>{children}</div>
            <div className={style.layout_Footer_Container}>
              <div className={style.layout_Dekstop_Footer}>
                <DekstopFooter />
              </div>

              <div className={style.layOut_Mobile_Footer}>
                <MobileFooter />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
