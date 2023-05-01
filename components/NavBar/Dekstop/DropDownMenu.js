import React, { useState } from "react";
import style from "../css/DekstopNavBar.module.css";
import Link from "next/link";
import Dropdown from "react-bootstrap/Dropdown";
import verified from "../../../public/app-static-images/verified.png";
import Button from "react-bootstrap/Button";
import homeIcon from "../../../public/app-static-images/home.png";
import requirementIcon from "../../../public/app-static-images/Post-requirement.png";
import addIcon from "../../../public/app-static-images/add.png";
import writeIcon from "../../../public/app-static-images/write.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePlus,
  faPenToSquare,
  faFileImport,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function DropDownMenu() {
  const router = useRouter();
  return (
    <>
      <div>
        <Link href="/user-admin" style={{ textDecoration: "none" }}>
          <Dropdown.Item as="a" style={{ textDecoration: "none" }}>
            Pawan
          </Dropdown.Item>
        </Link>
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
            <FontAwesomeIcon
              icon={faSquarePlus}
              style={{ color: "#2874F0" }}
              size="x"
            />
          </div>

          <div className={style.DekstopNavBar_LinkName}>
            <Link
              href="/user-admin/add-product"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p>Add Product</p>
            </Link>
          </div>
        </div>

        <div className={style.DekstopNavBar_DropDown_OptionBox}>
          <div className={style.DekstopNavBar_IconBox}>
            <FontAwesomeIcon
              icon={faPenToSquare}
              style={{ color: "#2874F0" }}
              size="x"
            />
          </div>

          <div className={style.DekstopNavBar_LinkName}>
            <Link
              href="/user-admin/add-product"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p>Update Profile</p>
            </Link>
          </div>
        </div>

        <div className={style.DekstopNavBar_DropDown_OptionBox}>
          <div className={style.DekstopNavBar_IconBox}>
            <FontAwesomeIcon
              icon={faFileImport}
              style={{ color: "#2874F0" }}
              size="x"
            />
          </div>

          <div className={style.DekstopNavBar_LinkName}>
            <Link
              href="/user-admin/add-product"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p>Post Your Requirement</p>
            </Link>
          </div>
        </div>

        <div className={style.DekstopNavBar_DropDown_OptionBoxBtn}>
          <div className={style.LogOut_Box}>
            <button onClick={() => router.push("/sing-up")}>Log Out</button>
          </div>
        </div>
      </div>
    </>
  );
}
