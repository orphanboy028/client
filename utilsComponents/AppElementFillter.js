import React, { useContext, useState } from "react";
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
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{ height: "100%" }}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="Categories">
              <Row>
                <Col xs={3} md={2} lg={2}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="City">City</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Distric">Distric</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="State">State</Nav.Link>
                    </Nav.Item>
                    {filterFor === "Product" && (
                      <>
                        <Nav.Item>
                          <Nav.Link eventKey="Categories">Categories</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="Product">Product</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="Price">Price</Nav.Link>
                        </Nav.Item>
                      </>
                    )}
                  </Nav>
                </Col>
                <Col xs={9} md={9}>
                  <form onSubmit={onSubmit}>
                    <Tab.Content>
                      <Tab.Pane eventKey="City">
                        {selectedCity}
                        <LocationInput handelSelect={handelSelectCity} />
                      </Tab.Pane>
                      <Tab.Pane eventKey="Distric">
                        <LocationInput handelSelect={handelSelectDistric} />
                      </Tab.Pane>
                      <Tab.Pane eventKey="State">
                        <LocationInput handelSelect={handelSelectState} />
                      </Tab.Pane>
                      {filterFor === "Product" && (
                        <>
                          <Tab.Pane eventKey="Categories">
                            <div>
                              <CategoriesFilliter />
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="Product">
                            <div>
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
                    <div
                      style={{
                        border: "1px solid red",
                        position: "absolute",
                        bottom: "50px",
                        right: "50px",
                      }}
                    >
                      <button>apply</button>
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
