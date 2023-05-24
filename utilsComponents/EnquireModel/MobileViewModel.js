import React, { useState } from "react";
import style from "../css/EnquireModel.module.css";
import CategoriesFilliter from "../CategoriesFilliter";
export default function MobileViewModel() {
  const [Enquiremobiletab, setEnquiremobiletab] = useState(1);

  return (
    <>
      <div className={style.MobileViewModel_container}>
        <div className={style.Inner_container}>
          <form>
            {Enquiremobiletab === 0 && (
              <>
                <div className={style.Mobile_form_container}>
                  <div className={style.Mobile_input_lable_Box}>
                    <div className={style.Moble_lableBox}>name</div>
                    <div className={style.Mobile_inputBox}>
                      <input type="text" placeholder="place your enquire" />
                    </div>
                  </div>
                  <div className={style.Mobile_input_lable_Box}>
                    <div className={style.Moble_lableBox}>name</div>
                    <div className={style.Mobile_inputBox}>
                      <textarea type="text" placeholder="place your enquire" />
                    </div>
                  </div>
                  <div className={style.Mobile_btn_box}>
                    <button>Next</button>
                  </div>
                </div>
              </>
            )}
            {Enquiremobiletab === 1 && (
              <>
                <div className={style.Mobile_categories_FillterBox}>
                  <CategoriesFilliter />
                </div>
                <div className={style.Mobile_btn_box}>
                  <button>Send</button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
