import React, { useContext } from "react";
import style from "../css/ProductCard.module.css";
import Image from "next/image";
import productimage from "../../../public/categories-images/user-64299b3ed5a8a4202023e2a2-1680812674663.jpeg";
import Dropdown from "react-bootstrap/Dropdown";
import dots from "../../../public/admin-images/dots.png";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import { ProductContext } from "../../../ContaxtApi/ProductContextApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Badge from "react-bootstrap/Badge";

export default function ProductCard({ product }) {
  const { token, loginUser } = useContext(UserContext);
  const {
    handelEdit,
    DeleteProductAction,
    ActivateProductAction,
    deActivateProductAction,
  } = useContext(ProductContext);

  const status = "deactivate";

  const handelDactiveProduct = async (prductId) => {
    try {
      const data = {
        id: prductId,
      };
      const result = await deActivateProductAction(data, token);
      console.log(result);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handelActiveProduct = async (prductId) => {
    try {
      const data = {
        id: prductId,
      };
      const result = await ActivateProductAction(data, token);
      console.log(result);
    } catch (error) {
      console.log(error.response);
    }
  };

  const renderButton = (product) => {
    if (product.status === "activate") {
      return (
        <button
          onClick={() => handelDactiveProduct(product._id)}
          className={style.Deactivate_btn}
        >
          Deactivate
        </button>
      );
    } else if (status === "deactivate") {
      return (
        <button
          onClick={() => handelActiveProduct(product._id)}
          className={style.Activate_btn}
        >
          Activate
        </button>
      );
    } else {
      return null; // Don't render any button if status is "pending"
    }
  };

  const handelDeleteProduct = async (prductId) => {
    try {
      const data = {
        id: prductId,
      };
      const result = await DeleteProductAction(data, token);
      console.log(result);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <div className={style.ProductCard_main_container}>
        <div className={style.ProductCard_inner_Container}>
          <div
            className={`${style.ProductCard_Image_container} ${style.boxes}`}
          >
            <Image
              src={`/product-feature-imges/${product.images[0].url}`}
              fill
            />
          </div>
          <div className={`${style.ProductCard_infoBox} ${style.boxes}`}>
            <div>
              <h4>{product.name} </h4>
            </div>
            <div>
              <h4>
                <span>RS</span> <span>{product?.price}</span>{" "}
              </h4>
            </div>
            <div>
              <p>{product?.description?.substring(0, 150)}</p>
            </div>
            <div className={style.product_StatusBox}>
              <Badge
                bg={
                  product?.status === "activate"
                    ? "success"
                    : product?.status === "deactivate"
                    ? "danger"
                    : "warning"
                }
                style={{ fontWeight: "400" }}
              >
                {product?.status === "activate"
                  ? "Active"
                  : product?.status === "deactivate"
                  ? "deactivate"
                  : "Pending"}
              </Badge>
            </div>
            <div className={style.product_action_btnBox}>
              {renderButton(product)}
            </div>
            <div className={style.product_edit_btnBox}>
              <div className={style.product_editBtn}>Edit </div>
              <div
                className={style.product_editBtn}
                id={product._id}
                onClick={() => handelDeleteProduct(product._id)}
              >
                Delete{" "}
              </div>
            </div>
          </div>
          <div className={`${style.boxes} ${style.three_dotsBox}`}>
            <Dropdown drop="start">
              <Dropdown.Toggle variant="transprant" id="dropdown-basic-button">
                {/* <Image src={dots} alt="three-dots" width={20} /> */}
                <FontAwesomeIcon icon={faEllipsisVertical} size="2x" />
              </Dropdown.Toggle>
              <Dropdown.Menu key={"start"} style={{ fontSize: "1.4rem" }}>
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
