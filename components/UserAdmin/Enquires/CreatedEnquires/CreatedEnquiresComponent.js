import React, { useContext, useEffect } from "react";
import style from "../../css/CreatedEnquiresCompoenent.module.css";
import CreatedEnquiresCards from "./CreatedEnquiresCards";
import { EnquiryContext } from "../../../../ContaxtApi/EnquiryContaxApi";
import { UserContext } from "../../../../ContaxtApi/UserContaxApi";
import CreateEnqureDetaills from "./CreateEnqureDetaills";
import { CreateEnquireContext } from "../../../../ContaxtApi/CreateEnquiresContext";
export default function CreatedEnquiresComponent() {
  const { token } = useContext(UserContext);

  const { ListOfCreatedEnquires } = useContext(CreateEnquireContext);

  useEffect(() => {
    ListOfCreatedEnquires(token);
  }, [token]);
  return (
    <>
      <div className={style.CreatedEnquiresComponent_mainContainer}>
        <div className={style.CreatedEnquiresList_Container}>
          <div className={style.Enquires_MesageBox}>
            <CreatedEnquiresCards />
          </div>
          <div className={style.enquire_Deatil_Container}>
            <CreateEnqureDetaills />
          </div>
        </div>
      </div>
    </>
  );
}
