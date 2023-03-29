import Image from "next/image";
import React from "react";
import style from "../css/MobileHomeNavBar.module.css";
import menu from "../../../public/app-static-images/menu.png";
import NotificationBell from "../../../utilsComponents/NotificationBell";
import SearchInput from "../../../utilsComponents/SearchInput";
export default function MobileHomeNavBar() {
  return (
    <>
      <div className={style.MobileHomeNavBar_Main_Container}>
        <div className={style.MobileHomeNavBar_Top_part}>
          <div className={style.MobileHomeNavBar_Top_part_left}>
            <div className={style.Top_part_left_IconBox}>
              <Image src={menu} alt="Menu-icon" width={20} />
            </div>
            <div className={style.left_part_userNameBox}>Hi Pawan</div>
          </div>
          <div className={style.MobileHomeNavBar_TopRightBox}>
            <div className={style.MobileHomeNavBar_sPanelBox}>S-Panel</div>
            <div className={style.NotificationBell_box}>
              <NotificationBell w={20} />
            </div>
          </div>
        </div>
        {/* search Input part */}
        <div className={style.MobileHomeNavBar_searchInputBox}>
          <SearchInput />
        </div>
      </div>
    </>
  );
}
