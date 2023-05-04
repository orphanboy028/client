import React from "react";
import style from "./css/MainCategories.module.css";
import Image from "next/image";
import banner from "../../public/banners-images/web-design.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndustry, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function MainCategoriesCard() {
  return (
    <div className={style.MainCategoriesCard_container}>
      <div className={style.MainCategoriesCard_Box}>
        <div className={style.card_mainIcon_Box}>
          <div className={style.maincategores_TitleBox}>
            Main Categories Title exteb
          </div>
          <div className={style.MainCategeories_IconBox}>
            <FontAwesomeIcon icon={faIndustry} style={{ color: "#89c0d2" }} />
          </div>
        </div>
        <div className={style.SuCategories_Container}>
          {[1, 2, 3, 4, 5].map((el, i) => {
            return (
              <>
                <div className={style.SubCategories_cardBox}>
                  <div className={style.subCatgories_ImageBox}>
                    <Image
                      src={banner}
                      fill
                      alt="Main-Categories page banner"
                    />
                  </div>
                  <div className={style.subCatgories_TitleBox}>
                    Sub Categories name
                  </div>
                  <div className={style.lefCategories_ListBox}>
                    <Link
                      href={""}
                      style={{ textDecoration: "none", fontSize: "1.2rem" }}
                    >
                      Leaf 1{" "}
                    </Link>
                    <Link
                      href={""}
                      style={{ textDecoration: "none", fontSize: "1.2rem" }}
                    >
                      Leaf 1{" "}
                    </Link>

                    <Link
                      href={""}
                      style={{ textDecoration: "none", fontSize: "1.2rem" }}
                    >
                      Leaf 1{" "}
                    </Link>
                    <Link
                      href={""}
                      style={{ textDecoration: "none", fontSize: "1.2rem" }}
                    >
                      Leaf 1{" "}
                    </Link>
                    <Link
                      href={""}
                      style={{ textDecoration: "none", fontSize: "1.2rem" }}
                    >
                      Leaf 1{" "}
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
          <div className={style.SubCategories_Static_Card}>
            <div className={style.subCategories_Arrow_IconBox}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>

            <p>All Sub Categories</p>
          </div>
        </div>
      </div>

      <div className={style.MainCategoriesCard_Box}>
        <div className={style.card_mainIcon_Box}>
          <div className={style.maincategores_TitleBox}>
            Main Categories Title exteb
          </div>
          <div className={style.MainCategeories_IconBox}>
            <FontAwesomeIcon icon={faIndustry} style={{ color: "#89c0d2" }} />
          </div>
        </div>
        <div className={style.SuCategories_Container}>
          {[1, 2, 3, 4, 5].map((el, i) => {
            return (
              <>
                <div className={style.SubCategories_cardBox}>
                  <div className={style.subCatgories_ImageBox}>
                    <Image
                      src={banner}
                      fill
                      alt="Main-Categories page banner"
                    />
                  </div>
                  <div className={style.subCatgories_TitleBox}>
                    Sub Categories name
                  </div>
                  <div className={style.lefCategories_ListBox}>
                    <Link
                      href={""}
                      style={{ textDecoration: "none", fontSize: "1.2rem" }}
                    >
                      Leaf 1{" "}
                    </Link>
                    <Link
                      href={""}
                      style={{ textDecoration: "none", fontSize: "1.2rem" }}
                    >
                      Leaf 1{" "}
                    </Link>

                    <Link
                      href={""}
                      style={{ textDecoration: "none", fontSize: "1.2rem" }}
                    >
                      Leaf 1{" "}
                    </Link>
                    <Link
                      href={""}
                      style={{ textDecoration: "none", fontSize: "1.2rem" }}
                    >
                      Leaf 1{" "}
                    </Link>
                    <Link
                      href={""}
                      style={{ textDecoration: "none", fontSize: "1.2rem" }}
                    >
                      Leaf 1{" "}
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
          <div className={style.SubCategories_Static_Card}>
            <div className={style.subCategories_Arrow_IconBox}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>

            <p>All Sub Categories</p>
          </div>
        </div>
      </div>

      <div className={style.MainCategoriesCard_Box}>
        <div className={style.card_mainIcon_Box}>
          <div className={style.maincategores_TitleBox}>
            Main Categories Title exteb
          </div>
          <div className={style.MainCategeories_IconBox}>
            <FontAwesomeIcon icon={faIndustry} style={{ color: "#89c0d2" }} />
          </div>
        </div>
        <div className={style.SuCategories_Container}>
          {[1, 2, 3, 4, 5].map((el, i) => {
            return (
              <>
                <div className={style.SubCategories_cardBox}>
                  <div className={style.subCatgories_ImageBox}>
                    <Image
                      src={banner}
                      fill
                      alt="Main-Categories page banner"
                    />
                  </div>
                  <div className={style.subCatgories_TitleBox}>
                    Sub Categories name
                  </div>
                  <div className={style.lefCategories_ListBox}>
                    <Link
                      href={""}
                      style={{ textDecoration: "none", fontSize: "1.2rem" }}
                    >
                      Leaf 1{" "}
                    </Link>
                    <Link
                      href={""}
                      style={{ textDecoration: "none", fontSize: "1.2rem" }}
                    >
                      Leaf 1{" "}
                    </Link>

                    <Link
                      href={""}
                      style={{ textDecoration: "none", fontSize: "1.2rem" }}
                    >
                      Leaf 1{" "}
                    </Link>
                    <Link
                      href={""}
                      style={{ textDecoration: "none", fontSize: "1.2rem" }}
                    >
                      Leaf 1{" "}
                    </Link>
                    <Link
                      href={""}
                      style={{ textDecoration: "none", fontSize: "1.2rem" }}
                    >
                      Leaf 1{" "}
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
          <div className={style.SubCategories_Static_Card}>
            <div className={style.subCategories_Arrow_IconBox}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>

            <p>All Sub Categories</p>
          </div>
        </div>
      </div>

      <div className={style.MainCategoriesCard_Box}>
        <div className={style.card_mainIcon_Box}>
          <div className={style.maincategores_TitleBox}>
            Main Categories Title exteb
          </div>
          <div className={style.MainCategeories_IconBox}>
            <FontAwesomeIcon icon={faIndustry} style={{ color: "#89c0d2" }} />
          </div>
        </div>
        <div className={style.SuCategories_Container}>
          {[1, 2, 3, 4, 5].map((el, i) => {
            return (
              <>
                <div className={style.SubCategories_cardBox}>
                  <div className={style.subCatgories_ImageBox}>
                    <Image
                      src={banner}
                      fill
                      alt="Main-Categories page banner"
                    />
                  </div>
                  <div className={style.subCatgories_TitleBox}>
                    Sub Categories name
                  </div>
                  <div className={style.lefCategories_ListBox}>
                    <Link
                      href={""}
                      style={{ textDecoration: "none", fontSize: "1.2rem" }}
                    >
                      Leaf 1{" "}
                    </Link>
                    <Link
                      href={""}
                      style={{ textDecoration: "none", fontSize: "1.2rem" }}
                    >
                      Leaf 1{" "}
                    </Link>

                    <Link
                      href={""}
                      style={{ textDecoration: "none", fontSize: "1.2rem" }}
                    >
                      Leaf 1{" "}
                    </Link>
                    <Link
                      href={""}
                      style={{ textDecoration: "none", fontSize: "1.2rem" }}
                    >
                      Leaf 1{" "}
                    </Link>
                    <Link
                      href={""}
                      style={{ textDecoration: "none", fontSize: "1.2rem" }}
                    >
                      Leaf 1{" "}
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
          <div className={style.SubCategories_Static_Card}>
            <div className={style.subCategories_Arrow_IconBox}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>

            <p>All Sub Categories</p>
          </div>
        </div>
      </div>

      <div className={style.MainCategoriesCard_Box}>
        <div className={style.card_mainIcon_Box}>
          <div className={style.maincategores_TitleBox}>
            Main Categories Title exteb
          </div>
          <div className={style.MainCategeories_IconBox}>
            <FontAwesomeIcon icon={faIndustry} style={{ color: "#89c0d2" }} />
          </div>
        </div>
        <div className={style.SuCategories_Container}>
          {[1, 2, 3, 4, 5].map((el, i) => {
            return (
              <>
                <div className={style.SubCategories_cardBox}>
                  <div className={style.subCatgories_ImageBox}>
                    <Image
                      src={banner}
                      fill
                      alt="Main-Categories page banner"
                    />
                  </div>
                  <div className={style.subCatgories_TitleBox}>
                    <Link
                      href={`/categories/sub-categories/abc`}
                      style={{ textDecoration: "none", fontSize: "1.2rem" }}
                    >
                      Sub Categories lnk
                    </Link>
                  </div>
                  <div className={style.lefCategories_ListBox}>
                    <Link
                      href={`/categories/sub-categories/abc`}
                      style={{ textDecoration: "none", fontSize: "1.2rem" }}
                    >
                      Leaf{" "}
                    </Link>
                    <Link
                      href={""}
                      style={{ textDecoration: "none", fontSize: "1.2rem" }}
                    >
                      Leaf 1{" "}
                    </Link>

                    <Link
                      href={""}
                      style={{ textDecoration: "none", fontSize: "1.2rem" }}
                    >
                      Leaf 1{" "}
                    </Link>
                    <Link
                      href={""}
                      style={{ textDecoration: "none", fontSize: "1.2rem" }}
                    >
                      Leaf 1{" "}
                    </Link>
                    <Link
                      href={""}
                      style={{ textDecoration: "none", fontSize: "1.2rem" }}
                    >
                      Leaf 1{" "}
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
          <div className={style.SubCategories_Static_Card}>
            <div className={style.subCategories_Arrow_IconBox}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>

            <p>All Sub Categories</p>
          </div>
        </div>
      </div>
    </div>
  );
}
