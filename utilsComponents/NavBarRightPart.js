import React from "react";
import Link from "next/link";
import style from "./css/NavBarSeachInput.module.css";
import NotificationBell from "./NotificationBell";
import DropDownMenu from "./DropDownMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { UserContext } from "../ContaxtApi/UserContaxApi";
import Dropdown from "react-bootstrap/Dropdown";
import { AppUtilsContext } from "../ContaxtApi/AppUtilsContaxApi";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";

export default function NavBarRightPart() {
  const router = useRouter();

  const { loginUser } = useContext(UserContext);
  const { openProfleBox, handelMouseHover, handelMoveLeave } =
    useContext(AppUtilsContext);

  // change DropDown Style box style
  const isLogin =
    loginUser?.email !== undefined
      ? style.DekstopNavBar_DropDoen_Menu
      : style.DekstopNavBar_DropDoen_Menu_GustUser;
  return (
    <div className={style.NavRightSideOption_Box}>
      <div className={`${style.navLinkBox} ${style.hidNavRightOption}`}>
        <Link href={"/user-admin"} legacyBehavior>
          <a className={style.linkStyle}> S-Panel </a>
        </Link>
      </div>

      <div className={`${style.navLinkBox} ${style.hidNavRightOption}`}>
        <Link href={"/products"} legacyBehavior>
          <a className={style.linkStyle}> Products </a>
        </Link>
      </div>

      <div>
        <NotificationBell />
      </div>
      <div className={style.UserProfileBox}>
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
                  <Button onClick={() => router.push("/login")}>Log in</Button>
                  <div className={style.Register_TextBox}>
                    <p>
                      If You Have no Account then{" "}
                      <span>
                        {" "}
                        <Link
                          href="/sing-up"
                          className={style.Common_LinkStyle}
                        >
                          {" "}
                          Register Now
                        </Link>{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
