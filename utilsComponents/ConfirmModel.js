import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AppUtilsContext } from "../ContaxtApi/AppUtilsContaxApi";
export default function ConfirmModel({ handelAction, actionId, ModelTitle }) {
  const { modelactiondelete, setmodelactiondelete, handelToggelActionModel } =
    useContext(AppUtilsContext);

  return (
    <>
      <Modal show={modelactiondelete} onHide={handelToggelActionModel}>
        <Modal.Header closeButton>
          <Modal.Title>{ModelTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          If you sure to delete the product click on Delete Button other wise
          clcik on No
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handelToggelActionModel}>
            No
          </Button>
          <Button variant="primary" onClick={() => handelAction(actionId)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
