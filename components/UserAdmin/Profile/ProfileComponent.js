import React, { useContext, useEffect, useState } from "react";
import style from "../css/Profile.module.css";
import Image from "next/image";
import logo from "../../../public/Business-logos/logo.jpeg";
import plusIcon from "../../../public/app-static-images/plus.png";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import BusinessDetails from "./BusinessDetails";
import ContactDetails from "./ContactDetails";
import { AppUtilsContext } from "../../../ContaxtApi/AppUtilsContaxApi";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import { BusinessContext } from "../../../ContaxtApi/BusinessContaxApi";
import EditContactDetails from "./EditContactDetails";
import EditBusinessDetails from "./EditBusinessDetails";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

export default function ProfileComponent() {
  const { key, setKey } = useContext(AppUtilsContext);
  const { token, loginUser } = useContext(UserContext);
  const {
    getBusinessDetails,
    Userbusiness,
    file,
    setfile,
    imagePreview,
    setImagePreview,
    handleImageChange,
    handelupdateImage,
  } = useContext(BusinessContext);

  useEffect(() => {
    getBusinessDetails(token);
  }, []);

  const updateImage = async () => {
    try {
      const result = await handelupdateImage(token);
      console.log(result.data.status);
      if (result.data.status === "Success") {
        toast.success(result.data.message);
        setImagePreview(null);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className={style.ProfileComponent_container}>
      <ToastContainer />
      <div className={style.ProfileComponent_logo_container}>
        <div className={style.ProfileComponent_uplod_btnBox}>
          {!imagePreview && (
            <>
              <div className={style.chooseFile_btnBox}>
                <input
                  type="file"
                  id="FileInput"
                  onChange={handleImageChange}
                />
                <label htmlFor="FileInput" class="file-input-label">
                  <FontAwesomeIcon
                    icon={faCamera}
                    size="2x"
                    style={{ color: "#fff" }}
                  />
                </label>
              </div>
            </>
          )}

          {imagePreview && (
            <>
              <div className={style.updateImage_btnBox}>
                <button onClick={updateImage}>Update</button>
              </div>
            </>
          )}
        </div>

        <div className={style.ProfileComponent_conent_container}>
          <div className={style.ProfileComponent_logoBox}>
            {imagePreview && (
              <>
                <Image
                  src={imagePreview}
                  alt="Selected"
                  width={70}
                  height={70}
                  className={style.logoImage}
                />
              </>
            )}

            {!imagePreview && (
              <>
                <Image
                  src={`/Company-logo/${Userbusiness?.photo}`}
                  alt="Business Logo"
                  width={70}
                  height={70}
                  className={style.logoImage}
                />
              </>
            )}
          </div>
          <div className={style.ProfileComponent_CompanyName}>
            <h3>Daksh Tooling System</h3>
          </div>
          <div className={style.ProfileComponent_OwnerName}>
            <h4>
              {`(`} {loginUser?.name} {`)`}
            </h4>
          </div>
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
