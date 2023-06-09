import React, { useContext, useEffect } from "react";
import style from "../css/NewUser.module.css";
import charIcon from "../../public/admin-images/chart-success.png";
import threedots from "../../public/admin-images/dots.png";
import Image from "next/image";
import Dropdown from "react-bootstrap/Dropdown";
import SideStatsCard from "../utilsCompnents/SideStatsCard";
import TableComponent from "../utilsCompnents/TableComponent";
import { UserContext } from "../../ContaxtApi/UserContaxApi";
import { getLoginCookies } from "../../Actions/UserAuth/userAuth";

export default function NewUsers() {
  const { getusers, allusers } = useContext(UserContext);

  useEffect(() => {
    getusers();
  }, []);

  return (
    <>
      <div className={`row  ${style.NewUsers_container}`}>
        <div className={`col-lg-8 col-md-12 mb-5 `}>
          <div className={`card`}>
            <div className={`card-body`}>
              <h5
                className={`card-title text-primary ${style.NewUsers_card_TitleBox}`}
              >
                Congratulations John! 🎉
              </h5>
              <p className={`card-text mb-4 `}>
                You have done <span className="fw-bold">72%</span> more sales
                today. Check your new badge in your profile.
              </p>
              <a href="#" className={`btn btn-primary`}>
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className={`col-4 col-lg-4 col-md-12 col-sm-12 col-12 d-flex   `}>
          <div className={`col-6 col-md-6 col-sm-6 col-6`}>
            <SideStatsCard />
          </div>
          <div className={`col-6 col-md-6 col-sm-6 col-6 ms-3 `}>
            <SideStatsCard />
          </div>
        </div>
      </div>
      <div className={`row p-3  ${style.NewUsers_container}`}>
        <TableComponent allusers={allusers} />
      </div>
    </>
  );
}
