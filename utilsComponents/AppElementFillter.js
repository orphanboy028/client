import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { AppUtilsContext } from "../ContaxtApi/AppUtilsContaxApi";
import CategoriesFilliter from "./CategoriesFilliter";

export default function AppElementFillter() {
  const { appFillterShow, setappFillterShow } = useContext(AppUtilsContext);
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
                    <Nav.Item>
                      <Nav.Link eventKey="Categories">Categories</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col xs={9} md={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="City">
                      <p>
                        this
                        ihhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhs
                        tab content vklnvklfnvnll kjvbfkvblfkv lfvlkfblflbbl
                        kvvkfbvb fb fb fb bbbbbbbbbbbbbbbbbb
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Distric">
                      <p>Check tab content</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="State">
                      <p>Check tab content</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Categories">
                      <div>
                        <CategoriesFilliter />
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}
