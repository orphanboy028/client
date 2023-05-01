import React, { useContext } from "react";
import style from "../../css/SeoDetailsComponent.module.css";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { SEOContaxt } from "../../../ContaxtApi/SEOContaxApi";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function KeywordsComponent() {
  const { UpdateProductKeywordsAction, refreshSEOUpdate, setrefreshSEOUpdate } =
    useContext(SEOContaxt);
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

  const handelSubmit = async (formData) => {
    try {
      setrefreshSEOUpdate(true);
      const result = await UpdateProductKeywordsAction(formData, token, slug);
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
    <div className={style.MetaDescription_Main_Container}>
      <ToastContainer />
      <div className={style.MetaDescription_innerContainer}>
        <div>
          <h2>Add Product Meta Descreption</h2>
          <p>EXample:- for adding Keywords keyword1, keuword2 </p>
        </div>
        <div className={style.MetaDescription_inputContainer}>
          <form onSubmit={handleSubmit(handelSubmit)}>
            <textarea
              name="content"
              type="text"
              aria-describedby="ContentHelp"
              {...register("content", {
                required: "Keywords are required",
              })}
            />
            <div>
              <small
                id="ContentHelp"
                className={style.MetaDescription_errorBox}
              >
                {errors.content && <p>{errors.content.message}</p>}
              </small>
            </div>
            <div className={style.MetaDescription_formBtn_Box}>
              <button>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
