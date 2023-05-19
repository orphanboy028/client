import React from "react";
import style from "./css/SubCategories.module.css";
import Image from "next/image";
import banner from "../../public/banners-images/web-design.png";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";

export default function SubCategoriesCard({ title, slug, lefCategory }) {
  return (
    <>
      <div className={style.SubCategoriesCard_mainContainer}>
        <div className={style.SubCategoriesCard_Container}>
          <div className={style.SubCategoriesCard_main_subBox}>
            <div className={style.Main_sub_InnerBox}>
              <div className={style.subCategoriesImage_Box}>
                <Image src={banner} fill alt="Sub-categories-image" />
              </div>
              <div className={style.SubCategoriesCard_subCategories_TitleBox}>
                <Link
                  href={`/categories/lef-categories/${slug}`}
                  style={{ textDecoration: "none" }}
                >
                  {title}
                </Link>
              </div>
            </div>
          </div>
          <div className={style.SubCategoriesCard_LefCategories_container}>
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                {/* <Accordion.Header>Accordion Item #1</Accordion.Header> */}
                <Accordion.Body>
                  <div className={style.Accordion_body_Container}>
                    {lefCategory.slice(0, 5).map((lef, i) => {
                      return (
                        <>
                          <div className={style.Accordion_cardBox}>
                            <d1v className={style.Accordion_imageBox}>
                              <Image src={banner} fill alt="lefc-categories" />
                            </d1v>
                            <div className={style.Accordion_left_Title}>
                              <h5>{lef.lefCategoryName}</h5>
                            </div>
                            <div className={style.Accordion_Product_countBox}>
                              3878
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Body>
                  <div className={style.Accordion_body_toggle_Container}>
                    {lefCategory.slice(5).map((lef, i) => {
                      return (
                        <>
                          <div className={style.Accordion_cardBox}>
                            <d1v className={style.Accordion_imageBox}>
                              <Image src={banner} fill alt="lefc-categories" />
                            </d1v>
                            <div className={style.Accordion_left_Title}>
                              <h5>{lef.lefCategoryName}</h5>
                            </div>
                            <div className={style.Accordion_Product_countBox}>
                              3878
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </Accordion.Body>
                <Accordion.Header>
                  <div className={style.Accordion_toogle_ViewMoreBox}>
                    View More
                  </div>
                </Accordion.Header>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
