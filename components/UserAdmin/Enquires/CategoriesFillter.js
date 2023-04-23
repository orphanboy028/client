import React, { useContext, useEffect, useState } from "react";
import { EnquiryContext } from "../../../ContaxtApi/EnquiryContaxApi";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function CategoriesFillter() {
  const {
    categoriesFillterShow,
    setcategoriesFillterShow,
    handleCloseCategories,
    handleShowCategories,
  } = useContext(EnquiryContext);
  return (
    <>
      <Offcanvas
        show={categoriesFillterShow}
        onHide={handleCloseCategories}
        placement="top"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Search Categories</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h1>Categories Body</h1>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
