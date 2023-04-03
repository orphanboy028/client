import React, { useState } from "react";
import style from "../css/DekstopNavBar.module.css";
import logo from "../../../public/app-static-images/flipkart-plus.png";
import searchIcon from "../../../public/app-static-images/search.png";
import bell from "../../../public/app-static-images/bell.png";
import userIcon from "../../../public/app-static-images/user.png";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "next/image";
import NotificationBell from "../../../utilsComponents/NotificationBell";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AppUtilsContext } from "../../../ContaxtApi/AppUtilsContaxApi";
import DekstopNavBarDropDown from "../../../utilsComponents/DekstopNavBarDropDown";
import verified from "../../../public/app-static-images/verified.png";
import Button from "react-bootstrap/Button";
import homeIcon from "../../../public/app-static-images/home.png";
import requirementIcon from "../../../public/app-static-images/Post-requirement.png";
import addIcon from "../../../public/app-static-images/add.png";
import writeIcon from "../../../public/app-static-images/write.png";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";

export default function DekstopNavBar() {
  const router = useRouter();
  const { openProfleBox, handelMouseHover, handelMoveLeave } =
    useContext(AppUtilsContext);
  const { loginUser } = useContext(UserContext);

  // change DropDown Style box style
  const isLogin =
    loginUser.email !== undefined
      ? style.DekstopNavBar_DropDoen_Menu
      : style.DekstopNavBar_DropDoen_Menu_GustUser;

  return (
    <>
      <div className={style.DekstopNavBar_mainContainer}>
        <div className={style.DekstopNavBar_left_Part}>
          <div className={style.brand_container}>
            <Image src={logo} alt="Company-logo" width={100} />
          </div>
          <div className={style.search_InputBox}>
            <input type={"text"} placeholder="search your query" />
            <div className={style.search_iconBox}>
              <Image
                src={searchIcon}
                alt="Search-icon"
                width={25}
                className={style.search_icon}
              />
            </div>
          </div>
        </div>
        <div className={style.DekstopNavBar_center_part}>
          <button>Enquiry</button>
        </div>
        <div className={style.DekstopNavBar_Right_part}>
          <div className={style.DekstopNavBar_sellerPanel}>
            <h1>S-Panel</h1>
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
                  <Image
                    src={userIcon}
                    alt="user-icon"
                    width={30}
                    className={style.userIconStyle}
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
                    <div>
                      <Dropdown.Item href="#/action-1">Pawan</Dropdown.Item>
                      <div className={style.DekstopNavBar_DropDown_ItemBox}>
                        <div className={style.DekstopNavBar_MobileNumber}>
                          <p>9813707848</p>
                        </div>

                        <div className={style.DekstopNavBar_verfiedBox}>
                          <Image src={verified} width={15} />
                        </div>
                      </div>

                      <div className={style.DekstopNavBar_DropDown_OptionBox}>
                        <div className={style.DekstopNavBar_IconBox}>
                          <Image src={addIcon} width={15} />
                        </div>

                        <div className={style.DekstopNavBar_LinkName}>
                          <p>Add Product</p>
                        </div>
                      </div>

                      <div className={style.DekstopNavBar_DropDown_OptionBox}>
                        <div className={style.DekstopNavBar_IconBox}>
                          <Image src={writeIcon} width={15} />
                        </div>

                        <div className={style.DekstopNavBar_LinkName}>
                          <p>Update Profile</p>
                        </div>
                      </div>

                      <div className={style.DekstopNavBar_DropDown_OptionBox}>
                        <div className={style.DekstopNavBar_IconBox}>
                          <Image src={requirementIcon} width={15} />
                        </div>

                        <div className={style.DekstopNavBar_LinkName}>
                          <p>Post Your Requirement</p>
                        </div>
                      </div>

                      <div className={style.DekstopNavBar_DropDown_OptionBox}>
                        <div className={style.LogOut_Box}>
                          <Button onClick={() => router.push("/sing-up")}>
                            Log Out
                          </Button>
                        </div>
                      </div>
                    </div>
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
