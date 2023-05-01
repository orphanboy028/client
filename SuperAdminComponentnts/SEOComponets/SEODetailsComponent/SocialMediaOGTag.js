import React, { useContext } from "react";
import style from "../../css/SocialMediaOGTag.module.css";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { SEOContaxt } from "../../../ContaxtApi/SEOContaxApi";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OGDescreption from "./OGDescreption";

export default function SocialMediaOGTag() {
  const {
    UpdateMetaOgTitleAction,
    UpdateMetaOgDescriptionAction,
    refreshSEOUpdate,
    setrefreshSEOUpdate,
  } = useContext(SEOContaxt);
  const { token, loginUser } = useContext(UserContext);
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });
  const handelTitleSubmit = async (formData) => {
    try {
      setrefreshSEOUpdate(true);
      const result = await UpdateMetaOgTitleAction(formData, token, slug);
      console.log(result);
      if (result.data.status === "Success") {
        toast.success(result.data.message);
        setrefreshSEOUpdate(false);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const handelDescreptioneSubmit = async (formData) => {
    try {
      setrefreshSEOUpdate(true);
      const result = await UpdateMetaOgDescriptionAction(formData, token, slug);
      console.log(result);
      if (result.data.status === "Success") {
        toast.success(result.data.message);
        setrefreshSEOUpdate(false);
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div className={style.SocialMediaOGTag_main_container}>
      <ToastContainer />
      <div className={style.SocialMediaOGTag_innerContainer}>
        <div className={style.SocialMediaOGTag_HeadingBox}>
          <h3>Updat Social Media OG Tags</h3>
        </div>
        <div className={style.SocialMediaOGTag_OG_Title_Container}>
          <div>
            <h5>Update OG TITLE</h5>
          </div>
          <div className={style.og_formBox}>
            <form onSubmit={handleSubmit(handelTitleSubmit)}>
              <div className={style.OGTitle_box}>
                <div className={style.OGInputBox}>
                  <input
                    type="text"
                    name="ogTitle"
                    aria-describedby="ogTitleHelp"
                    placeholder="Update OG Title"
                    {...register("ogTitle", {
                      required: "Titel are required",
                    })}
                  />
                </div>

                <div className={style.og_BtnBox}>
                  <button>Update</button>
                </div>
              </div>
              <div>
                <small id="ogTitleHelp">
                  {errors.ogTitle && <p>{errors.ogTitle.message}</p>}
                </small>
              </div>
            </form>
          </div>
        </div>

        <div className={style.SocialMediaOGTag_OG_Title_Container}>
          <OGDescreption />
        </div>
      </div>
    </div>
  );
}
