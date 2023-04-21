import React, { useContext, useEffect, useState } from "react";
import style from "../../css/IsEnquieryAppliyed.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { EnquiryContext } from "../../../../ContaxtApi/EnquiryContaxApi";
export default function EnquieyAppliyed() {
  const { enquireyPostedUser } = useContext(EnquiryContext);
  //   destructure User Data how posted Enquirey
  const { businessDetails } = enquireyPostedUser;
  console.log(enquireyPostedUser);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={style.EnquieyAppliyed_inner_form_container}>
        <div className={style.EnquieyAppliyed_succesfull_IconBox}>
          <FontAwesomeIcon
            icon={faCircleCheck}
            style={{ color: "#33cc75" }}
            size="2xl"
          />
        </div>
        <div className={style.EnquieyAppliyed_BtnBox}>
          <p>Click on Button to get contact Details</p>
          <button onClick={handleShow}>Contact Information </button>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{businessDetails?.CompanyName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={style.EnquieyAppliyed_detailsBox}>
              <div className={style.EnquieyAppliyed_staticFiled}>
                <p> Contact Person </p>
              </div>
              <div className={style.EnquieyAppliyed_dynimicField}>
                {" "}
                {enquireyPostedUser?.name}
              </div>
            </div>
            <div className={style.EnquieyAppliyed_detailsBox}>
              <div className={style.EnquieyAppliyed_staticFiled}>
                <p>mobile Number</p>
              </div>
              <div className={style.EnquieyAppliyed_dynimicField}>
                {" "}
                {enquireyPostedUser?.mobileNumber}
              </div>
            </div>
            <div className={style.EnquieyAppliyed_detailsBox}>
              <div className={style.EnquieyAppliyed_staticFiled}>
                <p>E-Mail</p>
              </div>
              <div className={style.EnquieyAppliyed_dynimicField}>
                {" "}
                {enquireyPostedUser?.email}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
