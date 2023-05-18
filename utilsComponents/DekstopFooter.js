import React from "react";
import style from "./css/Dekstop.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHeadset } from "@fortawesome/free-solid-svg-icons";

export default function DekstopFooter() {
  return (
    <>
      <div className={style.Footer_container}>
        <div className={style.Footer_Top_Part}>
          <div className={style.Footer_Top_LeftPart}>
            <div className={style.Footer_Top_Column}>
              <div className={style.Column_Heading}>ABOUT</div>
              <div className={style.Column_Link_List}>Contact Us</div>
              <div className={style.Column_Link_List}>About Us</div>
              <div className={style.Column_Link_List}>Careers</div>
            </div>
            <div className={style.Footer_Top_Column}>
              <div className={style.Column_Heading}>Help</div>
              <div className={style.Column_Link_List}>Feedback</div>
              <div className={style.Column_Link_List}>Complaints</div>
              <div className={style.Column_Link_List}>FAQ</div>
            </div>
            <div className={style.Footer_Top_Column}>
              <div className={style.Column_Heading}>CONSUMER POLICY</div>
              <div className={style.Column_Link_List}>Terms Of Use</div>
              <div className={style.Column_Link_List}>Privacy</div>
              <div className={style.Column_Link_List}>Customer Care</div>
            </div>
            <div className={style.Footer_Top_Column}>
              <div className={style.Column_Heading}>SOCIAL</div>
              <div className={style.Column_Link_List}>Facebook</div>
              <div className={style.Column_Link_List}>Twitter</div>
              <div className={style.Column_Link_List}>YouTub</div>
            </div>
          </div>
          <div className={style.Footer_Top_RightPart}>
            <div className={style.Footer_Right_Box}>
              <div className={style.Footer_Right_IconBox}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#ffffff" }}
                />
              </div>
              <div>
                <h2> info@indiamart.com</h2>{" "}
              </div>
            </div>
            <div className={style.Footer_Right_Box}>
              <div className={style.Footer_Right_IconBox}>
                <FontAwesomeIcon
                  icon={faHeadset}
                  style={{ color: "#ffffff" }}
                />
              </div>
              <div>
                <h2>1800 200 9001</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={style.Footer_BottomPart}>
          <div className={style.Foter_Bootom_columnRight}>
            <p>
              Copyright © 1996-2023 IndiaMART InterMESH Ltd. All rights
              reserved.
            </p>
          </div>
          <div className={style.Foter_Bootom_columnLeft}>
            <p>Term and Condition</p>
          </div>
        </div>
      </div>
    </>
  );
}
