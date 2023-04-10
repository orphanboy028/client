import React, { useContext } from "react";
import style from "../css/ProductCard.module.css";
import Image from "next/image";
import productimage from "../../../public/categories-images/user-64299b3ed5a8a4202023e2a2-1680812674663.jpeg";
import Dropdown from "react-bootstrap/Dropdown";
import dots from "../../../public/admin-images/dots.png";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import { ProductContext } from "../../../ContaxtApi/ProductContextApi";

export default function ProductCard({ product }) {
  const { token, loginUser } = useContext(UserContext);
  const { handelEdit } = useContext(ProductContext);

  return (
    <>
      <div className={style.ProductCard_main_container}>
        <div className={style.ProductCard_inner_Container}>
          <div
            className={`${style.ProductCard_Image_container} ${style.boxes}`}
          >
            <Image
              src={`/product-feature-imges/${product.images[0].url}`}
              width={150}
              height={150}
            />
          </div>
          <div className={`${style.ProductCard_infoBox} ${style.boxes}`}>
            <div>
              <h4>{product.name} </h4>
            </div>
            <div>
              <h4>
                <span>RS</span> <span>{product?.price}</span> <span>/</span>{" "}
                <span>pices</span>
              </h4>
            </div>
            <div>
              <p>
                Being a leading firm in this industry, we are offering a high
                quality range of CNC Turning Fixtures.{" "}
              </p>
            </div>
          </div>
          <div className={`${style.boxes} ${style.three_dotsBox}`}>
            <Dropdown>
              <Dropdown.Toggle variant="transprant" id="dropdown-basic-button">
                <Image src={dots} alt="three-dots" width={20} />
              </Dropdown.Toggle>
              <Dropdown.Menu key={"start"}>
                <Dropdown.Item
                  onClick={() => handelEdit(product._id, product.slug)}
                >
                  Edit
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
}
