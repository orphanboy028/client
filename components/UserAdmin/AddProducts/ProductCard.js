import React, { useContext, useEffect } from "react";
import style from "../css/ProductCard.module.css";
import Image from "next/image";
import productimage from "../../../public/categories-images/user-64299b3ed5a8a4202023e2a2-1680812674663.jpeg";
import Dropdown from "react-bootstrap/Dropdown";
import dots from "../../../public/admin-images/dots.png";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import { ProductContext } from "../../../ContaxtApi/ProductContextApi";
import { AppUtilsContext } from "../../../ContaxtApi/AppUtilsContaxApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Badge from "react-bootstrap/Badge";
import ConfirmModel from "../../../utilsComponents/ConfirmModel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductCard({ product }) {
  const { token, loginUser } = useContext(UserContext);
  const {
    handelEdit,
    DeleteProductAction,
    ActivateProductAction,
    deActivateProductAction,
  } = useContext(ProductContext);
  const {
    modelactiondelete,
    setmodelactiondelete,
    handelToggelActionModel,
    handelProductId,
    slectedProductId,
    setslectedProductId,
    refresPage,
    setrefresPage,
    handelProductDeactivate,
    handelProductActivate,
    ProductActivateId,
    setProductActivateId,
  } = useContext(AppUtilsContext);

  const status = "deactivate";

  const renderButton = (product) => {
    if (product.status === "active") {
      return (
        <button
          onClick={() => handelProductDeactivate(product._id)}
          className={style.Deactivate_btn}
        >
          Deactivate
        </button>
      );
    } else if (status === "deactivate") {
      return (
        <button
          onClick={() => handelProductActivate(product._id)}
          className={style.Activate_btn}
        >
          Activate
        </button>
      );
    } else {
      return null; // Don't render any button if status is "pending"
    }
  };

  useEffect(() => {
    console.log(slectedProductId);
  }, [slectedProductId]);

  return (
    <>
      <ToastContainer />
      <div className={style.ProductCard_main_container}>
        <div
          className={`${style.Product_StatusBox} ${
            product.status === "active"
              ? style.product_StateActivate
              : product.status === "inactive"
              ? style.product_StatusDeactivate
              : ""
          }`}
        >
          {product.status}
        </div>
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
              <p className={style.deskstop_descreptions}>
                {product?.description?.substring(0, 150)}
              </p>
              <p className={style.mobile_descreptions}>
                {product?.description?.substring(0, 50)}
              </p>
            </div>
            <div className={style.status_BtnBox}>
              <div className={style.product_action_btnBox}>
                {renderButton(product)}
              </div>
              <div className={style.product_edit_btnBox}>
                <div
                  className={style.product_editBtn}
                  onClick={() => handelEdit(product._id, product.slug)}
                >
                  Edit{" "}
                </div>
                <div
                  className={style.product_deleteBtn}
                  id={product._id}
                  // onClick={() => handelDeleteProduct(product._id)}
                  onClick={() => handelProductId(product._id)}
                >
                  Delete{" "}
                </div>
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
