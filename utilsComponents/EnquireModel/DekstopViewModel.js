import React from "react";
import style from "../css/EnquireModel.module.css";
import CategoriesFillter from "../CategoriesFilliter";

export default function DekstopViewModel() {
  return (
    <>
      <div className={style.DekstopViewModel_container}>
        <div className={style.categories_box}>
          <CategoriesFillter />
        </div>
        <div className={style.form_container}>
          <div className={style.form_inner_container}>
            <form>
              <div className={style.input_filed_Box}>
                <div className={style.form_lable_Box}>I want quotes for</div>
                <div className={style.form_input_Box}>
                  <input type="text" placeholder="Enter your requiremnt" />
                </div>
              </div>
              <div className={style.input_filed_Box}>
                <div className={style.form_lable_Box}>
                  Briefly describe your requirement
                </div>
                <div className={style.form_input_Box}>
                  <textarea type="text" placeholder="Enter your requiremnt" />
                </div>
              </div>

              <div className={style.form_btnBox}>
                <button>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
