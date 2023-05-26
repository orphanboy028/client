import React, { useContext, useState } from "react";
import style from "./css/AppElementFillter.module.css";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { AppUtilsContext } from "../ContaxtApi/AppUtilsContaxApi";
import CategoriesFilliter from "./CategoriesFilliter";
import { useRouter } from "next/router";
import LocationInput from "./LocationInput";
import { ExternalApiContaxt } from "../ContaxtApi/ExternalConaxt/ExternalContaxtApi";

export default function AppElementFillter({
  onInputChange,
  onSubmit,
  filterFor,
}) {
  const { appFillterShow, setappFillterShow } = useContext(AppUtilsContext);
  const {
    selectedCity,
    setSelectedCity,
    selectDistric,
    setselectDistric,
    setstateSlected,
    stateSlected,
    handelSelectCity,
    handelSelectDistric,
    handelSelectState,
  } = useContext(ExternalApiContaxt);

  const handleClose = () => setappFillterShow(false);

  return (
    <>
      <div>
        <Offcanvas
          show={appFillterShow}
          onHide={handleClose}
          placement="top"
          style={{ height: "100%" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Fillter</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{ height: "100%" }}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="Categories">
              <Row className={style.RowContainer}>
                <Col xs={4} md={3} lg={3} style={{ border: "1px solid #eee" }}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item className={style.NavItem}>
                      <Nav.Link eventKey="City">City</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={style.NavItem}>
                      <Nav.Link eventKey="Distric">Distric</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={style.NavItem}>
                      <Nav.Link eventKey="State">State</Nav.Link>
                    </Nav.Item>
                    {filterFor === "Product" && (
                      <>
                        <Nav.Item className={style.NavItem}>
                          <Nav.Link eventKey="Categories">Categories</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={style.NavItem}>
                          <Nav.Link eventKey="Product">Product</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={style.NavItem}>
                          <Nav.Link eventKey="Price">Price</Nav.Link>
                        </Nav.Item>
                      </>
                    )}
                  </Nav>
                </Col>
                <Col xs={8} md={6} className={style.right_col}>
                  <form onSubmit={onSubmit}>
                    <Tab.Content>
                      <Tab.Pane eventKey="City">
                        {selectedCity}
                        <div className={style.input_box}>
                          <LocationInput handelSelect={handelSelectCity} />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Distric">
                        <div className={style.input_box}>
                          <LocationInput handelSelect={handelSelectDistric} />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="State">
                        <div className={style.input_box}>
                          <LocationInput handelSelect={handelSelectState} />
                        </div>
                      </Tab.Pane>
                      {filterFor === "Product" && (
                        <>
                          <Tab.Pane eventKey="Categories">
                            <div>
                              <CategoriesFilliter />
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="Product">
                            <div className={style.input_box}>
                              <input
                                name="name"
                                type="text"
                                onChange={onInputChange}
                              />
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="Price">
                            <div>
                              <input
                                name="price[gte]"
                                type="number"
                                onChange={onInputChange}
                              />
                              <input
                                name="price[lte]"
                                type="number"
                                onChange={onInputChange}
                              />
                            </div>
                          </Tab.Pane>
                        </>
                      )}
                    </Tab.Content>
                    <div className={style.apply_btnBox}>
                      <button>Apply</button>
                    </div>
                  </form>
                </Col>
              </Row>
            </Tab.Container>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}
