import React, { useState } from "react";
import style from "../css/Profile.module.css";
import Image from "next/image";
import logo from "../../../public/Business-logos/logo.jpeg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function ProfileComponent() {
  const [key, setKey] = useState("home");
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
            {`(`} Pawan Chauhan {`)`}
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
          <Tab eventKey="home" title="Home">
            <p>
              Home! 'tis true, I have gone here and there, And made my self a
              motley to the view, Gor'd mine own thoughts, sold cheap what is
              most dear, Made old offences of affections new; Most true it is,
              that I have look'd on truth Askance and strangely; but, by all
              above, These blenches gave my heart another youth, And worse
              essays prov'd thee my best of love. Now all is done, save what
              shall have no end: Mine appetite I never more will grind
            </p>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <p>
              Alas! 'tis true, I have gone here and there, And made my self a
              motley to the view, Gor'd mine own thoughts, sold cheap what is
              most dear, Made old offences of affections new; Most true it is,
              that I have look'd on truth Askance and strangely; but, by all
              above, These blenches gave my heart another youth, And worse
              essays prov'd thee my best of love. Now all is done, save what
              shall have no end: Mine appetite I never more will grind
            </p>
          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>
            <p>
              Who will believe my verse in time to come, If it were fill'd with
              your most high deserts? Though yet heaven knows it is but as a
              tomb Which hides your life, and shows not half your parts. If I
              could write the beauty of your eyes, And in fresh numbers number
              all your graces, The age to come would say 'This poet lies; Such
              heavenly touches ne'er touch'd earthly faces.' So should my
              papers, yellow'd with their age, Be scorn'd, like old men of less
              truth than tongue,
            </p>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
