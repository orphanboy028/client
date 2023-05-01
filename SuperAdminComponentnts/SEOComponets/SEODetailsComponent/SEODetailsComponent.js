import React from "react";
import style from "../../css/SeoDetailsComponent.module.css";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import MetaDescription from "./MetaDescription";
import { useRouter } from "next/router";
import KeywordsComponent from "./KeywordsComponent";
import SocialMediaOGTag from "./SocialMediaOGTag";

export default function SEODetailsComponent() {
  return (
    <>
      <div className={style.SEODetailsComponent_main_Container}>
        <div className={style.SEODetailsComponent_Stats_container}>
          <p>Stats</p>
        </div>
        <div className={style.SEODetailsComponent_MetaTag_Container}>
          <Tab.Container
            id="list-group-tabs-example"
            defaultActiveKey="#addMetaDescreption"
          >
            <Row>
              <Col sm={3}>
                <ListGroup>
                  <ListGroup.Item action href="#addMetaDescreption">
                    Meta Descreption
                  </ListGroup.Item>
                  <ListGroup.Item action href="#addKeywords">
                    Add Keywords
                  </ListGroup.Item>
                  <ListGroup.Item action href="#ogTags">
                    Social Meida OG Tags
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="#addMetaDescreption">
                    <MetaDescription />
                  </Tab.Pane>
                  <Tab.Pane eventKey="#addKeywords">
                    <KeywordsComponent />
                  </Tab.Pane>
                  <Tab.Pane eventKey="#ogTags">
                    <SocialMediaOGTag />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </>
  );
}
