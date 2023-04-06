import React, { useContext, useEffect, useState } from "react";
import style from "../css/Profile.module.css";
import Image from "next/image";
import logo from "../../../public/Business-logos/logo.jpeg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import BusinessDetails from "./BusinessDetails";
import ContactDetails from "./ContactDetails";
import { AppUtilsContext } from "../../../ContaxtApi/AppUtilsContaxApi";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import { BusinessContext } from "../../../ContaxtApi/BusinessContaxApi";
import EditContactDetails from "./EditContactDetails";
import EditBusinessDetails from "./EditBusinessDetails";

export default function ProfileComponent() {
  const { key, setKey } = useContext(AppUtilsContext);
  const { token, loginUser } = useContext(UserContext);
  const { getBusinessDetails, Userbusiness } = useContext(BusinessContext);

  useEffect(() => {
    getBusinessDetails(token);
  }, []);

  return (
    <div className={style.ProfileComponent_container}>
      <div className={style.ProfileComponent_logo_container}>
        <div className={style.ProfileComponent_logoBox}>
          <Image
            src={logo}
            alt="Business Logo"
            width={70}
            className={style.logoImage}
          />
        </div>
        <div className={style.ProfileComponent_CompanyName}>
          <h3>Daksh Tooling System</h3>
        </div>
        <div className={style.ProfileComponent_OwnerName}>
          <h4>
            {`(`} {loginUser.name} {`)`}
          </h4>
        </div>
      </div>

      <div className={style.ProfileComponent_information_container}>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="BusinessDeails" title="Business Deails">
            <BusinessDetails Userbusiness={Userbusiness} />
          </Tab>
          <Tab eventKey="ContactDetails" title="Contact Details">
            <ContactDetails Userbusiness={Userbusiness} />
          </Tab>
          <Tab eventKey="EditBusinessDeails" title="Edit Business Deails">
            <EditBusinessDetails Userbusiness={Userbusiness} />
          </Tab>
          <Tab eventKey="EditContactDetails" title="Edit Contact Details">
            <EditContactDetails Userbusiness={Userbusiness} />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
