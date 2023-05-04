import React, { useContext } from "react";
import style from "../css/CompanyCard.module.css";
import Image from "next/image";
import companyLogo from "../../../public/Company-logo/user-64318e457993fb3620054341-1681574687021.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { BusinessContext } from "../../../ContaxtApi/BusinessContaxApi";
export default function CompanyCard() {
  const { listedBusiness } = useContext(BusinessContext);
  console.log(listedBusiness);
  return (
    <>
      {listedBusiness.map((el, i) => {
        return (
          <>
            <div className={style.CompanyCard_Container}>
              <div className={style.CompanyCard_Logo_Title}>
                <div className={style.CompanyCard_LogoBox}>
                  <Image src={companyLogo} alt="Company-Logo" width={50} />
                </div>
                <div className={style.CompanyCard_Baise_Details_sideBox}>
                  <div className={style.CompanyCard_TitleBox}>
                    <h3>{el?.CompanyName}</h3>
                  </div>
                  <div className={style.CompanyCard_VeifiedBox}>
                    <div className={style.CompanyCard_Vefied_IconBox}>
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        style={{ color: "#1cb542" }}
                      />
                    </div>
                    <div className={style.CompanyCard_verfided_Content}>
                      Verifiyed
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.CompanyCard_LocationBox}>
                <div>
                  <span>Gurgaon</span> <span>Harryana</span>
                </div>
              </div>
              <div className={style.CompanyCard_addressBox}>
                <p>{el?.address}</p>
              </div>
              <div className={style.CompanyCard_btnBox}>
                <Link
                  style={{
                    textDecoration: "none",
                    fontSize: "1.4rem",
                    width: "100%",
                    textAlign: "center",
                    padding: "5px",
                    color: "#fff",
                  }}
                  href={`/profile/${el?.slug}`}
                >
                  Visit Company Profil
                </Link>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
