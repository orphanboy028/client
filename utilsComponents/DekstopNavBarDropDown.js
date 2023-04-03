import React from "react";
import style from "../components/NavBar/css/DekstopNavBar.module.css";
import verified from "../public/app-static-images/verified.png";

import homeIcon from "../public/app-static-images/home.png";
import requirementIcon from "../public/app-static-images/Post-requirement.png";
import addIcon from "../public/app-static-images/add.png";
import writeIcon from "../public/app-static-images/write.png";
import { useContext } from "react";
import { UserContext } from "../ContaxtApi/UserContaxApi";
import { AppUtilsContext } from "../ContaxtApi/AppUtilsContaxApi";

export default function DekstopNavBarDropDown() {
  const { loginUser } = useContext(UserContext);
  const { openProfleBox, handelMouseHover, handelMoveLeave } =
    useContext(AppUtilsContext);

  return (
    <>
      <div>drop down</div>
    </>
  );
}

/*
<div
      className={style.userProfile_DropDown_Box}
      //   onMouseOver={() => setopenProfleBox(true)}
      //   onMouseLeave={() => setopenProfleBox(false)}
    >
      <>
        <div className={style.Userdeatils}>
          <div className={style.userName}>
            {loginUser?.name ? (
              <h1>{loginUser?.name}</h1>
            ) : (
              <h1>name not mentioned</h1>
            )}
          </div>
          <div className={style.userNumberDeatils}>
            <div className={style.userNumber}>
              {loginUser?.mobileNumber ? (
                <p>{loginUser?.mobileNumber}</p>
              ) : (
                <p>no number </p>
              )}
            </div>
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
              <Image src={requirementIcon} alt="Home-icon" width={20} />
            </div>
            <div className={style.icon_Name}>Post Your Requirement</div>
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
          <button onClick={() => router.push("/sing-up")}>Log Out</button>
        </div>
      </>
    </div>
*/
