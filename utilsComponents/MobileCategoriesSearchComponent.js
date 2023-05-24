import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AppUtilsContext } from "../ContaxtApi/AppUtilsContaxApi";
export default function MobileCategoriesSearchComponent() {
  const {
    handelMobileCategoriesOffCanva,
    MobileCategoriesOffcanvasshow,
    setMobileCategoriesOffcanvasshow,
  } = useContext(AppUtilsContext);

  return (
    <div>
      <div>
        <Offcanvas
          show={MobileCategoriesOffcanvasshow}
          onHide={handelMobileCategoriesOffCanva}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}
