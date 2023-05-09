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

export default function AppElementFillter() {
  const { appFillterShow, setappFillterShow } = useContext(AppUtilsContext);
  const handleClose = () => setappFillterShow(false);
  const [formData, setFormData] = useState({});
  const router = useRouter();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const query = Object.entries(formData)
      .filter(([, value]) => value !== "") // filter out fields with empty values
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");
    router.push(`/products?${query}`);
  }

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
                    <Nav.Item>
                      <Nav.Link eventKey="Categories">Categories</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Product">Product</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Price">Price</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col xs={9} md={9}>
                  <form onSubmit={handleSubmit}>
                    <Tab.Content>
                      <Tab.Pane eventKey="City">
                        <input
                          name="city"
                          type="text"
                          onChange={handleInputChange}
                        />
                      </Tab.Pane>
                      <Tab.Pane eventKey="Distric">
                        <input
                          name="district"
                          type="text"
                          onChange={handleInputChange}
                        />
                      </Tab.Pane>
                      <Tab.Pane eventKey="State">
                        <input
                          name="state"
                          type="text"
                          onChange={handleInputChange}
                        />
                      </Tab.Pane>
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
                            onChange={handleInputChange}
                          />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Price">
                        <div>
                          <input
                            name="price[gte]"
                            type="number"
                            onChange={handleInputChange}
                          />
                          <input
                            name="price[lte]"
                            type="number"
                            onChange={handleInputChange}
                          />
                        </div>
                      </Tab.Pane>
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
