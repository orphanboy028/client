import React, { useContext, useState } from "react";
import style from "../css/EnquireModel.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AppUtilsContext } from "../../ContaxtApi/AppUtilsContaxApi";
import DekstopViewModel from "./DekstopViewModel";
import MobileViewModel from "./MobileViewModel";

export default function EnquireModel() {
  const {
    handelEnquireyModelToggle,
    EnquireModelShow,
    setEnquireModelShow,
    MobileCategoriesOffcanvasshow,
    handelMobileCategoriesOffCanva,
  } = useContext(AppUtilsContext);

  const [Enquiremobiletab, setEnquiremobiletab] = useState(0);

  return (
    <>
      <div>
        <Modal
          show={EnquireModelShow}
          onHide={() => setEnquireModelShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Tell us what you need.
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Get the Best Deals and Exclusive Offers with TradeIndia</h4>
            <div className={style.dekstop_Form_Container}>
              <DekstopViewModel />
            </div>
            <div className={style.mobile_form_container}>
              <MobileViewModel />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handelEnquireyModelToggle}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
