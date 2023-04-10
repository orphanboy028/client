import { createContext, useEffect, useState } from "react";

export const ProductFormContext = createContext();

export const ProductFormContextProvider = ({ children }) => {
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const [addButton, setaddButton] = useState(false);
  const [tabs, settabs] = useState("baisc-details");

  const handelTabselect = (tab) => {
    console.log(tab);
    settabs(tab);
  };

  const handelAddProductBox = () => {
    setaddButton(true);
  };

  return (
    <ProductFormContext.Provider
      value={{
        buttonEnabled,
        handelTabselect,
        handelAddProductBox,
        addButton,
        tabs,
      }}
    >
      {children}
    </ProductFormContext.Provider>
  );
};
