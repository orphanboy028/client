import React, { useState } from "react";
import style from "../css/DekstopNavBar.module.css";
import logo from "../../../public/app-static-images/flipkart-plus.png";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import NotificationBell from "../../../utilsComponents/NotificationBell";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AppUtilsContext } from "../../../ContaxtApi/AppUtilsContaxApi";
import Button from "react-bootstrap/Button";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import Link from "next/link";
import DropDownMenu from "./DropDownMenu";

export default function DekstopNavBar() {
  const [query, setQuery] = useState("");

  const router = useRouter();
  const { openProfleBox, handelMouseHover, handelMoveLeave } =
    useContext(AppUtilsContext);
  const { loginUser } = useContext(UserContext);

  // change DropDown Style box style
  const isLogin =
    loginUser?.email !== undefined
      ? style.DekstopNavBar_DropDoen_Menu
      : style.DekstopNavBar_DropDoen_Menu_GustUser;

  const handleSearch = (e) => {
    e.preventDefault();

    if (query.trim() !== "") {
      router.push(`/products?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <>
      <div className={style.DekstopNavBar_mainContainer}>
        <div className={style.DekstopNavBar_left_Part}>
          <div className={style.brand_container}>
            <Image src={logo} alt="Company-logo" width={100} />
          </div>
          <div className={style.search_InputBox}>
            <input
              type={"text"}
              placeholder="search your query"
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className={style.search_iconBox}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "#2874f0" }}
                className={style.search_icon}
                onClick={handleSearch}
              />
            </div>
          </div>
        </div>
        <div className={style.DekstopNavBar_center_part}>
          <button>Enquiry</button>
        </div>
        <div className={style.DekstopNavBar_Right_part}>
          <div className={style.DekstopNavBar_sellerPanel}>
            <Link href={"/user-admin"} legacyBehavior>
              <a className={style.linkStyle}> S-Panel </a>
            </Link>
          </div>
          <div className={style.DekstopNavBar_sellerPanel}>
            <Link href={"/products"} legacyBehavior>
              <a className={style.linkStyle}>Products</a>
            </Link>
          </div>

          <div>
            <NotificationBell w={25} />
          </div>
          <div className={style.userProfileBox}>
            <Dropdown>
              <div>
                <Dropdown.Toggle
                  variant="transprant"
                  id="dropdown-basic"
                  style={{ outline: "none", border: "none" }}
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ color: "#ffffff" }}
                    className={style.userIconStyle}
                    size="2x"
                  />
                </Dropdown.Toggle>
              </div>

              <Dropdown.Menu
                show={openProfleBox}
                style={{ zIndex: 10 }}
                className={isLogin}
              >
                {loginUser?.email ? (
                  <>
                    <DropDownMenu />
                  </>
                ) : (
                  <>
                    <div className={style.Login_Box}>
                      <Button onClick={() => router.push("/sing-up")}>
                        Log in
                      </Button>
                    </div>
                  </>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
}
