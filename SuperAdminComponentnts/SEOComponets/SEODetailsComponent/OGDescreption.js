import React, { useContext } from "react";
import style from "../../css/SocialMediaOGTag.module.css";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { SEOContaxt } from "../../../ContaxtApi/SEOContaxApi";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function OGDescreption() {
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
    <>
      <div>
        <h5>Update OG Descreption</h5>
      </div>
      <div className={style.og_formBox}>
        <form onSubmit={handleSubmit(handelDescreptioneSubmit)}>
          <div className={style.OGTitle_box}>
            <div className={style.OGInputBox}>
              <input
                type="text"
                name="ogdescription"
                aria-describedby="ogdescriptionHelp"
                placeholder="Update OG Descreption"
                {...register("ogdescription", {
                  required: "Descreption are required",
                })}
              />
            </div>
            <div className={style.og_BtnBox}>
              <button>Update</button>
            </div>
          </div>
          <div>
            <small id="ogdescriptionHelp">
              {errors.ogdescription && <p>{errors.ogdescription.message}</p>}
            </small>
          </div>
        </form>
      </div>
    </>
  );
}
