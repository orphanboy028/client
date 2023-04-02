import React, { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import style from "../css/Utils.module.css";

export default function Drawer() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        className={`${style.offcanvas}`}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          diam nec justo commodo ullamcorper.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
