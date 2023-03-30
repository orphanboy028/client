import React, { useState } from "react";
import style from "../css/DekstopNavBar.module.css";
import logo from "../../../public/app-static-images/flipkart-plus.png";
import searchIcon from "../../../public/app-static-images/search.png";
import bell from "../../../public/app-static-images/bell.png";
import userIcon from "../../../public/app-static-images/user.png";
import verified from "../../../public/app-static-images/verified.png";
import homeIcon from "../../../public/app-static-images/home.png";
import requirementIcon from "../../../public/app-static-images/Post-requirement.png";
import addIcon from "../../../public/app-static-images/add.png";
import writeIcon from "../../../public/app-static-images/write.png";
import Image from "next/image";
import NotificationBell from "../../../utilsComponents/NotificationBell";
import { useRouter } from "next/router";

export default function DekstopNavBar() {
  const router = useRouter();
  const [openProfleBox, setopenProfleBox] = useState(false);
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
            {/* <div className={style.bell_IconBox}>
              <Image
                src={bell}
                alt="bell-icon"
                width={25}
                className={style.bellImage}
              />
              <span>10</span>
            </div> */}
            <NotificationBell w={25} />
          </div>
          <div className={style.userProfileBox}>
            <div>
              <Image
                src={userIcon}
                alt="user-icon"
                width={30}
                className={style.userIconStyle}
                onMouseOver={() => setopenProfleBox(true)}
                onMouseLeave={() => setopenProfleBox(false)}
              />
            </div>
            {openProfleBox && (
              <>
                <div
                  className={style.userProfile_DropDown_Box}
                  onMouseOver={() => setopenProfleBox(true)}
                  onMouseLeave={() => setopenProfleBox(false)}
                >
                  <div className={style.Userdeatils}>
                    <div className={style.userName}>
                      <h1>Pawan</h1>
                    </div>
                    <div className={style.userNumberDeatils}>
                      <div className={style.userNumber}>9813707848</div>
                      <div>
                        <Image src={verified} width={15} alt="verified-icon" />
                      </div>
                    </div>
                  </div>
                  <div className={style.optionList_box}>
                    <div className={style.OptionBox}>
                      <div>
                        <Image src={homeIcon} alt="Home-icon" width={20} />
                      </div>
                      <div className={style.icon_Name}>Home</div>
                    </div>
                    <div className={style.OptionBox}>
                      <div>
                        <Image
                          src={requirementIcon}
                          alt="Home-icon"
                          width={20}
                        />
                      </div>
                      <div className={style.icon_Name}>
                        Post Your Requirement
                      </div>
                    </div>
                    <div className={style.OptionBox}>
                      <div>
                        <Image src={addIcon} alt="Home-icon" width={20} />
                      </div>
                      <div className={style.icon_Name}>Add Product</div>
                    </div>
                    <div className={style.OptionBox}>
                      <div>
                        <Image src={writeIcon} alt="Home-icon" width={20} />
                      </div>
                      <div className={style.icon_Name}>Update Profile</div>
                    </div>
                  </div>
                  <div className={style.LogOut_Box}>
                    <button onClick={() => router.push("/sing-up")}>
                      Log Out
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
