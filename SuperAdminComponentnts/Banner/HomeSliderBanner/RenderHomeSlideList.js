import React, { useContext } from "react";
import style from "../css/AdminHomeSlider.module.css";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import { BannerContext } from "../../../ContaxtApi/superAdminContext/BannerContextApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Table from "react-bootstrap/Table";

export default function RenderHomeSlideList() {
  const { token, loginUser } = useContext(UserContext);
  const {
    homePageSliders,
    updateStatusAction,
    InActivateStatusAction,
    loading,
    setloading,
  } = useContext(BannerContext);

  console.log(homePageSliders);

  const handelStatusActivate = async (id) => {
    try {
      setloading(true);
      const result = await updateStatusAction(id, token);
      if (result.data.status === "Success") {
        toast.success("Activate Home page slider", {
          // autoClose: 1000,
          onClose: () => {
            setloading(false);
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handelStatusInActivate = async (id) => {
    try {
      setloading(true);
      const result = await InActivateStatusAction(id, token);
      if (result.data.status === "Success") {
        toast.success("IN Activate Home page slider", {
          // autoClose: 1000,
          onClose: () => {
            setloading(false);
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderBtn = (slider) => {
    if (slider.status === "pending") {
      return (
        <>
          <div className={style.BannerTable_ActivaternderBtn}>
            <button
              disabled={loading}
              onClick={() => handelStatusActivate(slider._id)}
            >
              Active
            </button>
            ;
          </div>
        </>
      );
    } else if (slider.status === "active") {
      return (
        <>
          <div className={style.BannerTable_INActivernderBtn}>
            <button
              disabled={loading}
              onClick={() => handelStatusInActivate(slider._id)}
            >
              In Active
            </button>
            ;
          </div>
        </>
      );
    } else if (slider.status === "inactive") {
      return (
        <>
          <div className={style.BannerTable_rnderBtn}>
            <button
              disabled={loading}
              onClick={() => handelStatusActivate(slider._id)}
            >
              Update
            </button>
            ;
          </div>
        </>
      );
    }
  };

  return (
    <div>
      <ToastContainer />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S No</th>
            <th>Clien Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
            <th>Pending</th>
          </tr>
        </thead>
        <tbody>
          {homePageSliders?.map((slider) => {
            return (
              <>
                <tr>
                  <td>1</td>
                  <td>{slider?.clientName}</td>
                  <td>{slider?.updatedAt}</td>
                  <td>{slider?.status}</td>
                  <td>{renderBtn(slider)}</td>
                  <td>@mdo</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
